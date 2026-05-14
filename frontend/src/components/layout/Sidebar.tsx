import SidebarFooter from "@/components/sidebar/SidebarFooter";
import SidebarHeader from "@/components/sidebar/SidebarHeader";
import SidebarNav from "@/components/sidebar/SidebarNav";

export default function Sidebar() {
  return (
    <aside className={`h-screen w-64 fixed left-0 top-0 rounded-r-[1.5rem] bg-[#0040a1] 
        dark:bg-slate-950 shadow-xl shadow-blue-900/20 flex flex-col py-8 z-50`}>
      <SidebarHeader />

      <SidebarNav />

      <SidebarFooter />
    </aside>
  );
}