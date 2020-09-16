import React, { useEffect, useState } from 'react'
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

    const [images, setImages] = useState([]);

    useEffect( () => {
        getGifs();
    }, [])

    const getGifs = async() => {

        // const url = 'https://api.giphy.com/v1/gifs/search?q=Rick+and+Morty&limit=10&api_key=yvKVQNNYGWbM6yF8FquCOX6r5aXAzng6'

        const url = 'https://api.giphy.com/v1/gifs/search?q=Rick%20and%20Morty&limit=10&api_key=yvKVQNNYGWbM6yF8FquCOX6r5aXAzng6';
        const resp = await fetch( url );
        const { data } = await resp.json();

        const gifs = data.map( img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            }
        })

        // console.log(gifs);

        setImages(gifs);

        
    }

    // getGifs();

    return (
        <div>
            <h3>{ category }</h3>
                {
                    images.map( img => (
                        <GifGridItem
                            key={ img.id }
                            { ...img }
                        />
                    ))
                }
        </div>
    )
}
