import React, { useEffect,useState } from 'react';
import GifList from './GifList';
import GifSearch from './GifSearch';

export default function GifListContainer() {
    const [complete, setComplete] = useState([])
    const [dataSet, setDataSet] = useState([])

    useEffect(() =>{
        fetch('https://api.giphy.com/v1/gifs/search?q=YOUR QUERY HERE&api_key=u24gc3l4R8dTbEwdwvBOqf2ZQPpMxiHK')
        .then(response => response.json())
        .then(gifs => {
            let sourced = gifs.data.slice(0,3)
            setComplete(gifs.data)
            setDataSet(sourced)

        })
    },[])

    function handleSubmit(e){
        e.preventDefault()
        const form = e.target
        const search = form[0].value
        
        const filtered = complete.filter(gif => gif.title.toLowerCase().includes(search.toLowerCase()))

        setDataSet(filtered)
        form.reset()
    }

    return (
        <div>
            <h1>GifListContainer</h1>
            <GifSearch handler={handleSubmit}/>
            <GifList data={dataSet}/>
        </div>
    )
    
}