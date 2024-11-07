onload = function() {

    FloatingAlert.init();

    this.document.getElementById('btn-try-me').addEventListener('click', function(e) {
        e.preventDefault();
        FloatingAlert.display('This is a sample alert!');
    });


    // the form
    this.document.getElementById('try-it-form').addEventListener('submit', function(e) {
        e.preventDefault();
        FloatingAlert.display(this.alert_text.value, this.alert_type.value);
    })
}


