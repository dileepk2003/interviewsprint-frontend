import TaskBoard from "@/components/TaskBoard";
import ProgressCard from "@/components/ProgressCard";
import BottomNav from "@/components/BottomNav";

export default function HomePage() {
  const total = 8;
  const done = 3;
  const streak = 5;

  return (
    <main className="container pb-24">
      <header className="mb-4 pt-2">
        <p className="badge inline-block">InterviewSprint</p>
        <h1 className="mt-3 text-2xl font-bold sm:text-3xl">
          Mobile-first Interview Prep Board
        </h1>
        <p className="mt-2 text-slate-300">
          Built with Next.js + TypeScript for polished frontend UX.
        </p>
      </header>

      <section className="grid gap-4 md:grid-cols-2">
        <ProgressCard total={total} done={done} streak={streak} />
        <div className="card">
          <h3 className="text-lg font-semibold">Today’s Focus</h3>
          <ul className="mt-3 list-inside list-disc text-slate-300">
            <li>2 DSA problems</li>
            <li>1 React component challenge</li>
            <li>Behavioral answer rehearsal</li>
          </ul>
        </div>
      </section>

      <section className="mt-4">
        <TaskBoard />
      </section>

      <BottomNav />
    </main>
  );
}