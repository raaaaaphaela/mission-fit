import React from 'react'
import { Container } from 'react-bootstrap'
import SimpleCard from '../components/Cards/SimpleCard';
import Header from '../components/Header';
import YoutubeEmbed from '../components/YoutubeEmbed';
import { heading, cards, advantages, reasons } from '../data/reasons';

const Vegan = () => {
    return (
        <Container id="page-container">
            <Header text={heading.text} title={heading.title} />

            <div className="card-container">
                {cards.map((card) => {
                    return <SimpleCard title={card.title} text={card.text} />
                })}
            </div>
            <section className="section">
                <h3>{advantages.title}</h3>
                {advantages.texts.map((text) => {
                    return <p>{text}</p>
                })}
                <ul className="nutrition-links">
                    {advantages.links.map((link) => {
                        return <li><a target="_blank" rel="noreferrer" href={link.link}>{link.name}</a></li>
                    })}
                </ul>
            </section>
            <section>
                <p className="reasons-card__intro">
                    Wenn du vegan lebst, beeinflusst du damit nicht nur dein Leben auf eine positive Weise, sondern tust auch noch richtig viel für die Welt! <br /> Eine sinkende Nachfrage nach Fleisch und anderen tierischen Erzeugnissen hat vor allem Einfluss auf die folgenden drei Bereiche:
                        </p>
                <div className="reasons-card__container">
                    {reasons.map((reason) => {
                        return (
                            <div className="reasons-card">
                                <div className="reasons-card__image" style={{ backgroundImage: `url(${reason.image})` }}></div>
                                <h5>{reason.title}</h5>
                                <p>{reason.text}</p>
                                <button className="custom-btn"><a href={reason.link} target="_blank" rel="noreferrer">Mehr Infos</a></button>
                            </div>
                        )
                    })}
                </div>


            </section>
            <section className="section">
                <h3>Film - Let us be heroes</h3>
                <div class="embed-responsive embed-responsive-16by9">
                    <YoutubeEmbed embedId='goBKGTYl2fo' />
                </div>
            </section>

        </Container>
    )
}

export default Vegan