if (window.localStorage.getItem('theme')) {
    changeColor(window.localStorage.getItem('theme'));
}

function changeColor(color) {
    document.getElementById("thr").style.backgroundColor = color;
    document.getElementById("hu1").style.color = color;
    document.getElementById("hu2").style.color = color;
    document.getElementById("hu3").style.color = color;
    document.getElementById("hu4").style.color = color;
    document.getElementById("hu5").style.color = color;
    window.localStorage.setItem('theme', color);

}
