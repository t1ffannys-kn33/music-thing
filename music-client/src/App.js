import './App.css';
// eslist-disable-next-line
import ReactDOM from "react-dom/client";

import SidebarComponent from './/components/sidebar.js'
import Albumartview from './/components/albumartview.js'

function App() {
  return (
    <div className="App">
    <SidebarComponent name="Mixes"/>
    <SidebarComponent name="Albums"/>
    <SidebarComponent name="Playlists"/>
    <Albumartview name="asdasda"/>
    </div>
  );
}

export default App;