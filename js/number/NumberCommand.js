pensionApp.NumberCommand = function(_facade) {
	var numberFacade = _facade;	
	var self = this;
	
	pensionApp.NumberCommand.prototype.getMaxLotSeq = function() {		
		numberFacade.retrieveProxy().getMaxLotSeq(this.hendleGetMaxLotSeq);
	};
	pensionApp.NumberCommand.prototype.hendleGetMaxLotSeq = function(maxLotSeq) {		
		numberFacade.numberMediator.initalizeNumberPage();
		numberFacade.numberMediator.appendHtmlNumberPage(maxLotSeq);
		numberFacade.numberMediator.attachEventNumberEvents();
		numberFacade.numberMediator.displayNumberPage();
	};
	
	pensionApp.NumberCommand.prototype.getNumberFromServer = function(lotSeq) {		
		numberFacade.retrieveProxy().getNumberFromServer(lotSeq,this.hendleGetNumberFromServer);
	};
	pensionApp.NumberCommand.prototype.hendleGetNumberFromServer = function(responseObject) {	
		console.info(responseObject.api_header.status);
		
		if(responseObject.api_header.status==Constants.ServerBoolean.False)
		{
			return false;
		}
		
		if (!responseObject.numbers) {
			return false;
		}		
		else{
			console.info(responseObject);
			numberFacade.numberMediator.initalizeNumberDetailPage();
			numberFacade.numberMediator.appendHtmlNumberDetailPage(responseObject.numbers);
			numberFacade.numberMediator.attachEventNumberDetailEvents();
			numberFacade.numberMediator.displayNumberDetailPage();
		}	
		console.info('pensionApp.NumberCommand.prototype.hendleGetNumberFromServer = function()');
	};
	
};