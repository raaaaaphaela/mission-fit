import React from 'react'
import UploadForm from '../components/UploadForm'
import ImageGrid from '../components/ImageGrid'
import { Container } from 'react-bootstrap'


export default function About() {
    return (
        <Container id="page-container">
            <UploadForm />
            <ImageGrid />
        </Container>
    )
}