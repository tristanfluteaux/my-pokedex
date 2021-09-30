import { useState, useEffect } from "react";

const useFavoris = () => {

    const [favorites,setFavorites] = useState ([]);

    useEffect(() => {
        const favoritesInLS = JSON.parse(localStorage.getItem('favorite'));
        if (favoritesInLS) {
            setFavorites(favoritesInLS);
        }  
    }, []);


    useEffect (() => {
        localStorage.setItem('favorite', JSON.stringify(favorites))
        },[favorites])

    const toogleFavorite = (pokemonToAdd) => {
        if (favorites.find(p => p.id === pokemonToAdd.id)) {
        const newFavoriteList = favorites.filter((pokem) => pokem.id !== pokemonToAdd.id);
        setFavorites(newFavoriteList);
        } else {
        const newFavoriteList = [...favorites, pokemonToAdd]
        setFavorites(newFavoriteList);
        }
    }

    return [favorites, toogleFavorite];
}

export default useFavoris;