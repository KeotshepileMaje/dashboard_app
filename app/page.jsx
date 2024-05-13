import Sidebar from "./layout/Sidebar/Sidebar";
import Content from "./layout/Content/Content";
import { SidebarProvider } from "./context/sidebarContext";

export default function Home() {
  return (
    <>
      <SidebarProvider>
        <div className="app">
        <Sidebar />
        <Content />
      </div>
      </SidebarProvider>
      
    </>
  );
}
