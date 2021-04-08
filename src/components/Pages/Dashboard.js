import React, { useState } from 'react'
import { Card, Container, Button, Alert, Jumbotron, Row, Col } from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import '../../firebase/config'
import Header from '../Header'
import WorkoutInput from '../WorkoutInput'

export default function Dashboard() {
    const [error, setError] = useState('')
    const { currentUser, logout } = useAuth()
    const history = useHistory()

    const data = {
        title: 'Management',
        text: 'Hier findet Du alle Optionen, um Dein persönliches Training zu gestalten!'
    }

    async function handleLogout() {
        setError('')

        try {
            await logout()
            history.push('/login')

        } catch {
            setError('Logout fehlgeschlagen.')
        }

    }
    return (
        <Container id="page-container" className="d-flex flex-column">
            <Jumbotron>
                <Header title={data.title} text={data.text} />
            </Jumbotron>
            <Row className="flex-column flex-lg-row">
                <Col>
                    <Card>
                        <Card.Body>
                            <h3 className="text-center mb-4">Mein Profil</h3>
                            {error && <Alert variant="danger">{error}</Alert>}
                            <strong>Email: </strong>{currentUser.email}
                            <Link to="/update-profile" className="btn btn-primary w-100 mt-3">Profil aktualisieren</Link>
                        </Card.Body>
                        <div className="w-100 text-center mt-2">
                            <Button className="link" variant="link" onClick={handleLogout}>Ausloggen</Button>
                        </div>
                    </Card>
                </Col>
                <Col>
                    <Card className="workout-input__section p-3 mb-4 mt-4 mt-lg-0">
                        <h3>Neues Workout hinzufügen:</h3>
                        <WorkoutInput />
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}
