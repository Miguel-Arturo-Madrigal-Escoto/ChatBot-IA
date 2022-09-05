import React, { useEffect, useState } from 'react'
import { fetchJoke } from '../fetch/fetchJoke';

export const JokeChatBot = () => {

    const [state, setState] = useState('');
    

    useEffect(() => {
        const getJ = async() => {
            const j = await fetchJoke();
            setState(j);
        }
        getJ();
    }, []);

    
    return (
        <p>{ state }</p>
    )
}
