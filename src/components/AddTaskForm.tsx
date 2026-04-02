"use client";

import { useState } from "react";
import { Category, Task } from "@/types/task";

type Props = {
  onAdd: (task: Task) => void;
};

const categories: Category[] = ["DSA", "Frontend", "System Design", "HR"];

export default function AddTaskForm({ onAdd }: Props) {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState<Category>("Frontend");
  const [priority, setPriority] = useState<"Low" | "Medium" | "High">("Medium");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;
    onAdd({
      id: crypto.randomUUID(),
      title: title.trim(),
      category,
      priority,
      done: false,
      createdAt: new Date().toISOString(),
    });
    setTitle("");
    setCategory("Frontend");
    setPriority("Medium");
  };

  return (
    <form onSubmit={submit} className="card p-4 space-y-3">
      <h2 className="text-lg font-semibold">Add Interview Task</h2>
      <input
        className="input"
        placeholder="e.g. Build accessible modal in React"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <div className="grid grid-cols-2 gap-2">
        <select className="input" value={category} onChange={(e) => setCategory(e.target.value as Category)}>
          {categories.map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>

        <select
          className="input"
          value={priority}
          onChange={(e) => setPriority(e.target.value as "Low" | "Medium" | "High")}
        >
          <option value="Low">Low Priority</option>
          <option value="Medium">Medium Priority</option>
          <option value="High">High Priority</option>
        </select>
      </div>

      <button className="btn btn-primary w-full" type="submit">
        Add Task
      </button>
    </form>
  );
}