import React, { createContext, useContext, useEffect, useState } from 'react'
import { readFromDb } from '../data/db'

const AudioFileContext = createContext()

export function useAudioFile() {
    return useContext(AudioFileContext)
}

export function AudioFileProvider({ children }) {
    const [files, setFiles] = useState([])
    
    useEffect(() => {
        let data = readFromDb()
        data.then(
            (value) => setFiles(value)
        )
    }, [])
    
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