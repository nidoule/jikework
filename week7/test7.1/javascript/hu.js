if (window.localStorage.getItem('theme')) {
    changeColor(window.localStorage.getItem('theme'));
}
function changeColor(color) {
    document.getElementById("thr").style.backgroundColor = color;
    
    window.localStorage.setItem('theme', color);

}