import {useEffect, useState} from 'react';

export default function Home() {

    const [List, setList] = useState([]);

    useEffect(() => {
        fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic')
        .then(res => res.json())
        .then(data => setList(data.drinks))
    }, [])

    return <>
        <h1>This is the home with Api</h1>

        {List.map(item => {
            <div className="card">
                {console.log(item.strDrink)}
                {/* <img src={item.strDrinkThumb.rendered} alt={item.strDrinkThumb.rendered} /> */}
                <h3>{item.strDrink}</h3>
            </div>
        })}
    </>
}