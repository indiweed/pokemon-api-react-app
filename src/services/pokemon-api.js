import axios from 'axios';

const fetchData = async (pokemon) => {
    try {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
      const data = await response.data
      return data
    } catch (error) {
      console.error('Ошибка при извлечении данных:', error);
    }
  };

export default fetchData;
