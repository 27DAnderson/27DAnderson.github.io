//Switch Light/Dark Mode
let stylemode = document.cookie;
let stylelink = document.getElementById('style');

let pets = document.getElementById('pets')

if (stylemode === 'dark') {
    stylelink.href = 'css/dark.css';
    pets.src = 'img/pets_dark.png';
} else {
    stylelink.href = 'css/light.css';
    pets.src = 'img/pets_light.png';
    document.cookie = 'light';
}

function switchmode() {
    if (stylemode === 'light') {
        stylemode = 'dark';
        stylelink.href = 'css/dark.css';
        document.cookie = 'dark';
        pets.src = 'img/pets_dark.png';
    } else {
        stylemode = 'light';
        stylelink.href = 'css/light.css';
        document.cookie = 'light';
        pets.src = 'img/pets_light.png';
    }
}

//Show/Hide Toolbar
function showhide() {
    let toolbarbuttons = document.getElementById('buttons');

    if (toolbarbuttons.style.display === 'none') {
        toolbarbuttons.style.display = 'block';
    } else {
        toolbarbuttons.style.display = 'none';
    }
}
