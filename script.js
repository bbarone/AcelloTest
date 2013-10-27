// Position Variables
			var x = 0;
			var y = 0;
			var z = 0;

			// Speed - Velocity
			var vx = 0;
			var vy = 0;
			var vz = 0;

			// Acceleration
			var ax = 0;
			var ay = 0;
			var az = 0;
			var ai = 0;
			var arAlpha = 0;
			var arBeta = 0;
			var arGamma = 0;

			var delay = 100;
			var vMultiplier = 0.01;			var alpha = 0;
		
			var alpha = 0;
			var beta = 0;
			var gamma = 0;

			var steps = 0;
			
			if (window.DeviceMotionEvent==undefined) {
				document.getElementById("no").style.display="block";
				document.getElementById("yes").style.display="none";
			} 
			else {
				window.ondevicemotion = function(event) {
					ax = Math.round(Math.abs(event.accelerationIncludingGravity.x * 1));
					ay = Math.round(Math.abs(event.accelerationIncludingGravity.y * 1));
					az = Math.round(Math.abs(event.accelerationIncludingGravity.z * 1));		
					ai = Math.round(event.interval * 100) / 100;
					rR = event.rotationRate;
					if (rR != null) {
						arAlpha = Math.round(rR.alpha);
						arBeta = Math.round(rR.beta);
						arGamma = Math.round(rR.gamma);
					}

/*					
					ax = Math.abs(event.acceleration.x * 1000);
					ay = Math.abs(event.acceleration.y * 1000);
					az = Math.abs(event.acceleration.z * 1000);		
	*/				
				}

				setInterval(function() {
					if (Math.sqrt((ax*ax)+(ay*ay)+(az*az)) > 10) {
						document.getElementById("xlabel").innerHTML = "Hello!";
						document.getElementById("display").innerHTML = "Work: " ++steps;
					}
					if (Math.sqrt((ax*ax)+(ay*ay)+(az*az)) <= 10) {
						document.getElementById("xlabel").innerHTML = "Bye!";
						document.getElementById("display").innerHTML = "Work: " steps;
					}
				}, delay);
			} 
