var editSearchTermAction = document.querySelector("#edit-search-term-action"),
    editSearchTerm = document.querySelector("#edit-search-term"),
    applySearchTerm = document.querySelector("#apply-search-term"),
    applySearchTermAction = document.querySelector("#apply-search-term-action"),
    searchTerm = document.querySelector("#search-term"),
    searchTermInput = document.querySelector("#search-term-input");

if (editSearchTermAction) {
    editSearchTermAction.onclick = function editTerm() {
        editSearchTerm.classList.add("d-none");
        searchTerm.classList.add("d-none");
        searchTermInput.classList.remove("d-none");
        applySearchTerm.classList.remove("d-none");
        searchTermInput.select();
    }
    applySearchTermAction.onclick = function applyTerm() {
        editSearchTerm.classList.remove("d-none");
        searchTerm.classList.remove("d-none");
        searchTermInput.classList.add("d-none");
        applySearchTerm.classList.add("d-none");
        searchTerm.innerHTML = '"' + searchTermInput.value + '"';
    }
    searchTermInput.addEventListener("keyup", function(event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    applySearchTermAction.click();
  }
});
}