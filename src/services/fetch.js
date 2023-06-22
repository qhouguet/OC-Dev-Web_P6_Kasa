export async function fetchData() {
  return await fetch('./data/data.json', {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  }).then((data) => data.json())
}
