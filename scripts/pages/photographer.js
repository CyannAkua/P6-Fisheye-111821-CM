const id = URLSearchParams(window.location.search).get("id")
async function getPhotographers() {
	const photographers = await fetch("data/photographers.json")
  .then(response => response.json())
  .then(data => {return (data.photographers)});
        return ({photographers: photographers})};