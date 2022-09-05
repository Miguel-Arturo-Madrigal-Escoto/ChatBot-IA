
import axios from 'axios';

export const fetchQuote = async() => {
    const { data } = await axios.get('https://api.quotable.io/random');
    console.log(data)
    const { content, author, dateAdded } = data;
    return {
        content, author, dateAdded
    }
}