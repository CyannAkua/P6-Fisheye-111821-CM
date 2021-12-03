const list = document.getElementById("list1")
list.children[0].addEventListener('click',toggleListOptions)
let sortBy = list.children[0].children[0].innerText
function toggleListOptions()
{
	const listOptions = list.children[1];
	const listImg = list.children[0].children[1];
	if(listOptions.style.display=="")
	{
		listOptions.style.display = "block";
		listImg.style.transform = "rotate(180deg)"
	}
	else
	{
		listOptions.style.display = "";
        listImg.style.transform = "rotate(0deg)"

	}
}

function selectListOption()
{
    // l'option clicked
	const option = event.target;
	// la valeur de l'option clicked
	const optionValue = option.innerText;
    // le champ visible qui contient la valeur actuelle
	const listValue = list.children[0].children[0];
    console.log(optionValue)
	// move current list value to clicked option
	option.innerText = listValue.innerText;
	// put old value of clicked option in list value
	listValue.innerText = optionValue;
    sortBy = list.children[0].children[0].innerText
    toggleListOptions()
}

function sortMedia() {
    if (sortBy == "Popularité") {
      media.sort((a, b) => b.likes - a.likes);
    }
    if (sortBy == "Date") {
      media.sort(function (a, b) {
        let DateA = Date.parse(a.date);
        let DateB = Date.parse(b.date);
        return DateB - DateA;
      });
    }
    if (sortBy == "Titre") {
      media.sort(function (a, b) {
        if (a.title < b.title) {
          return -1;
        }
        if (a.title > b.title) {
          return 1;
        }
        return 0;
      });
    }
  }