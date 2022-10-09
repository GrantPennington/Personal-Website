import React, { createContext, useContext, useState } from 'react'

const AudioFileContext = createContext()

export function useAudioFile() {
    return useContext(AudioFileContext)
}

export function AudioFileProvider({ children }) {
    const [files, setFiles] = useState([])


    const addFile = (filename, url) => {
        setFiles([ ...files, { filename: filename, url: url } ])
    }

    const defaultAudioContext = {
        files,
        setFiles,
        addFile,
    }
    return (
        <AudioFileContext.Provider value={defaultAudioContext}>
            { children }
        </AudioFileContext.Provider>
    )
}