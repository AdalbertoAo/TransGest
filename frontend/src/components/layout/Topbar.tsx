export default function Topbar() {
  return (
    <header className="fixed top-0 right-0 w-[calc(100%-16rem)] h-16 bg-[#faf8ff]/80 dark:bg-slate-900/80 backdrop-blur-md flex justify-between items-center px-8 z-40">
      <div className="flex items-center flex-1">
        <div className="relative w-full max-w-md">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline">
            search
          </span>

          <input
            type="text"
            placeholder="Pesquisar estudantes, rotas..."
            className="w-full bg-surface-container-low border-none rounded-lg pl-10 pr-4 py-2 text-sm focus:ring-2 focus:ring-primary/20 transition-all"
          />
        </div>
      </div>

      <div className="flex items-center gap-6">
        <div className="hidden md:flex flex-col items-end mr-2">
          <span className="text-sm font-bold text-primary font-manrope">
            Coordenador
          </span>

          <span className="text-[10px] text-outline uppercase tracking-tighter">
            Luanda, Angola
          </span>
        </div>

        <button className="relative text-slate-500 hover:text-[#0040a1] transition-all">
          <span className="material-symbols-outlined">
            notifications
          </span>

          <span className="absolute top-0 right-0 w-2 h-2 bg-error rounded-full"></span>
        </button>

        <div className="h-10 w-10 rounded-full overflow-hidden">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDD74R8K5wLs_7HXwV5Kh4s6wfZkRrRNWM-OKF-myD_TQqsB-tardCG9p4e1a0D-6c3F1U6N7bzz_DylRjw7xGZRbN4GbknvZnFR1ANSxAxD6KGkdxlCiWkJqhAWgnddkcnWLKJj5YN1uz_uNaumCrtzTD8ZPBeGVjUSI4ArXiGJfB6_KVPS7MlbXszmz59yUam22A7JEpgy_SchTmhESVZdgulbq2LgGTzPhlqHTI6mFc3clwR__gqgafDlYIB-MAtKERATQ0tEw"
            alt="avatar"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </header>
  );
}