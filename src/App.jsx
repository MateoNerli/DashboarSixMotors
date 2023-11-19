import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { Navbar } from "./components/navBar";
import { Sidebar } from "./components/sideBar";
import { MainContainer } from "./components/mainContainer";
import { UserComponent } from "./components/user/userComponent";
import { StoreComponent } from "./components/products/storeComponents";
import { OrderComponent } from "./components/orders/orderComponent";

function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <Navbar onToggleSidebar={toggleSidebar} isOpen={isSidebarOpen} />
      <BrowserRouter>
        <Sidebar isOpen={isSidebarOpen} onToggleSidebar={toggleSidebar} />
        <Routes>
          <Route path="/" exact element={<MainContainer />} />
          <Route path="/users" element={<UserComponent />} />
          <Route path="/products" element={<StoreComponent />} />
          <Route path="/orders" element={<OrderComponent />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
