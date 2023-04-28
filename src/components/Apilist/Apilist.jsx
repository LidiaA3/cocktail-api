import './Apilist.scss'

export default function Apilist(props) {
    return <div className="card__section">
        {props.elements.map(item => {
            return <div className="card" key={ item.idDrink }>
                <img src={ item.strDrinkThumb } alt={ item.strDrink } />
                <h3 className='card__title'>{ item.strDrink }</h3>
                <button className='card__btn' type='button' onClick={() => console.log('This is the drink ' + item.idDrink)}>more info</button>
            </div>
        })}
    </div>
}