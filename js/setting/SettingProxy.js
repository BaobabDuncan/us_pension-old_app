pensionApp.SettingProxy = function(_facade) {
	var settingFacade = _facade;	
	var self = this;
	
	pensionApp.SettingProxy.prototype.getSettingData = function(callbackFunc) {
		myDBHandler.database.transaction(function (tx) {
			var sql = 'select * from setting WHERE setting_id = '+Constants.Default.Setting_id+'';
			tx.executeSql(sql,[], function(transaction, results)  {                         
				callbackFunc(results);
			}, self.handleError);
		});   
	};
	
	pensionApp.SettingProxy.prototype.saveSettingDataToLocalDB = function(callbackFunc) {	
		myDBHandler.database.transaction(function (tx) {
			tx.executeSql("INSERT INTO setting (setting_id) VALUES (?)",
				[Constants.Default.Setting_id],
				function(trans, results)  {                             
					callbackFunc();
				}, self.handleError);
		});
	};
	
	pensionApp.SettingProxy.prototype.saveSettingDataToClientArray = function(data,callbackFunc) {
		for (var index = 0; index < data.rows.length; index++)
		{                                               
			var setting = data.rows.item(index);                    
			var settingVO = new pensionApp.VO_Setting();
			
			settingVO.setting_id = setting['setting_id'];
			settingVO.buy_count = setting['buy_count'];

		}			
		mySetting = settingVO;
		callbackFunc();
	};
	
	pensionApp.SettingProxy.prototype.updateSettingLocalDB = function(callbackFunc) {		
		myDBHandler.database.transaction(function (tx) {
			var sql = "UPDATE setting SET buy_count = '"+mySetting.buy_count+"' WHERE setting_id = '"+mySetting.setting_id+"'";
			tx.executeSql(sql,[], function(transaction, results)  {				
				callbackFunc();
			}, self.handleError);
		});       
	};	
};
