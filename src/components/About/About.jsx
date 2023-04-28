import './About.scss'

export default function About() {
    return (
        <div className='about'>
            <h2>Who we are</h2>
            <div className="about__contents">
                <div className="about__section">
                    <img className='about__img' src="./1-cocktail.webp" alt="1img" />
                    <p>Just a Cocktail es una empresa juvenil que se dedica a la promoción de la cultura del cocktail a través de su plataforma online. Nuestra misión es ofrecer una experiencia única a todos los amantes de los cócteles, brindando información de calidad sobre las mejores recetas y los ingredientes más innovadores del mercado.</p>
                </div>
                <div className="about__section">
                    <p>En Just a Cocktail, creemos que los cócteles son una forma de arte, por lo que nos esforzamos por presentarlos de la manera más atractiva posible. Además, nuestra plataforma es sencilla y fácil de usar, para que cualquier persona pueda explorar y descubrir nuevas bebidas con facilidad.</p>
                    <img className='about__img' src="./2-cocktail.webp" alt="2img" />
                </div>
                <div className="about__section">
                    <img className='about__img' src="./3-cocktail.webp" alt="3img" />
                    <p>Nos apasiona lo que hacemos y esperamos transmitir esa pasión a nuestros usuarios. Así que, si eres un entusiasta de los cócteles, no dudes en explorar nuestra plataforma y descubrir nuevas recetas para sorprender a tus amigos y familiares.</p>
                </div>
            </div>
            <div className="about__footer">
                <a href="https://www.thecocktaildb.com/">The cocktail DB API</a>
                <p>©️ Lidia Aullana</p>
            </div>
        </div>
    );
}