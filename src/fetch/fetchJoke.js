
import axios from 'axios';

export const fetchJoke = async() => {
    const { data } = await axios.get('https://geek-jokes.sameerkumar.website/api?format=json');
    return data.joke;
}