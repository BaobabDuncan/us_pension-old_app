pensionApp.ManageFacade = function() {
	this.manageProxy = clone(new pensionApp.ManageProxy(this));
	this.manageCommand = clone(new pensionApp.ManageCommand(this));
	this.manageMediator = clone(new pensionApp.ManageMediator(this));

	pensionApp.ManageFacade.prototype.retrieveMediator = function() {
		return this.manageMediator;
	};	
	pensionApp.ManageFacade.prototype.retrieveProxy = function() {
		return this.manageProxy;
	};
	
	pensionApp.ManageFacade.prototype.showManagePage = function() {
		this.manageMediator.initalizeManagePage();
		this.manageMediator.appendHtmlManagePage();
		this.manageMediator.attachEventManageEvents();
		this.manageMediator.displayManagePage();
	};	
	
	
	
	
	
};