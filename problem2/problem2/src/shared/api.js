import axios from "axios"

export const getData = async () => {
    try {
        const response = await axios({
            url: 'https://interview.switcheo.com/prices.json',
            method: 'GET',
        })
        console.log(response);
        return response;
    } catch (error) {
        console.log(error);
        return error;
    }
}