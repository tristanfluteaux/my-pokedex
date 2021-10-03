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

    const toogleFavorite = (name, url) => {
        if (favorites.find(p => p.url.split("/")[6] === url.split("/")[6])) {
        const newFavoriteList = favorites.filter((pokem) => pokem.url.split("/")[6] !== url.split("/")[6]);
        setFavorites(newFavoriteList);
        } else {
        const newFavoriteList = [...favorites, {name, url}]
        setFavorites(newFavoriteList);
        }
    }

    return [favorites, toogleFavorite];
}

export default useFavoris;