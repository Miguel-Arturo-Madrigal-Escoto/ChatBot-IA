import React, { useEffect, useState } from 'react'

export const ImageChatBot = ({ img }) => {

    const [state, setState] = useState(0);
    

    useEffect(() => {
        
        const getIm = () => {
            setState(Math.floor(Math.random() * 10001));
        }
        getIm()
    }, []);

    
    return (
        <img 
            src={ `${ img }${ state }` }
            alt="imagen de muestra"
        /> 
    )
}
