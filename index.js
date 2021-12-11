let button = document.getElementById("btn");

function handleClick() {
    let num = Math.round(Math.random() * 255);
    let hue = Math.round(Math.random() * 100);
    let saturation = Math.round(Math.random() * 100);
    let opacity = Math.random().toFixed(1);
    let color = "hsl(" + num + " " + hue + "% " + saturation + "% / " + opacity + ")";
    document.body.style.backgroundColor = color;
}