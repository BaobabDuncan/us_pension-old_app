pensionApp.SettingFacade = function() {
	this.settingProxy = clone(new pensionApp.SettingProxy(this));
	this.settingCommand = clone(new pensionApp.SettingCommand(this));
	this.settingMediator = clone(new pensionApp.SettingMediator(this));

	pensionApp.SettingFacade.prototype.retrieveMediator = function() {
		return this.settingMediator;
	};	
	pensionApp.SettingFacade.prototype.retrieveProxy = function() {
		return this.settingProxy;
	};
	
	pensionApp.SettingFacade.prototype.getSettingData = function() {
		this.settingCommand.getSettingData();
	};
	
	pensionApp.SettingFacade.prototype.updateSettingLocalDB = function(callbackFunc) {		
		this.settingCommand.updateSettingLocalDB(callbackFunc);
	};
	
};