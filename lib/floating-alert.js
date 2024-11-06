class FloatingAlert {
    static init() {
        var alert_container = document.createElement('div');
        alert_container.id = 'alert-container';
        alert_container.innerText = '';
        document.body.appendChild(alert_container);
    }

    static display(message) {
        var alert_container = document.getElementById('alert-container');
    
        // set message
        alert_container.classList.remove('show');
        alert_container.innerText = message;
    
        // show msg
        setTimeout(function() {
            alert_container.classList.add('show');
            // hide msg again after 5 secs
            setTimeout(function() {
                alert_container.classList.remove('show');
    
                // after 10 secs of the "hiding" css animation, delete element from DOM.
                setTimeout(function() {
                    alert_container.remove();
                }, 10000);
            }, 5000);
        }, 200);
    }
}