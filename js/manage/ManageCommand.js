pensionApp.ManageCommand = function(_facade) {
	var manageFacade = _facade;	
	var self = this;
	
	pensionApp.ManageCommand.prototype.handleUpdateSetting = function() {		
		manageFacade.manageMediator.appendHtmlManagePage();
		manageFacade.manageMediator.attachEventManageEvents();
	};
	
	
	
};