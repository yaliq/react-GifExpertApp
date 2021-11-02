import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
// import React, { useState, useEffect } from 'react'
import { GifGridItem } from './GifGridItem';
// import { getGifs } from '../helpers/getGifs';

export const GifGrid = ({category}) => {

    const {data: images, loading} = useFetchGifs( category );

    console.log(loading);


    return (
        <>
            <h3 className = "card animate__animated animate__fadeIn"> {category}</h3>

            {/* { loading ? 'Cargando...' : 'Data cargada'} */}
            { loading && <p className = "card animate__animated animate__flash">Cargando...</p>}
            
            <div className="card-grid">
                
                
                {
                
                    images.map( img => (
                            <GifGridItem 
                                key = {img.id}    
                            {...img } />
                    ))
                }
            </div>
        </>
    )
}
