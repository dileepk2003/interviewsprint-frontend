"use client";

import { Task } from "@/types/task";

const KEY = "interviewsprint.tasks";
const THEME_KEY = "interviewsprint.theme";

export function loadTasks(): Task[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as Task[]) : [];
  } catch {
    return [];
  }
}

export function saveTasks(tasks: Task[]) {
  if (typeof window === "undefined") return;
  localStorage.setItem(KEY, JSON.stringify(tasks));
}

export function loadTheme(): "light" | "dark" {
  if (typeof window === "undefined") return "dark";
  const t = localStorage.getItem(THEME_KEY);
  return t === "light" ? "light" : "dark";
}

export function saveTheme(theme: "light" | "dark") {
  if (typeof window === "undefined") return;
  localStorage.setItem(THEME_KEY, theme);
}