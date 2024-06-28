const BASE_URL = 'http://18.212.63.4:3000/api/v1/rentals';

export const getRentalById = async (id) => {
    try {
        const response = await fetch(`${BASE_URL}/${id}`);

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const jsonData = await response.json();
        return jsonData;
    } catch (error) {
        throw error;
    }
};


export const getRentals = async () => {
    try {
        const response = await fetch(BASE_URL);

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const jsonData = await response.json();
        return jsonData;
    } catch (error) {
        throw error;
    }
}