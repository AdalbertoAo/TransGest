import NavItem from "./NavItem";

export default function SidebarNav() {
  return (
    <nav className="flex-1 space-y-2">
      <NavItem icon="dashboard" label="Painel" active />
      <NavItem icon="group" label="Estudantes" />
      <NavItem icon="payments" label="Pagamentos" />
      <NavItem icon="school" label="Escolas" />
      <NavItem icon="route" label="Estado" />
    </nav>
  );
}