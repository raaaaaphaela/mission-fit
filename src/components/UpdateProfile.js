import React, { useRef, useState } from 'react'
import { Form, Button, Card, Alert, Container } from 'react-bootstrap'
import { useAuth } from '../context/AuthContext'
import { Link, useHistory } from 'react-router-dom'

export default function UpdateProfile() {

    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const { currentUser, updateEmail, updatePassword } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    function handleSubmit(e) {
        e.preventDefault()

        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError('Passwörter stimmen nicht überein...')
        }

        const promises = [];
        setLoading(true)
        setError('')

        if (emailRef.current.value !== currentUser.email) {
            promises.push(updateEmail(emailRef.current.value))
        }

        if (passwordRef.current.value) {
            promises.push(updatePassword(passwordRef.current.value))
        }

        Promise.all(promises).then(() => {
            history.push('/')
        }).catch(() => {
            setError('Aktualisierung fehlgeschlagen')
        }).finally(() => {
            setLoading(false)
        })

    }

    return (
        <Container id="page-container" className="d-flex flex-column justify-content-center col-md-6 col-lg-4">
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Profil aktualisieren</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group id="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" ref={emailRef} defaultValue={currentUser.email}></Form.Control>
                        </Form.Group>
                        <Form.Group id="password">
                            <Form.Label>Passwort</Form.Label>
                            <Form.Control type="password" ref={passwordRef} placeholder="Leer lassen, um nichts zu verändern"></Form.Control>
                        </Form.Group>
                        <Form.Group id="password-confirm">
                            <Form.Label>Passwort wiederholen</Form.Label>
                            <Form.Control type="password" ref={passwordConfirmRef} placeholder="Leer lassen, um nichts zu verändern"></Form.Control>
                        </Form.Group>
                        <Button type="submit" className="w-100" disabled={loading}>Aktualisieren</Button>
                    </Form>
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
                <Link to="/">Abbrechen</Link>
            </div>
        </Container>
    )
}