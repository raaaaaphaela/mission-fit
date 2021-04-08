import React, { useRef, useState } from 'react'
import { Form, Button, Card, Alert, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const ForgotPasswort = () => {

    const emailRef = useRef()
    const { resetPassword } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState('')

    async function handleSubmit(e) {
        e.preventDefault()

        try {
            setError('')
            setLoading(true)
            await resetPassword(emailRef.current.value)
            setMessage('Eine Mail mit weiteren Anweisungen wurde geschickt.')
        } catch {
            setError('Passwort-Reset fehlgeschlagen.')
        }
        setLoading(false)
    }


    return (
        <Container id="page-container" className="d-flex flex-column justify-content-center col-md-6 col-lg-4">
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Neues Passwort anfordern</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    {message && <Alert variant="success">{message}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group id="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" ref={emailRef} required></Form.Control>
                        </Form.Group>

                        <Button type="submit" className="w-100" disabled={loading}>Passwort erneuern</Button>
                    </Form>
                    <div className="w-100 text-center mt-3">
                        <Link to="/login">Login</Link>
                    </div>

                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
                Du hast noch einen Account? <Link to="/signup">Anmelden</Link>.
            </div>

        </Container>
    )
}

export default ForgotPasswort