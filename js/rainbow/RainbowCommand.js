pensionApp.RainbowCommand = function(_facade) {
	var rainbowFacade = _facade;	
	var self = this;
	
	
	pensionApp.RainbowCommand.prototype.spin = function() {		
		rainbowFacade.retrieveProxy().resetSpinValue();
		rainbowFacade.retrieveProxy().spin(this.hendleSpin);		
	};
	pensionApp.RainbowCommand.prototype.hendleSpin = function() {
		
	};
	
	
};