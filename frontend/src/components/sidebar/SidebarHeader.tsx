export default function SidebarHeader() {
  return (
    <div className="px-6 mb-10 flex items-center gap-3">
      <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
        <span className="material-symbols-outlined text-white">
          school
        </span>
      </div>

      <div>
        <h1 className="text-2xl font-extrabold text-white font-manrope tracking-tight">
          TransGest
        </h1>

        <p className="text-[10px] uppercase tracking-widest text-blue-100/60 font-inter">
          Gestão de Frotas
        </p>
      </div>
    </div>
  );
}