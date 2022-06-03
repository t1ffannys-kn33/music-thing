import './App.css';
import ReactDOM from "react-dom/client";

import SidebarComponent from './/components/sidebar.js'
import Albumartview from './/components/albumartview.js'
import { useState } from 'react';


function App() {
  /*
    nowplaying structure
    {
      "artist":"bladee",
      "songName":"Be Nice 2 Me",
      "albumName":"Icedancer",
      "albumArtpath":""
      playingFrom: {
        "isFromPlaylist":true
        "playlistID":123456,
        "isFromAlbum":false,
        "albumID"
      }
    }
  */
  const [nowPlaying, changeNowPlaying] = useState({
    "artist":"",
    "songName":"",
    "albumName":"",
    "albumArtpath":"",
    playingFrom: {
      "isFromPlaylist":false,
      "playlistID":"",
      "isFromAlbum":false,
      "albumID":""
    }
  });
  const [volume, changeVolume] = useState(0.0); // float 0 -> 1
  


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