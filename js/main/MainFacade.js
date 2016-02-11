pensionApp.MainFacade = function() {
	this.mainProxy = clone(new pensionApp.MainProxy(this));
	this.mainCommand = clone(new pensionApp.MainCommand(this));
	this.mainMediator = clone(new pensionApp.MainMediator(this));

	pensionApp.MainFacade.prototype.retrieveMediator = function() {
		return this.mainMediator;
	};	
	pensionApp.MainFacade.prototype.retrieveProxy = function() {
		return this.mainProxy;
	};
	
	pensionApp.MainFacade.prototype.showMainPage = function() {
		this.mainMediator.initalizeMainPage();
		this.mainMediator.appendHtmlMainPage();
		this.mainMediator.attachEventMainEvents();
		this.mainMediator.displayMainPage();
	};	
	
};