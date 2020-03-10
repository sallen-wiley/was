var showSignInRegisterActions = document.querySelectorAll(".showSignInRegisterAction");

for (const showSignInRegisterAction of showSignInRegisterActions) {
    showSignInRegisterAction.onclick = function changeContent() {
        console.log(this)
        this.classList.add("d-none");
    }
}