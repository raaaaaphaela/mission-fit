import React from 'react'
import Headline from '../components/Headings/Headline'
import UploadForm from '../components/UploadForm'
import ImageGrid from '../components/ImageGrid'

export default function About() {
    return (
        <div>
            <Headline text="About Page" />
            <UploadForm />
            <ImageGrid />
        </div>
    )
}