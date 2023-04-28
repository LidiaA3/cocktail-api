import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Cocktail(props) {

  const [cocktail, setCocktail] = useState([]);
  const { cocktailId } = useParams();

  useEffect(() => {
      fetch('www.thecocktaildb.com/api/json/v1/1/lookup.php?i=' + cocktailId)
      .then(res => res.json())
      .then(data => setCocktail(data.drinks))
  }, [])

    return <>
        {console.log('This is the cocktail ' + cocktailId)}
        {console.log(cocktail)}
        <h1>{cocktail.strDrink}</h1>
    </>
}