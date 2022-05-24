import './App.css';
// eslist-disable-next-line
import ReactDOM from "react-dom/client";

import SidebarComponent from './/components/sidebar.js'
import Albumartview from './/components/albumartview.js'

function App() {
  return (
    <div className="App">

    <Albumartview name="asdasda" albumname="asdasd"/>
    <Albumartview name="adssdsss"/>

    </div>
  );
}

export default App;