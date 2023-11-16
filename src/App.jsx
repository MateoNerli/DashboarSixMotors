import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { Navbar } from "./components/navBar";
import { Sidebar } from "./components/sideBar";
import { MainContainer } from "./components/mainContainer";
import { UserComponent } from "./components/userComponent";
import { StoreComponent } from "./components/storeComponents";

function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <Navbar onToggleSidebar={toggleSidebar} />
      <BrowserRouter>
        <Sidebar isOpen={isSidebarOpen} />
        <Routes>
          <Route path="/" element={<MainContainer />} />
          <Route path="/users" element={<UserComponent />} />
          <Route path="/store" element={<StoreComponent />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;