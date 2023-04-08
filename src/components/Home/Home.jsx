import {useEffect, useState} from 'react';

export default function Home() {
    return <>
        <h1>This is the home with Api</h1>

        useEffect(() => {
            fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => console.log(data))
        }, [])

        {/* {fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(json => console.log(json))} */}
    </>
}