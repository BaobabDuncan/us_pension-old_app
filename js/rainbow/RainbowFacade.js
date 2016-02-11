pensionApp.RainbowFacade = function() {
	this.rainbowProxy = clone(new pensionApp.RainbowProxy(this));
	this.rainbowCommand = clone(new pensionApp.RainbowCommand(this));
	this.rainbowMediator = clone(new pensionApp.RainbowMediator(this));

	pensionApp.RainbowFacade.prototype.retrieveMediator = function() {
		return this.rainbowMediator;
	};	
	pensionApp.RainbowFacade.prototype.retrieveProxy = function() {
		return this.rainbowProxy;
	};
	
	pensionApp.RainbowFacade.prototype.showRainbowPage = function() {
		this.rainbowMediator.initalizeRainbowPage();
		this.rainbowMediator.appendHtmlRainbowPage();
		this.rainbowMediator.attachEventRainbowEvents();
		this.rainbowMediator.displayRainbowPage();
	};	
	
	pensionApp.RainbowFacade.prototype.spin = function() {
		this.rainbowCommand.spin();		
	};
	
	
	
};