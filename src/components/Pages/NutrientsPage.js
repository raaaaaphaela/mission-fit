import React from 'react';
import { Container, Jumbotron } from 'react-bootstrap';
import Header from '../Header';
import pyramid from '../../images/pyramide.jpg';
import { criticals, summaryTipps } from '../../data/criticalNutrients';
import SimpleCard from '../SimpleCard';


const NutrientsPage = () => {

    const headerItems = {
        title: 'Wichtige Nährstoffe',
        text: '... und wie sie abgedeckt werden können.'

    }

    return (
        <Container id="page-container">
            <Jumbotron >
                <Header title={headerItems.title} text={headerItems.text} />
                <button className="custom-btn"><a href="https://www.nikorittenau.com/vegan-klischee-ade/" target="_blank" rel="noreferrer">Buchempfehlung</a></button>
            </Jumbotron>
            <section className="nutrients-intro">
                <p>Trotz vielfältiger Hinweise auf gesundheitliche Vorteile ist eine vegane Ernährung ist nicht automatisch gleichzusetzen mit einer "gesunden" Ernährung. Gesund wird auch diese Ernährungsform erst, wenn sie hauptsächlich auf unverarbeiteten Lebensmitteln basiert, vielfältig ist und eine ausgewogene Nährstoffbilanz bereitstellt. Obwohl eine rein pflanzliche Ernährung generell viele Nährstoffe enthält, gibt es aufgrund des Ausschlusses tierischer Lebensmittel ein paar Nährstoffe, die besondere Beachtung finden sollten, da ein Mangel an ihnen schwerwiegende Folgen für die Gesundheit und Leistungsfähigkeit haben kann.</p>
                <hr />
                <img className="nutrients-pyramid" src={pyramid} alt="Übersicht über die vegane Ernährungspyramide" />
                <hr />
            </section>
            <section className="criticals">
                <h3>Die potenziell kritischen Nährstoffe in einer rein pflanzlichen Ernährung:</h3>
                <div className="criticals-cards">
                    {criticals.map((critical) => {
                        return (
                            <SimpleCard title={critical.name} text={critical.info}></SimpleCard>
                        )
                    })}
                </div>
            </section>
            <section className="summary">
                <h3>Zusammenfassende Tipps</h3>
                <ul>
                    {summaryTipps.map((item, index) => {
                        return <li key={index}>{item}</li>
                    })}
                </ul>

            </section>

        </Container >
    )

}

export default NutrientsPage;