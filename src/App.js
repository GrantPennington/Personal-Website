import React from 'react'
import { AudioFileProvider } from './context/AudioFileContext';
import PageRouter from "./PageRouter";

function App() {

  return (
    <>
      <AudioFileProvider>
        <PageRouter /> {/* page router handles all routes */}
      </AudioFileProvider>
    </>
  );
}

export default App;