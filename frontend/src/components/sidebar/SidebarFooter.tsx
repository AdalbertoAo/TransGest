import NavItem from "./NavItem";

export default function SidebarFooter() {
  return (
    <div className="mt-auto px-6 space-y-2 border-t border-white/10 pt-6">
      <NavItem icon="settings" label="Configurações" />
      <NavItem icon="logout" label="Sair" />
    </div>
  );
}