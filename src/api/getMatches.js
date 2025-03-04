import axios from 'axios';

export const getMatches = async () => {
    try {
        const response = await axios.get('https://app.ftoyd.com/fronttemp-service/fronttemp');
        return response.data;
    } catch (error) {
        console.error('There has been a problem with your axios operation:', error);
        return error;
    }
};

