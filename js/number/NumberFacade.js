pensionApp.NumberFacade = function() {
	this.numberProxy = clone(new pensionApp.NumberProxy(this));
	this.numberCommand = clone(new pensionApp.NumberCommand(this));
	this.numberMediator = clone(new pensionApp.NumberMediator(this));

	pensionApp.NumberFacade.prototype.retrieveMediator = function() {
		return this.numberMediator;
	};	
	pensionApp.NumberFacade.prototype.retrieveProxy = function() {
		return this.numberProxy;
	};
	
	pensionApp.NumberFacade.prototype.showNumberPage = function() {
		this.numberCommand.getMaxLotSeq();
		/*this.numberMediator.initalizeNumberPage();
		this.numberMediator.appendHtmlNumberPage();
		this.numberMediator.attachEventNumberEvents();
		this.numberMediator.displayNumberPage();*/
	};	
	pensionApp.NumberFacade.prototype.showNumberDetail = function(lotSeq) {
		this.numberCommand.getNumberFromServer(lotSeq);
	};
	
	
	
};