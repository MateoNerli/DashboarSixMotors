import {
  faGlobe,
  faUser,
  faStore,
  faBoxesStacked,
} from "@fortawesome/free-solid-svg-icons";

export const sideBar = [
  { text: "Dashboard", icon: faGlobe, link: "/" },
  { text: "Usuarios", icon: faUser, link: "/users" },
  { text: "Productos", icon: faBoxesStacked, link: "/store" },
  { text: "Ordenes", icon: faStore, link: "/orders" },
];
