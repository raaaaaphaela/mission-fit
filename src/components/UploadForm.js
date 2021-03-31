import React, { useState } from 'react'
import ProgressBar from './ProgressBar';

const UploadForm = () => {

    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);

    const types = ['image/png', 'image/jpeg'];

    const changeHandler = (e) => {
        let selected = e.target.files[0];

        if (selected && types.includes(selected.type)) {
            setFile(selected);
            setError('')

        } else {
            setFile(null);
            setError('Bitte ein Bild auswählen (png oder jpg.')

        }
    }

    return (
        <form>
            <input type="file" onChange={changeHandler} />
            <div className="output">
                {error && <div className="error">{error}</div>}
                {file && <div className="name">{file.name}</div>}
                {file && <ProgressBar file={file} setFile={setFile} />}
            </div>
        </form>
    )
}

export default UploadForm