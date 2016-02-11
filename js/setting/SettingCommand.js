pensionApp.SettingCommand = function(_facade) {
	var settingFacade = _facade;	
	var self = this;
	
	pensionApp.SettingCommand.prototype.getSettingData = function() {		
		settingFacade.retrieveProxy().getSettingData(self.handleGetSettingData);
	};
	pensionApp.SettingCommand.prototype.handleGetSettingData = function(responseObject) {		
		var data_length = responseObject.rows.length;		
		if (data_length==0) {					
			self.saveSettingDataToLocalDB();
		}
		else{			
			self.saveSettingDataToClientArray(responseObject);
		}
		
	};
	
	pensionApp.SettingCommand.prototype.saveSettingDataToLocalDB = function() {
		settingFacade.retrieveProxy().saveSettingDataToLocalDB(self.handleSaveSettingDataToLocalDB);
	};
	pensionApp.SettingCommand.prototype.handleSaveSettingDataToLocalDB = function() {
		self.getSettingData();		
	};
	
	pensionApp.SettingCommand.prototype.saveSettingDataToClientArray = function(data) {
		settingFacade.retrieveProxy().saveSettingDataToClientArray(data,self.handleSaveSettingDataToClientArray);
	};	
	pensionApp.SettingCommand.prototype.handleSaveSettingDataToClientArray = function() {
		onDeviceReady();
	};
	
	pensionApp.SettingCommand.prototype.updateSettingLocalDB = function(callbackFunc) {
		settingFacade.retrieveProxy().updateSettingLocalDB(callbackFunc);
	};
	
};