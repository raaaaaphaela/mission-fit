import famineImg from '../images/faminecopy.jpg'
import environmentImg from '../images/deforestationcopy.jpg'
import calfImg from '../images/calf.jpg'

export const heading = {
    title: 'Fit mit Pflanzen',
    text: 'Veganismus ist eine Lebensweise, die sich von jeglicher Art der Ausbeutung und Gewalt gegenüber Tieren für Nahrung, Kleidung oder andere Zwecke distanziert. Veganer konsumieren keine tierischen Produkte wie Fleisch, Fisch, Milchprodukte, Eier, Honig, Gelantine oder andere tierische Sekrete.',
}


export const cards = [
    {
        title: 'Nachhaltig & gesund',
        text: '✓ Erreiche deine Wohlfühlfigur auf eine entspannte Weise mit viel Genuss und einem angenehmen Sättigungsgefühl!'
    },
    {
        title: 'Energiegeladen & fit',
        text: '✓ Wache morgens mit Power auf und verlass dich auf dein gut versorgtes Immunsystem!'
    },
    {
        title: 'Optimal vorgesorgt',
        text: '✓ Du hast ein niedriges Risiko für ernährungsbedingte Krankheiten wie Herz-Kreislauf- Erkrankungen, Bluthochdruck, Diabetes Mellitus Typ 2 und für manche Arten von Krebs!'
    }
]

export const advantages = {
    title: 'Allgemein bekannte Vorteile',
    texts: [
        'Fuhrmann und Ferreri (2010, Link 1) beschreiben in ihrem Review,  dass Veganer oder Sportler, die sehr viel Obst und Gemüse verzehren, stark von den darin enthaltenen Mikronährstoffen und Spurenelementen wie Folsäure, Carotinoide, Vitamin B6, C und E sowie Kupfer, Zink und Eisen profitieren, da diese das Immunsystem unterstützen und so vor  krankheitsbedingten Pausen bewahren können.',
        'Eine vegane Ernährung enthält in der Regel geringere Mengen an gesättigten Fettsäuren als vegetarische und omnivore Ernährungsformen (Rogerson, 2017, S. 5, Link 2).',
        'Dies steht in Verbindung mit vielen gesundheitlichen Vorteilen wie der Reduktion von Herz-Kreislauferkrankungen, Bluthochdruck, Diabetes Mellitus Typ II, Gesamtcholesterin und Krebs.  Pflanzliche Fettquellen wie Hanf- und Chiasamen oder -öl und Kürbiskerne bieten gute Alternativen, viel Proteine und wertvollen Omega-3-Fettsäuren, die entzündungshemmend wirken.',
        'Wird eine Reduktion von Körpergewicht angestrebt, kann eine vegane Ernährung ohne gezielte Kalorienrestriktion zu größerer Abnahme führen als eine vegetarische, pesco-vegetarische oder omnivore Ernährungsform (Turner, Davidson, Wingard, Wilcox & Frongillo, 2015, Link 3).',
        'Dies ist vor allem für Sportarten vorteilhaft, bei denen ein möglichst geringes Körpergewicht mit hoher Leistungsfähigkeit kombiniert werden soll, z.B. in Ausdauersportarten oder beim Boxen. Der Grund für die leichtere Abnahme könnte der hohe Ballaststoffgehalt bei hohem Kohlenhydratverzehr sein, da Ballaststoffe eine frühe Sättigung und ein lang anhaltendes Sättigungsgefühl bewirken (Rogerson, 2017, S. 4, Link 2).'
    ],
    links: [
        {
            name: 'Fuhrmann und Ferreri, 2010',
            link: 'https://www.drfuhrman.com/content-image.ashx/65m12qvx5stmidc00uft3w/vegan_athlete.pdf'
        },
        {
            name: 'Rogerson, 2017, S. 4 & 5',
            link: 'https://www.springermedizin.de/vegan-diets-practical-advice-for-athletes-and-exercisers/15056602'
        },
        {
            name: 'Turner, Davidson, Wingard, Wilcox & Frongillo, 2015',
            link: 'https://www.ncbi.nlm.nih.gov/pubmed/25592014'
        }
    ]
}

export const reasons = [
    {
        title: 'Welthunger',
        image: famineImg,
        text: 'Während die Menschen in den Industrienationen immer dicker und kränker werden, hungern weltweit etwa 805 Millionen Menschen.Ein Mangel an Vitaminen und Mineralstoffen führt vor allem bei Kindern zu erheblichen Schäden in der Entwicklung. Eine aktuelle Studie von Berners- Lee, Kennely, Watson und Hewitt(2018) kam zu dem Ergebnis, dass die aktuelle Produktion von essbaren Pflanzen ausreichen würde, um die im Jahr 2050 prognostizierte Weltbevölkerung von 9,7 Milliarden Menschen ausreichend kalorisch zu versorgen, wenn die Pflanzen nicht an Nutztiere verfüttert werden & weniger Lebensmittel im Müll landen würden.',
        link: 'https://albert-schweitzer-stiftung.de/aktuell/umweltbundesamt-zum-zusammenhang-von-fleischkonsum-und-welthunger'
    },
    {
        title: 'Umweltzerstörung & Ressourcenverschwendung',
        image: environmentImg,
        text: 'Laut der WWF-Studie „Fleisch – Schwere Kost für Mutter Erde“ (2014) lassen sich fast 70% aller direkten ernährungsbedingten Treibhausgasemissionen auf unsere Ernährung mit tierischen Produkten zurückführen.Würden sich alle Menschen rein pflanzlich ernähren, könnte dies die ernährungsbedingten Treibhausgasemissionen bis 2050 erheblich reduzieren.Tierische Lebensmittel benötigen extrem viel Wasser in der Herstellung: Fleisch und Milch haben z.B.einen wesentlich höheren Wasserverbrauch als die Äquivalente aus Soja. Die Rodung der Regenwälder, um weitere Weideflächen bzw. Ackerflächen für den Anbau von Tierfutter zu erhalten, führt zu einem großen Artensterben. Eine Ernährung ohne Tierprodukte ist demnach erheblich nachhaltiger als eine fleischbasierte oder vegetarische Kost.',
        link: 'https://www.theguardian.com/environment/2018/may/31/avoiding-meat-and-dairy-is-single-biggest-way-to-reduce-your-impact-on-earth'
    },
    {
        title: 'Tierleid',
        image: calfImg,
        text: 'Als Veganer trägst du dazu bei, dass weniger Tiere leiden. Tierrechtsorganisationen haben aufgedeckt, dass viele der gewissensberuhigenden Gütesiegel keine Garantie für ein „artgerechtes“ Leben der Tiere sind, auch Bio nicht. Die Nutztiere sterben Jahre vor dem Ablauf ihrer natürlichen Lebenszeit.Ihr Leben ist geprägt von Dreck, Enge, Krankheit und Trostlosigkeit.Millionen Jungtiere werden jährlich kurz nach der Geburt getötet, da sie kein Geld einbringen. Fische werden in den großen Fischernetzen zerquetscht, ersticken an der Luft oder werden lebendig aufgeschlitzt.Zudem werden mit den riesigen Fangnetzen die Meere leer gefischt: Studien prognostizieren für das Jahr 2048 leere Ozeane.',
        link: 'https://www.ariwa.org/'
    }
]