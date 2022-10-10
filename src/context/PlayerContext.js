import React, { createContext, useContext, useEffect, useState } from 'react'

const PlayerContext = createContext()

export function usePlayer() {
    return useContext(PlayerContext)
}

export function PlayerProvider({ children }) {
    const [selected, setSelected] = useState('')
    const [isPlaying, setIsPlaying] = useState(false)

    const initializeAudio = (file, url) => {
        if(file!==selected.filename) {
            if(selected!==''){
                selected.url.pause()
            }
            const audio = new Audio(url)
            audio.play()
            setIsPlaying(true)
            setSelected({ filename: file, url: audio })
        }
        else {
            if(isPlaying){
                selected.url.pause()
                setIsPlaying(false)
            } else if(!isPlaying) {
                selected.url.play()
                setIsPlaying(true)
            }
        }
    }

    const defaultPlayerContext = {
        selected,
        isPlaying,
        initializeAudio,
    }

    return (
        <PlayerContext.Provider value={defaultPlayerContext}>
            { children }
        </PlayerContext.Provider>
    )
}