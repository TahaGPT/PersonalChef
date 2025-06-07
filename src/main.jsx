import { createRoot } from "react-dom/client";
import Header from "./components/Header.jsx";
import MainComponent from "./components/MainComponent.jsx";
import Footer from "./components/Footer.jsx";
import "./index.css";
const root = createRoot(document.getElementById("root"));

root.render(
    <>
    <Header />
    <MainComponent />
    </>
);
