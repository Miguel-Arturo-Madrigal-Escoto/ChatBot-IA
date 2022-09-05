import React, { useEffect, useState } from 'react'
import { fetchQuote } from '../fetch/fetchQuote';

export const QuoteChatBot = () => {

    const [state, setState] = useState({
        content: '',
        author: '',
        dateAdded: ''
    });
    

    useEffect(() => {
        const getQ = async() => {
            const {  content, author, dateAdded } = await fetchQuote();
            setState({
                content, 
                author, 
                dateAdded
            });
        }
        getQ();
    }, []);

    
    return (
        <div style={{ width: '100%' }}>
            <h3>Summary</h3>
            <table>
                <tbody>
                    <tr>
                        <td>Quote: &nbsp;</td>
                        <td>{ state.content }</td>
                    </tr>
                    <tr>
                        <td>Author: &nbsp;</td>
                        <td>{ state.author }</td>
                    </tr>
                    <tr>
                        <td>Date: &nbsp;</td>
                        <td>{ String(state.dateAdded) }</td>
                    </tr>
                </tbody>
            </table>
      </div>
    )
}
