import React from 'react';

export default function GifSearch({handler}) {

    return (
        <form onSubmit={handler} >
            <input type="text" name="search" placeholder="Search Gif" required />
            <input type="submit" value="Search" />
        </form>
    )
}