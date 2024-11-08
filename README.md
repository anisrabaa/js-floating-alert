# JS Floating Alert

A simple, minimal way to display messages to users.

The message appears in a box that "floats" from the bottom of the screen:

![Demo Image](https://drive.google.com/uc?export=view&id=1W1gyQ-LMuySNnfuEJEelQPYAKf89qRtW)


## Getting Started

#### Step 1: Import the right JS file
	<script  src="[path-to-folder]/lib/floating-alert.js"></script>
	
#### Step 2: Initialize FloatingAlert on page load
	onload = function() {
		FloatingAlert.init();
	}

#### Step 3: Display your message
	FloatingAlert.display('This is a test message.');

#### Demo:

    Demo page [here](https://anisrabaa.github.io/js-floating-alert/).