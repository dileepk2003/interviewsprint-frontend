"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Task } from "./types";
import { initialTasks } from "./mock";

const categories: Task["category"][] = ["DSA", "Frontend", "System Design", "HR"];

export default function TaskBoard() {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState<Task["category"]>("Frontend");

  const doneCount = useMemo(() => tasks.filter((t) => t.done).length, [tasks]);

  const addTask = () => {
    if (!title.trim()) return;
    setTasks((prev) => [
      { id: crypto.randomUUID(), title: title.trim(), category, done: false },
      ...prev,
    ]);
    setTitle("");
  };

  const toggle = (id: string) =>
    setTasks((prev) => prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t)));

  return (
    <div className="space-y-4">
      <div className="card">
        <h3 className="text-lg font-semibold">Add Task</h3>
        <div className="mt-3 grid gap-2 sm:grid-cols-[1fr_180px_100px]">
          <input
            className="rounded-xl border border-white/15 bg-white/5 px-3 py-2 outline-none"
            placeholder="e.g. Practice React hooks questions"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <select
            className="rounded-xl border border-white/15 bg-white/5 px-3 py-2 outline-none"
            value={category}
            onChange={(e) => setCategory(e.target.value as Task["category"])}
          >
            {categories.map((c) => (
              <option key={c} value={c} className="bg-slate-900">
                {c}
              </option>
            ))}
          </select>
          <button
            onClick={addTask}
            className="rounded-xl bg-blue-500 px-4 py-2 font-semibold hover:bg-blue-400"
          >
            Add
          </button>
        </div>
      </div>

      <div className="card">
        <div className="mb-3 flex items-center justify-between">
          <h3 className="text-lg font-semibold">Tasks</h3>
          <span className="badge">{doneCount}/{tasks.length} done</span>
        </div>

        <div className="space-y-2">
          {tasks.map((t) => (
            <motion.label
              key={t.id}
              layout
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-3"
            >
              <input
                type="checkbox"
                checked={t.done}
                onChange={() => toggle(t.id)}
                className="h-4 w-4"
              />
              <div className="flex-1">
                <p className={t.done ? "line-through text-slate-400" : ""}>{t.title}</p>
                <p className="text-xs text-slate-400">{t.category}</p>
              </div>
            </motion.label>
          ))}
        </div>
      </div>
    </div>
  );
}