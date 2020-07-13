
const styles = document.querySelector('#example').style;

styles.opacity = 1; (function fade () {
    styles.opacity -= .1;
    styles.opacity  < 0
    ? styles.display = "none"
    : setTimeout(fade, 40)
}) ();

const request = new XMLHttpRequest();
request.open("POST", "/example/api", true);
request.onreadystatechange = function() {
    if (request.readyState != 4 || request.status != 200) 
    return;
    console.log("Successful XHR!");

};
request.send("example=payload");

// jQuery
$.ajax({
    type: "POST",
    url: "/example/api",
    data: "example=payload",
    success: function() {
    console.log("Successful XHR!");
    }
    });

// we can also write the same line of with just one line with jquery'

//jQuery

$('#exampl.').fadeOut();