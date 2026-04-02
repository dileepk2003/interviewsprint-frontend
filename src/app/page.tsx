"use client";

import { useEffect, useMemo, useState } from "react";
import AddTaskForm from "@/components/AddTaskForm";
import TaskList from "@/components/TaskList";
import StatsCards from "@/components/StatsCards";
import BottomNav from "@/components/BottomNav";
import ThemeToggle from "@/components/ThemeToggle";
import { loadTasks, saveTasks } from "@/lib/storage";
import { Task, Category } from "@/types/task";

type Filter = "All" | "Done" | "Pending";

const seedTasks: Task[] = [
  {
    id: "1",
    title: "Revise React hooks deeply",
    category: "Frontend",
    priority: "High",
    done: false,
    createdAt: new Date().toISOString(),
  },
  {
    id: "2",
    title: "Solve 2 DSA medium problems",
    category: "DSA",
    priority: "Medium",
    done: true,
    createdAt: new Date().toISOString(),
  },
  {
    id: "3",
    title: "Prepare project walkthrough pitch",
    category: "HR",
    priority: "High",
    done: false,
    createdAt: new Date().toISOString(),
  },
];

export default function Page() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filter, setFilter] = useState<Filter>("All");
  const [category, setCategory] = useState<"All" | Category>("All");
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  useEffect(() => {
    const saved = loadTasks();
    setTasks(saved.length ? saved : seedTasks);
    setTheme("dark");
  }, []);

  useEffect(() => {
    saveTasks(tasks);
  }, [tasks]);

  const filteredTasks = useMemo(() => {
    return tasks.filter((t) => {
      const passFilter =
        filter === "All" ? true : filter === "Done" ? t.done : !t.done;
      const passCategory = category === "All" ? true : t.category === category;
      return passFilter && passCategory;
    });
  }, [tasks, filter, category]);

  const done = tasks.filter((t) => t.done).length;
  const pending = tasks.length - done;
  const streak = Math.min(9, done + 2);

  return (
    <main className="container pb-24">
      <header className="mb-5 flex items-start justify-between gap-3">
        <div>
          <p className="badge inline-block">SWE Frontend Internship Project</p>
          <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-slate-100 sm:text-5xl">
            InterviewSprint
          </h1>
          <p className="mt-2 text-lg text-slate-300">
            Mobile-first React + TypeScript app focused on polished UX.
          </p>
        </div>

        <ThemeToggle theme={theme} onToggle={() => {}} />
      </header>

      <section className="mb-4">
        <StatsCards
          total={tasks.length}
          done={done}
          pending={pending}
          streak={streak}
        />
      </section>

      <section className="grid gap-4 md:grid-cols-[360px_1fr]">
        <AddTaskForm onAdd={(task) => setTasks((prev) => [task, ...prev])} />
        <TaskList
          tasks={filteredTasks}
          onToggle={(id) =>
            setTasks((prev) =>
              prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t))
            )
          }
          onDelete={(id) => setTasks((prev) => prev.filter((t) => t.id !== id))}
          filter={filter}
          setFilter={setFilter}
          category={category}
          setCategory={setCategory}
        />
      </section>

      <BottomNav />
    </main>
  );
}