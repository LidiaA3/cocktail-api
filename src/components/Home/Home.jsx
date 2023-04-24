import {useEffect, useState} from 'react';

export default function Home() {

    const [list, setList] = useState([]);

    useEffect(() => {
        fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic')
        .then(res => res.json())
        .then(data => setList(data.drinks))
    }, [])

    return <>
        <h1>This is the home with Api</h1>

        {list.map(item => {
            <div className="card">
                {console.log(item)}
                <h3>{ item.strDrink }</h3>
                <img src={ item.strDrinkThumb } alt={ item.strDrink } />
                {console.log('This is the cocktail ' + item.strDrink)}
            </div>
        })}
    </>
}