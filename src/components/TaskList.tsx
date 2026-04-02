"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Task, Category } from "@/types/task";
import { CheckCircle2, Circle, Trash2 } from "lucide-react";

type Filter = "All" | "Done" | "Pending";
type Props = {
  tasks: Task[];
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  filter: Filter;
  setFilter: (v: Filter) => void;
  category: "All" | Category;
  setCategory: (v: "All" | Category) => void;
};

const categories: ("All" | Category)[] = ["All", "DSA", "Frontend", "System Design", "HR"];
const cn = (...classes: Array<string | false | null | undefined>) => classes.filter(Boolean).join(" ");

export default function TaskList({
  tasks, onToggle, onDelete, filter, setFilter, category, setCategory
}: Props) {
  return (
    <div className="card p-4">
      <div className="mb-3 flex flex-wrap items-center gap-2">
        {(["All", "Pending", "Done"] as Filter[]).map((f) => (
          <button
            key={f}
            className={cn("btn btn-ghost", filter === f && "border-[hsl(var(--primary))]")}
            onClick={() => setFilter(f)}
          >
            {f}
          </button>
        ))}
        <select className="input ml-auto max-w-[170px]" value={category} onChange={(e) => setCategory(e.target.value as any)}>
          {categories.map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>
      </div>

      <div className="space-y-2">
        <AnimatePresence>
          {tasks.map((t) => (
            <motion.div
              key={t.id}
              layout
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="rounded-xl border border-white/10 p-3"
            >
              <div className="flex items-start gap-3">
                <button onClick={() => onToggle(t.id)} aria-label="toggle task">
                  {t.done ? <CheckCircle2 className="text-emerald-400" size={20} /> : <Circle size={20} />}
                </button>
                <div className="flex-1">
                  <p className={cn("font-medium", t.done && "line-through text-[hsl(var(--muted))]")}>{t.title}</p>
                  <div className="mt-1 flex gap-2 text-xs">
                    <span className="badge">{t.category}</span>
                    <span className="badge">{t.priority}</span>
                  </div>
                </div>
                <button onClick={() => onDelete(t.id)} aria-label="delete task">
                  <Trash2 size={16} />
                </button>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        {tasks.length === 0 && (
          <div className="rounded-xl border border-dashed border-white/20 p-6 text-center text-[hsl(var(--muted))]">
            No tasks in this view.
          </div>
        )}
      </div>
    </div>
  );
}