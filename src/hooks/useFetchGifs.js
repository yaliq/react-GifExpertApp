import { useState } from "react"
import { useEffect } from "react/cjs/react.development";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {

    const [state, setState] = useState({
        data: [],
        loading: true
    })

    // [] indica que no tiene ninguna dependencia, y se va a ejecutar una sola vez.
    useEffect( () => {
        
        getGifs(category)
        .then (imgs => {
                setState({
                    data: imgs,
                    loading:false
                });
        }) 

    }, [category])


    return state; // { data: [], loading: true }
}