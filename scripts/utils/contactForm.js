function displayModal() {
    const modal = document.getElementById("contact_modal");
	modal.style.display = "block";
}

function closeModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
}

function modalName(data){
    const {name} = data

    const modalHeader = document.querySelector(".modal header h2");
    modalHeader.innerHTML += "<br>" +  name;
    return (modalHeader)
    }