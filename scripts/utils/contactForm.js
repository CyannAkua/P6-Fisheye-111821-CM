function displayModal() {
  const modal = document.getElementById("contact_modal");
  modal.style.display = "block";
}
function closeModal() {
  const modal = document.getElementById("contact_modal");
  modal.style.display = "none";
}

function modalName(data) {
  const { name } = data;

  const modalHeader = document.querySelector(".modal header h2");
  modalHeader.innerHTML += "<br>" + name;
  return modalHeader;
}
function contactSubmit() {
  let contactLastName = document.getElementById("last").value;
  let contactFirstName = document.getElementById("first").value;
  let contactEmail = document.getElementById("email").value;
  let contactMessage = document.getElementById("message").value;
  console.log(
    contactLastName +
      " " +
      contactFirstName +
      "\r\n" +
      contactEmail +
      "\r\n" +
      contactMessage
  );
  closeModal()
  document.getElementsByName("contact")[0].reset();
  return false;
  
}
