import React from "react";

export default function GifList({data}){

    const gifItems = data.map(gif => <li key={gif.id}>
            <img src={gif.images.fixed_height.url} key={gif.id} alt={gif.title} />
        </li>)

    return(
        <div>
            <ul>
                {gifItems}
            </ul>
        </div>
    )

}