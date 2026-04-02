type Props = { total: number; done: number; pending: number; streak: number };

export default function StatsCards({ total, done, pending, streak }: Props) {
  const pct = total === 0 ? 0 : Math.round((done / total) * 100);

  return (
    <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
      <div className="card p-4">
        <p className="text-sm text-[hsl(var(--muted))]">Total</p>
        <p className="text-2xl font-bold">{total}</p>
      </div>
      <div className="card p-4">
        <p className="text-sm text-[hsl(var(--muted))]">Done</p>
        <p className="text-2xl font-bold text-emerald-400">{done}</p>
      </div>
      <div className="card p-4">
        <p className="text-sm text-[hsl(var(--muted))]">Pending</p>
        <p className="text-2xl font-bold">{pending}</p>
      </div>
      <div className="card p-4">
        <p className="text-sm text-[hsl(var(--muted))]">Streak</p>
        <p className="text-2xl font-bold">🔥 {streak}</p>
      </div>

      <div className="card col-span-2 p-4 md:col-span-4">
        <div className="mb-2 flex items-center justify-between text-sm">
          <span className="text-[hsl(var(--muted))]">Completion</span>
          <span className="badge">{pct}%</span>
        </div>
        <div className="h-3 w-full rounded-full bg-black/20">
          <div className="h-3 rounded-full bg-[hsl(var(--primary))] transition-all" style={{ width: `${pct}%` }} />
        </div>
      </div>
    </div>
  );
}