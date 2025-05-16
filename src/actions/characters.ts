import { Character } from '@/interfaces/characters';
import potterApi from '@/services/potterApi';

export const getAllCharacters = async () => {
  const characters = await potterApi
    .get('characters')
    .then((res) => res.data)
    .catch((error) => {
      throw error;
    });

  return characters as Character[];
};

