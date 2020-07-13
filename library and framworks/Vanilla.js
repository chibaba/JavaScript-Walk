
const styles = document.querySelector('#example').style;

styles.opacity = 1; (function fade () {
    styles.opacity -= .1;
    styles.opacity  < 0
    ? styles.display = "none"
    : setTimeout(fade, 40)
}) ();

// we can also write the same line of with just one line with jquery'

//jQuery

$('#exampl.').fadeOut();