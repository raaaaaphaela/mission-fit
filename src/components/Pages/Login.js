import React, { useRef, useState } from 'react'
import { Form, Button, Card, Alert, Container } from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'

export default function Login() {

    const emailRef = useRef()
    const passwordRef = useRef()
    const { login } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    async function handleSubmit(e) {
        e.preventDefault()

        try {
            setError('')
            setLoading(true)
            await login(emailRef.current.value, passwordRef.current.value)
            history.push('/')
        } catch {
            setError('Login fehlgeschlagen.')
        }
        setLoading(false)
    }

    return (
        <Container id="page-container" className="d-flex flex-column justify-content-center col-md-6 col-lg-4">
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Einloggen</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group id="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" ref={emailRef} required></Form.Control>
                        </Form.Group>
                        <Form.Group id="password">
                            <Form.Label>Passwort</Form.Label>
                            <Form.Control type="password" ref={passwordRef} required></Form.Control>
                        </Form.Group>
                        <Button type="submit" className="w-100" disabled={loading}>Einloggen</Button>
                    </Form>
                    <div className="w-100 text-center mt-3">
                        <Link to="/forgot-password">Passwort vergessen?</Link>
                    </div>
                </Card.Body>
            </Card>
            {/* <div className="w-100 text-center mt-2">
                Du hast noch keinen Account? <Link to="/signup">Anmelden</Link>.
            </div> */}
        </Container>
    )
}