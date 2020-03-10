var formInputContentAlerts = document.getElementById("formInputContentAlerts"),
    divInputSubjects = document.getElementById("divInputSubjects");
if(formInputContentAlerts){
    formInputContentAlerts.onchange = function(){
        if (formInputContentAlerts.checked == true) {
            divInputSubjects.classList.remove("d-none");
        } else {
            divInputSubjects.classList.add("d-none");
        }
    };
}
