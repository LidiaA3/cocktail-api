import appLogo from '/icon.svg'
import './Headplace.scss'

export default function Headplace() {
    return <div className="logo">
        <img src={appLogo} alt="Cocktail app logo" />
        <h1>Just a Cocktail</h1>
    </div>
}