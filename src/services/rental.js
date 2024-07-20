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
};


export const addRental = async (rentalData) => {
    try {
      const response = await fetch('/api/v1/rentals', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(rentalData),
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const data = await response.json();
      console.log('Rental added successfully:', data);
      return data;
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
};
  