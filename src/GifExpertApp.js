// FUNCTIONAL COMPONENTS
import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

//import PropTypes from 'prop-types';

const GiftExpertApp = () => {

    
    const [categories, setCategories] = useState(['Dragon Ball Super']);

    // const handleAdd = () => {
        
    // //formas de agregar elementos a un arreglo desde un botón:
    //     //ingrCategories([...categories, 'Condorito']);
    //     ingrCategories(['Condorito',...categories]);
    //     //ingrCategories(cat => [...cat, 'Condorito']);
    // };

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories = {setCategories}/>
            <hr></hr>
           
            {/* <ol>
                {categories.map( (category, id) => {
                        return <li key = { id }>{ category }</li>
                    })
                }
            </ol> */}
           

             <ol>
                {categories.map( category => 
                            <GifGrid 
                                key = {category}
                                category = {category} />
                            )
                }
            </ol>
            
        </>
    );

}

/*
GiftExpertApp.propTypes = {
    
}

// propiedad por defecto

GiftExpertApp.defaultProps = {

}
*/

export default GiftExpertApp;