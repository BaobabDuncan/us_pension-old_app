pensionApp.NumberProxy = function(_facade) {
	var numberFacade = _facade;	
	var self = this;

	
	pensionApp.NumberProxy.prototype.getNumberFromServer = function(lotSeq,callbackFunc) {
		//lotSeq = 3;
		try{
		    $.jsonp({
		        "url": SERVER_URL+"/api/getNumber/?callback=?",
		        "callback":"parseJSONData",		    
		        "data" : {					
					'lotSeq':lotSeq
				},
		        "success": function(data) {			
		        	emptyLoading();
					callbackFunc(data);
		        },
		        "error": function(xOptions, textStatus) {
		        	emptyLoading();
		        	console.info("armageddonApp.ReviewProxy.prototype.getReviews: " + textStatus);
		        }
		    });
		} catch (e) {			
        	console.info("Error: " + e.message);
		}
		
	};
	
	pensionApp.NumberProxy.prototype.getMaxLotSeq = function(callbackFunc){		
		var startDate = new Date(Constants.StartDate.Year,Constants.StartDate.Month,Constants.StartDate.Day);
		var today = new Date();
		var todayDate = new Date(today.getFullYear(),today.getMonth(),today.getDate());		
		var strPeriod = todayDate - startDate;		
		var d_day = strPeriod/1000/60/60/24;		
		d_day = Math.ceil(d_day);			
		
		if (!(d_day % 7))
		{			
			var nowHours = today.getHours();
			if (nowHours < 20) d_day = d_day - 1;			
		}		
		var maxLotSeq = Math.floor(d_day / 7);		
		callbackFunc(maxLotSeq);
		
	};
};
