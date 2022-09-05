import React, { useEffect, useState } from 'react';
import { fetchJoke } from '../fetch/fetchJoke';
import { LoadingIcon } from './LoadingIcon';

export const JokeChatBot = () => {

    const [state, setState] = useState({
        joke: '',
        loading: true
    });
    

    useEffect(() => {
        const getJ = async() => {
            const j = await fetchJoke();
            j.replace(/(&quot\;)/g,"\"")
            setState({
                joke: j,
                loading: false
            });
        }
        getJ();
    }, []);

    
    return (
        <div>
            {
                (state.loading) ? (
                    <LoadingIcon />
                ) : (
                    <p>{ state.joke }</p>
                )
            }
        </div>
    )
}
