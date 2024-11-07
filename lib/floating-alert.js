class FloatingAlert {
    static init() {
        var alert_container = document.createElement('div');
        alert_container.id = 'alert-container';
        alert_container.innerText = '';
        document.body.appendChild(alert_container);
    }

    static display(message, level = null) {

        var level_class_name;
        switch(level) {
            case 'info':
                level_class_name = 'info';
                break;

            case 'warning':
                level_class_name = 'warning';
                break;

            case 'error':
                level_class_name = 'error';
                break;

            case 'success':
                level_class_name = 'success';
                break;
            
            default:
                level_class_name = 'default';
        }

        var alert_container = document.getElementById('alert-container');
    
        // set message
        alert_container.classList.remove(...alert_container.classList); // remove all classes from div
        alert_container.innerText = message;
    
        // show msg
        setTimeout(function() {
            alert_container.classList.add('show', level_class_name);
            // hide msg again after 5 secs
            setTimeout(function() {
                alert_container.classList.remove('show');
            }, 5000);
        }, 200);
    }


    static info(msg) {
        this.display(msg, 'info');
    }

    static warning(msg) {
        this.display(msg, 'warning');
    }

    static error(msg) {
        this.display(msg, 'error');
    }

    static success(msg) {
        this.display(msg, 'success');
    }
}