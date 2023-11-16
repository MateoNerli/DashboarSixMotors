import { useState } from "react";
import { Navbar } from "./components/navBar";
import { Sidebar } from "./components/sideBar";
import { MainContainer } from "./components/mainContainer";

function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <Navbar onToggleSidebar={toggleSidebar} />
      <Sidebar isOpen={isSidebarOpen} />
      <MainContainer />
    </>
  );
}

export default App;
