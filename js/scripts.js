//Switch Light/Dark Mode
let stylemode = document.cookie;
let stylelink = document.getElementById('style');

if (stylemode === 'dark') {
    stylelink.href = 'css/dark.css';
} else {
    stylelink.href = 'css/light.css';
    document.cookie = 'light';
}

function switchmode() {
    if (stylemode === 'light') {
        stylemode = 'dark';
        stylelink.href = 'css/dark.css';
        document.cookie = 'dark';
    } else {
        stylemode = 'light';
        stylelink.href = 'css/light.css';
        document.cookie = 'light';
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
