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
list.children[1].addEventListener("keypress",selectListOption)
list.children[1].addEventListener("click",selectListOption)
function selectListOption(event)
{
    // l'option clicked
	const option = event;
	// la valeur de l'option clicked
	const optionValue = option.target.innerText;
    // le champ visible qui contient la valeur actuelle
	const listValue = list.children[0].children[0];
	// move current list value to clicked option
	option.target.innerText = listValue.innerText;
	// put old value of clicked option in list value
	listValue.innerText = optionValue;
    sortBy = list.children[0].children[0].innerText
    toggleListOptions();
    initmedia();
}

function sortMedia() {
    if (sortBy == "Popularit√©") {
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