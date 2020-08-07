import React from 'react'

export const GifGrid = ({ category }) => {

    const getGifs = () => {

        const url = 'https://api.giphy.com/v1/gifs/search?q=Rick+and+Morty&limit=10&api_key=yvKVQNNYGWbM6yF8FquCOX6r5aXAzng6'

    }

    return (
        <div>
            <h3>{ category }</h3>
        </div>
    )
}
