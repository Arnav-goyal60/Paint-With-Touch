canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
var mouse_event = "";
var last_position_of_x, last_position_of_y;
color = document.getElementById("color");
width = document.getElementById("width_of_line");
canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e) {
    mouse_event = "mousedown";
}
canvas.addEventListener("mouseup", my_mouseup);

function my_mouseup(e) {
    mouse_event = "mouseup";
}
canvas.addEventListener("mouseleave", my_mouseleave);

function my_mouseleave(e) {
    mouse_event = "mouseleave";
}
cavas.addEventListener("touchmove", my_touchmove);

function my_touchmove(e){
current_position_of_touch_x = e.touches[0].clientX - canvas.offsetLeft;
current_position_of_touch_y = e.touches[0].clientY - canvas.offsetTop;
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = width;
ctx.moveTo(last_position_of_touch_x, last_position_of_touch_y);
ctx.lineTo(current_position_of_touch_x, current_position_of_touch_y);
ctx.stroke();

last_position_of_touch_x = current_position_of_touch_x;
last_position_of_touch_y = current_position_of_touch_y;
}
canvas.addEventListener("mousemove", my_mousemove);

function my_mousemove(e) {
    current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
    current_position_of_mouse_y = e.clientY - canvas.offsetTop;
    if (mouse_event == "mousedown") {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width;
        console.log("last position of x and y coordinates is =");
        console.log("x=" + last_position_of_mouse_x + "y=" + last_position_of_mouse_y);
        ctx.moveTo(last_position_of_mouse_x, last_position_of_mouse_y);
        console.log("current position of x and y coordinates is =");
        console.log("x=" + current_position_of_mouse_x + "y=" + current_position_of_mouse_y);
        ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
        ctx.stroke();
    }
    last_position_of_x = current_position_of_mouse_x;
    last_position_of_y = current_position_of_mouse_y;
}