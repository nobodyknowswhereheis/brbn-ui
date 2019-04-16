function myChangeFunction() {
    console.log("External change handler called!");
}
window.addEventListener('field_changed', function(e) {
    console.log('Web components ready!');
    console.log(e);
    // your web components here
});