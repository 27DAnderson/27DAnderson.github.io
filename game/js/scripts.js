//Switch Light/Dark Mode
let stylelink = document.getElementById('style');
let stylebar = 'dark'

if (stylebar === 'dark') {
    stylelink.href = '../css/dark.css';
} else {
    stylelink.href = '../css/light.css';
}

function switchmode() {
    if (stylebar === 'light') {
        stylebar = 'dark';
        stylelink.href = '../css/dark.css';
    } else {
        stylebar = 'light';
        stylelink.href = '../css/light.css';
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
