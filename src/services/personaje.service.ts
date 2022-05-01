import Personaje from '../types/personajes.types'

export const buscarPersonajesAPI = async (
  nombre?: string,
  page?: number
): Promise<Personaje[]> => {
  let params = `?page=${page ? page : 1}`;
  if (nombre) {
    params += `&name=${nombre}`;
  }
  return fetch(`https://rickandmortyapi.com/api/character/${params}`)
    .then((data) => data.json())
    .then((data) => data.results);
};
