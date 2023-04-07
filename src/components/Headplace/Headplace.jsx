import appLogo from '/icon.svg'
import './Headplace.scss'

export default function Headplace() {
    return <>
        <div className="logo">
            <img src={appLogo} alt="Cocktail app logo" />
            <h1>Just a Cocktail</h1>
        </div>
        <nav>
            <div className="grade-item">
                <input type="radio" value="all" id="allItems" name="grade"/>
                <label htmlFor="allItems">All</label>
            </div>

            <div className="grade-item">
                <input type="radio" value="alcoholic" id="alcoholicItems" name="grade"/>
                <label htmlFor="alcoholicItems">Alcoholic</label>
            </div>

            <div className="grade-item">
                <input type="radio" value="non-alcoholic" id="nonAlcoholicItems" name="grade"/>
                <label htmlFor="nonAlcoholicItems">Non-Alcoholic</label>
            </div>
        </nav>
    </>
}