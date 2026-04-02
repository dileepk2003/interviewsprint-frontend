"use client";

type Props = { total: number; done: number; streak: number };

export default function ProgressCard({ total, done, streak }: Props) {
  const pct = total === 0 ? 0 : Math.round((done / total) * 100);

  return (
    <div className="card">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">Progress</h3>
        <span className="badge">{pct}% complete</span>
      </div>

      <div className="mt-4 h-3 w-full rounded-full bg-white/10">
        <div
          className="h-3 rounded-full bg-blue-400 transition-all"
          style={{ width: `${pct}%` }}
        />
      </div>

      <div className="mt-4 grid grid-cols-3 gap-3 text-center">
        <div className="card !p-3">
          <p className="text-xs text-slate-300">Total</p>
          <p className="text-xl font-bold">{total}</p>
        </div>
        <div className="card !p-3">
          <p className="text-xs text-slate-300">Done</p>
          <p className="text-xl font-bold text-emerald-400">{done}</p>
        </div>
        <div className="card !p-3">
          <p className="text-xs text-slate-300">Streak</p>
          <p className="text-xl font-bold">🔥 {streak}</p>
        </div>
      </div>
    </div>
  );
}