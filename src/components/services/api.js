import axios from "axios";

export const requestPosts = async() => {
    const { data } = await axios.get (`'https://api.themoviedb.org`)
    return data;
}