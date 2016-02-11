pensionApp.RainbowProxy = function(_facade) {
	var rainbowFacade = _facade;	
	var self = this;
	
	var Arc = Math.PI / 3.5;
	var StartAngle = 0;
	var SpinTime = 0;
	var SpinTimeTotal = 0;
	var SpinAngleStart = 0;
	var restaraunts = Groups;
	
	pensionApp.RainbowProxy.prototype.resetSpinValue = function() {		
		StartAngle = 0;
		SpinTime = 0;
		SpinTimeTotal = 0;
		SpinAngleStart = 0;
	};
	pensionApp.RainbowProxy.prototype.spin = function(callbackFunc) {
		SpinAngleStart = Math.random() * 10 + 10;			
		SpinTimeTotal = Math.random() * 3 + 4 * 1000;
		self.rotateWheel(callbackFunc);		
	};
	
	pensionApp.RainbowProxy.prototype.rotateWheel = function(callbackFunc) {
		SpinTime += 30;		
		console.info(SpinTime);
		if(SpinTime >= SpinTimeTotal) {			
			self.stopRotateWheel(callbackFunc);			
			return;
		}
		var spinAngle = SpinAngleStart - self.easeOut(SpinTime, 0, SpinAngleStart, SpinTimeTotal);
		StartAngle += (spinAngle * Math.PI / 180);
		rainbowFacade.retrieveMediator().drawRouletteWheel(StartAngle);
		spinTimeout = setTimeout('rainbowFacade.retrieveProxy().rotateWheel('+callbackFunc+')', 30);
	};
	pensionApp.RainbowProxy.prototype.stopRotateWheel = function(callbackFunc) {
		//clearTimeout(spinTimeout);
		var degrees = StartAngle * 180 / Math.PI + 90;
		var arcd = Arc * 180 / Math.PI;
		var index = Math.floor((360 - degrees % 360) / arcd);
		ctx.save();
		ctx.font = 'bold 20px Helvetica, Arial';
		var text = restaraunts[index];
		ctx.fillText(text, 150 - ctx.measureText(text).width / 2, 150 + 10);
		ctx.restore();
		callbackFunc();
	};
	pensionApp.RainbowProxy.prototype.easeOut = function(t, b, c, d) {
		var ts = (t/=d)*t;
		var tc = ts*t;
		return b+c*(tc + -3*ts + 3*t);
	};
	
	
};
