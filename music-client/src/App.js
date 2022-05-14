import './App.css';
import SidebarComponent from './sidebar.js'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
    <SidebarComponent name="Mixes"/>
    <SidebarComponent name="Albums"/>
    <SidebarComponent name="Playlists"/>

    </div>
  );
}

export default App;
