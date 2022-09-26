export const getAlbums = () => {
  return fetch('https://jsonplaceholder.typicode.com/albums')
      .then(value => value.json())
}