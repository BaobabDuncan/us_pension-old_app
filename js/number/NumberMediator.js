pensionApp.NumberMediator = function(_facade) {	
	var numberFacade = _facade;			
	var self = this;
	
	pensionApp.NumberMediator.prototype.initalizeNumberPage = function() {
		myCurrentPage = Constants.ViewingPage.NumberView;
	};
	pensionApp.NumberMediator.prototype.appendHtmlNumberPage = function(maxLotSeq) {
		var targetDiv = getJqtCurrentPageWrapper(myCurrentPage);
		emptyHTML(targetDiv);
		var html = self.getHtmlForNumber(maxLotSeq);
		var insert = $(html);
		$(targetDiv).append(insert);
	};
	pensionApp.NumberMediator.prototype.getHtmlForNumber = function(maxLotSeq) {
		var html = '';
		html += '<div class="info">';		
		html += '<p>추번 번호는 매주 수요일<br> 오후  8시 부터 확인이 가능 합니다.</p>';
		html += '</div>';
		html += '<ul>';	
		for (maxLotSeq;maxLotSeq>0;maxLotSeq--){
			html += '<li class="arrow"><a href="javascript:" title="'+maxLotSeq+'" class="moveDetail">';
			html += '제 '+maxLotSeq+' 회차';
			html += '</a></li>';
		}
		html += '</ul>';
		return html;
	};		
	pensionApp.NumberMediator.prototype.attachEventNumberEvents = function() {
		$(".moveDetail").click(function(){
			appendLoading(Constants.ViewingPage.NumberView);
			numberFacade.showNumberDetail(this.title);
		});
	};
	pensionApp.NumberMediator.prototype.displayNumberPage = function() {					
		goToPage(myCurrentPage, 'slideleft');					
	};
	
	
	pensionApp.NumberMediator.prototype.initalizeNumberDetailPage = function() {
		myCurrentPage = Constants.ViewingPage.NumberDetailView;
	};
	pensionApp.NumberMediator.prototype.appendHtmlNumberDetailPage = function(aNumbers) {
		var targetDiv = getJqtCurrentPageWrapper(myCurrentPage);
		emptyHTML(targetDiv);
		var html = self.getHtmlForNumberDetail(aNumbers);
		var insert = $(html);
		$(targetDiv).append(insert);
		console.info(aNumbers[0].lotSeq);
		$("#numberdetailview .toolbar h1").text('제 '+aNumbers[0].lotSeq+' 회');
	};
	pensionApp.NumberMediator.prototype.getHtmlForNumberDetail = function(aNumbers) {
		var html = '';
		html += '<ul>';
		html += '<table>';
			html += '<thead><tr>';
			html += '<th>등수</th>';
			html += '<th colspan="7">당첨번호</th>';			
			html += '</tr></thead>';
		for (var index=0;index<aNumbers.length;index++){
			html += '<tbody><tr>';
			html += '<td>'+aNumbers[index].grade+'</td>';
//			html += '<td>'+aNumbers[index].money+'</td>';			
			html += '<td>'+aNumbers[index].number1+'</td>';
			html += '<td>'+aNumbers[index].number2+'</td>';
			html += '<td>'+aNumbers[index].number3+'</td>';
			html += '<td>'+aNumbers[index].number4+'</td>';
			html += '<td>'+aNumbers[index].number5+'</td>';
			html += '<td>'+aNumbers[index].number6+'</td>';
			html += '<td>'+aNumbers[index].number7+'</td>';
			html += '</tr></tbody>';
			//html += aNumbers[index].number1;
		}
		html += '</table>';
		html += '</ul>';
		
		return html;
	};		
	pensionApp.NumberMediator.prototype.attachEventNumberDetailEvents = function() {
		
	};
	pensionApp.NumberMediator.prototype.displayNumberDetailPage = function() {		
		goToPage(myCurrentPage, 'slideleft');		
	};
	
};

