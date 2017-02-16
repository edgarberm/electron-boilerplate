
/**
 * Función asíncrona que ejecuta cualquier función pasada como parámetro de
 * forma asíncrona y retorna sus valores.
 * El método especificado ha de retornar un objeto Promise.
 *
 * @param {Funcion} - función de la cual queremos obtener su valor devuelto
 * @param {Object} - argumentos para la función
 *
 * TODO: controlar los errores.
 * Una idea puede ser pasar otra función como argumento que sirva de callback
 * para el control de errores.
 */

const getDataAsync = async (fn, ...args) => {
  try {
    const values = await fn(...args)
    return values
  } catch (error) {
    console.warn('Error desde getDataAsync');
    console.warn(error);
    // throw Error(error)
  }
}

export default getDataAsync
