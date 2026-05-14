type NavItemProps = {
  icon: string;
  label: string;
  href?: string;
  active?: boolean;
};

export default function NavItem({
  icon,
  label,
  href = "#",
  active = false,
}: NavItemProps) {
  return (
    <a
      href={href}
      className={`flex items-center px-6 py-3 transition-all duration-150 ease-in-out ${
        active
          ? "bg-white/10 text-white font-semibold rounded-r-[1.5rem] relative before:absolute before:left-0 before:w-1 before:h-8 before:bg-[#a0f399]"
          : "text-blue-100/70 hover:text-white hover:bg-white/5"
      }`}
    >
      <span className="material-symbols-outlined mr-3">{icon}</span>

      <span className="text-xs uppercase tracking-wider font-inter">
        {label}
      </span>
    </a>
  );
}