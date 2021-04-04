import React from 'react'
import { Container } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import SimpleCard from '../../components/Cards/SimpleCard';
import Header from '../../components/Headings/Header';
import YoutubeEmbed from '../../components/YoutubeEmbed/YoutubeEmbed';
import { heading, cards, advantages } from '../../data/nutrition-home';

const GoodReasons = () => {
    return (
        <Container>
            <Header text={heading.text} title={heading.title} />
            <div className="card-container">
                {cards.map((card) => {
                    return <SimpleCard title={card.title} text={card.text} />
                })}
            </div>
            <Container className="section">
                <h3>Film - Let us be heroes</h3>
                <div class="embed-responsive embed-responsive-16by9">
                    <YoutubeEmbed embedId='goBKGTYl2fo' />
                </div>
            </Container>
            <Container className="section">
                <h3>{advantages.title}</h3>
                {advantages.texts.map((text) => {
                    return <p>{text}</p>
                })}
                <ul className="nutrition-links">
                    {advantages.links.map((link) => {
                        return <li><a target="_blank" href={link.link}>{link.name}</a></li>
                    })}
                </ul>
            </Container>
        </Container>
    )
}

export default GoodReasons