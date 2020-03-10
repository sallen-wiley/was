var formSelectCountry = document.getElementById("formSelectCountry"),
    divStateSelect = document.getElementById("state-select"),
    formSelectState = document.getElementById("formSelectState");
if (formSelectCountry) {
    formSelectCountry.onchange = function(){
        var country = formSelectCountry.value;
        if (country !== "US") {
            divStateSelect.classList.add("d-none");
            formSelectState.removeAttribute("required");
        } else {
            divStateSelect.classList.remove("d-none");
            formSelectState.setAttribute("required", "");
        }
    };
}
