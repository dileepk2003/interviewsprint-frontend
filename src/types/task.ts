export type Category = "DSA" | "Frontend" | "System Design" | "HR";

export type Task = {
  id: string;
  title: string;
  category: Category;
  priority: "Low" | "Medium" | "High";
  done: boolean;
  createdAt: string;
};