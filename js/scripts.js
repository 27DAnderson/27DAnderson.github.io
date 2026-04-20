//Switch Light/Dark Mode
let stylemode = document.cookie;
let stylelink = document.getElementById('style');

toolbar = document.getElementById('toolbar')
menuButton = document.getElementById('menuButton')

let pets = document.getElementById('pets')

if (stylemode === 'dark') {
    stylelink.href = 'css/dark.css';
    if (pets) {
        pets.src = 'img/pets_dark.png';
    }
} else {
    stylelink.href = 'css/light.css';
    if (pets) {
        pets.src = 'img/pets_light.png';
    }
    document.cookie = 'light';
}

function switchmode() {
    if (stylemode === 'light') {
        stylemode = 'dark';
        stylelink.href = 'css/dark.css';
        document.cookie = 'dark';
        if (pets) {
            pets.src = 'img/pets_dark.png';
        }
        toolbar.style.backgroundColor = '#7e7e7e';
        menuButton.style.backgroundColor = '#7e7e7e';
    } else {
        stylemode = 'light';
        stylelink.href = 'css/light.css';
        document.cookie = 'light';
        if (pets) {
            pets.src = 'img/pets_light.png';
        }
        toolbar.style.backgroundColor = '#333333';
        menuButton.style.backgroundColor = '#333333';
    }
}

//Show/Hide Toolbar
function showhide() {
    let toolbarbuttons = document.getElementById('buttons');

    if (document.cookie === 'light') {
        if (toolbarbuttons.style.display === 'none') {
            toolbarbuttons.style.display = 'block';
            toolbar.style.backgroundColor = '#333333';
            menuButton.style.backgroundColor = '#333333';
            toolbar.style.boxShadow = 'none';
        } else {
            toolbarbuttons.style.display = 'none';
            toolbar.style.backgroundColor = '#ffffff';
            menuButton.style.backgroundColor = '#333333';
            toolbar.style.boxShadow = 'none';
        }
    } else if (document.cookie === 'dark') {
        if (toolbarbuttons.style.display === 'none') {
            toolbarbuttons.style.display = 'block';
            toolbar.style.backgroundColor = '#7e7e7e';
            menuButton.style.backgroundColor = '#7e7e7e';
            toolbar.style.boxShadow = '0 2px 5px #00000080';
            menuButton.style.borderRight = '1px solid #000';
            menuButton.style.boxShadow = 'none';
        } else {
            toolbarbuttons.style.display = 'none';
            toolbar.style.backgroundColor = '#333333';
            menuButton.style.backgroundColor = '#7e7e7e';
            toolbar.style.boxShadow = 'none';
            menuButton.style.borderRight = 'none';
            menuButton.style.boxShadow = '0 2px 5px #00000080';
        }
    }
}

function coin() {
    const randomNumber = Math.floor(Math.random() * 2);
    if (randomNumber === 0) {
        document.getElementById('coinImg').src = 'img/coin_top.png';
    } else {
        document.getElementById('coinImg').src = 'img/coin_bottom.png';
    }
}