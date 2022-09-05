import React, { useEffect, useState } from 'react'
import { LoadingIcon } from './LoadingIcon';

export const ImageChatBot = ({ img }) => {

    const [state, setState] = useState({
        index: 0,
        loading: true
    });
    

    useEffect(() => {
        
        const getIm = () => {
            setState({
                index: Math.floor(Math.random() * 10001),
                loading: false
            });
        }
        getIm()
    }, []);

    
    return (
        <>
            {
                (state.loading)? (
                    <LoadingIcon />
                )  : (
                    <img 
                        src={ `${ img }${ state }` }
                        alt="imagen de muestra"
                    /> 
                )
            }
        </>
        
    )
}
