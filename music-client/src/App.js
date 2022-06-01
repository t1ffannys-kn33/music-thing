import './App.css';
// eslist-disable-next-line
import ReactDOM from "react-dom/client";

import SidebarComponent from './/components/sidebar.js'
import Albumartview from './/components/albumartview.js'
import * from './/components/staticui.js'

function App() {
  return (
    <div className="App">
      <div className="staticui">
        <div className="topbar"></div>
        <div className="leftsidebar sidebar"></div>
        <div className="bottombar"></div>
      </div>
    </div>
  );
}

export default App;