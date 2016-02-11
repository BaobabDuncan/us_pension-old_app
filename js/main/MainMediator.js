pensionApp.MainMediator = function(_facade) {
	var mainFacade = _facade;
	var self = this;

	pensionApp.MainMediator.prototype.initalizeMainPage = function() {
		myCurrentPage = Constants.ViewingPage.MainView;
	};
	pensionApp.MainMediator.prototype.appendHtmlMainPage = function() {
		var targetDiv = getJqtCurrentPageWrapper(myCurrentPage);
		emptyHTML(targetDiv);
		var html = self.getHtmlForMain();
		var insert = $(html);
		$(targetDiv).append(insert);
	};
	pensionApp.MainMediator.prototype.getHtmlForMain = function() {
		var html = '';
		html += '<ul>';
		html += '<li class="arrow"><a href="javascript:" title="1" class="moveMenu">당첨 번호 보기</a></li>';
		html += '<li class="arrow"><a href="javascript:" title="2" class="moveMenu">추천 희망 무지개</a></li>';
		html += '<li class="arrow"><a href="javascript:" title="3" class="moveMenu">나의 복권 관리</a></li>';
		html += '<li class="arrow"><a href="http://www.bokgwon.or.kr/annuity520.do" target="_blank" >홈페이지 가기</a></li>';
		html += '</ul>';
		return html;
	};

	pensionApp.MainMediator.prototype.attachEventMainEvents = function() {
		$('.moveMenu').click(function() {
			if (this.title == '1') {
				numberFacade.showNumberPage();				
			}
			else if (this.title == '2') {
				rainbowFacade.showRainbowPage();		
			}
			else if (this.title == '3') {
				manageFacade.showManagePage();
			}
			else if (this.title == '4') {
				//settingFacade.showSettingPage();
			}
		});
	};
	pensionApp.MainMediator.prototype.displayMainPage = function() {
		goToPage(myCurrentPage, 'pop');
	};

};
