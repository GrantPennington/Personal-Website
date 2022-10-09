import React, {useEffect, useState} from 'react';
import { app, storage } from './../../firebase';
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { Button, Box } from '@chakra-ui/react';
import { useAudioFile } from './../../context/AudioFileContext';

function FileUpload(){
	const [selectedFile, setSelectedFile] = useState();
	const [isFilePicked, setIsFilePicked] = useState(false);
    const [url, setURL] = useState('')
    const { addFile } = useAudioFile()

	const changeHandler = (event) => {
		setSelectedFile(event.target.files[0]);
		setIsFilePicked(true);
	};

	const handleSubmission = () => {
        const file = selectedFile

        if (!file) return;

        const storageRef = ref(storage, `music/${file.name}`);
        const uploadTask = uploadBytesResumable(storageRef, file, file);
        
        uploadTask.on("state_changed",
        (snapshot) => {
        },
        (error) => {
            alert(error);
        },
        () => {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                addFile(file.name, downloadURL)
                //console.log(downloadURL) //setURL(downloadURL)
            });
        }
        );
	};

	return(
        <div>
			<input type="file" name="file" onChange={changeHandler} />
			{isFilePicked ? (
				<div>
					<p>Filename: {selectedFile.name}</p>
					{/*
                    <p>Filetype: {selectedFile.type}</p>
					<p>Size in bytes: {selectedFile.size}</p>
					<p>
						lastModifiedDate:{' '}
						{selectedFile.lastModifiedDate.toLocaleDateString()}
					</p>
                    */}
				</div>
			): ''}
			<Box mt={4}>
				<Button onClick={handleSubmission}>Submit</Button>
			</Box>
		</div>
	)
}

export default FileUpload