async function getData(subsetName) {
  return await fetch("data/photographers.json")
    .then((response) => response.json())
    .then((data) => {
      return data[subsetName];
    });
}