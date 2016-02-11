pensionApp.ManageMediator = function(_facade) {	
	var manageFacade = _facade;			
	var self = this;
	
	pensionApp.ManageMediator.prototype.initalizeManagePage = function() {
		myCurrentPage = Constants.ViewingPage.ManageView;
	};
	pensionApp.ManageMediator.prototype.appendHtmlManagePage = function() {
		var targetDiv = getJqtCurrentPageWrapper(myCurrentPage);
		emptyHTML(targetDiv);
		var html = self.getHtmlForManage();
		var insert = $(html);
		$(targetDiv).append(insert);
	};
	pensionApp.ManageMediator.prototype.getHtmlForManage = function() {
		var html = '';	
		html += '<h2>구매한 복권 수</h2>';
		html += '<ul class="edit rounded">';
		html += '<li>';		
		html += ''+mySetting.buy_count+'';
		html += '</li>';
		html += '</ul>';
		html += '<h2>총 금액</h2>';
		html += '<ul class="edit rounded">';
		html += '<li>';		
		html += ''+mySetting.buy_count*Constants.PensionPrice+'';
		html += '</li>';
		html += '</ul>';
		html += '<ul class="individual">';
		html += '<li>';		
		html += '<a href="javascript:" id="buy" class="whiteButton">구입</a>';
		html += '</li>';		
		html += '<li>';		
		html += '<a href="javascript:" id="delete" class="whiteButton">구입 취소</a>';
		html += '</li>';
		html += '</ul>';		
		return html;
	};	
	
	pensionApp.ManageMediator.prototype.attachEventManageEvents = function() {
		try{
			$("#buy").unbind('click');			
			$("#delete").unbind('click');
		}catch(e){
		}
		$("#buy").click(function(){			
			mySetting.buy_count = mySetting.buy_count + 1;		
			settingFacade.updateSettingLocalDB(manageFacade.manageCommand.handleUpdateSetting);
		});
		$("#delete").click(function(){			
			if (mySetting.buy_count==0){
				return false;
			}
			mySetting.buy_count = mySetting.buy_count - 1;		
			settingFacade.updateSettingLocalDB(manageFacade.manageCommand.handleUpdateSetting);
		});
	};
	pensionApp.ManageMediator.prototype.displayManagePage = function() {
		goToPage(myCurrentPage, 'slideleft');
	};
	
};

