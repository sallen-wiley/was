// set menu display to block (work around to prevent menu in BSS getting in the way)
function menuDisplayToBlock() {
	myMenu.classList.remove("d-none");
}

// open the menu

function toggleClassMenu() {
	myMenu.classList.add("menu--animatable");	
	if(!myMenu.classList.contains("show")) {		
		myMenu.classList.add("show");
	} else {
		myMenu.classList.remove("show");
	}	
}

function OnTransitionEnd() {
	myMenu.classList.remove("menu--animatable");
}

var myMenu = document.querySelector(".menu");
var openMenu = document.querySelector(".menu-icon");
var closeMenuActions = document.querySelectorAll(".menu-close");

if(myMenu) {
    menuDisplayToBlock();
    myMenu.addEventListener("transitionend", OnTransitionEnd, false);
    openMenu.addEventListener("click", toggleClassMenu, false);
    for (const closeMenuAction of closeMenuActions) {
        closeMenuAction.addEventListener("click", toggleClassMenu, false);
    }
}

// toggle the panel in the menu

function togglePanel() {
    event.stopPropagation()
    // if submenus are not being shown
	if(!menuContent.classList.contains("show-panels")) {
        // deactivate all submenus
        for (const menuPanel of menuPanels) {
            menuPanel.classList.remove('active');
        }
        // find out which submenu should be shown
        var panelToBeActiveName = this.getAttribute('data-target');
        var panelToBeActive = document.querySelector(panelToBeActiveName);
        // make that submenu active
        panelToBeActive.classList.add("active")
        // show the submenu unit
		menuContent.classList.add("show-panels");
	} 
    // if submenus unit is open
    else {
        // hide the submenu
		menuContent.classList.remove('show-panels');
	}	
}

// get all the CTAs that show a submenu
const panelToggles = document.querySelectorAll(".panel-toggle");
// get all the submenus
const menuPanels = document.querySelectorAll(".menu-panel");
// get the menu contents container
var menuContent = document.querySelector(".menu-content");

if(panelToggles) {
    for (const panelToggle of panelToggles) {
        panelToggle.addEventListener("click", togglePanel, false);
    }
}