import React from 'react'
import { AudioFileProvider } from './context/AudioFileContext';
import { PlayerProvider } from './context/PlayerContext';
import PageRouter from "./PageRouter";

function App() {

  return (
    <>
      <AudioFileProvider>
        <PlayerProvider>
          <PageRouter /> {/* page router handles all routes */}
        </PlayerProvider>
      </AudioFileProvider>
    </>
  );
}

export default App;