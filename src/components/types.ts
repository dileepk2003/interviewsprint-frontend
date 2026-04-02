export type Task = {
  id: string;
  title: string;
  category: "DSA" | "Frontend" | "System Design" | "HR";
  done: boolean;
  due?: string;
};