pensionApp.RainbowMediator = function(_facade) {	
	var rainbowFacade = _facade;			
	var self = this;
	pensionApp.RainbowMediator.prototype.initalizeRainbowPage = function() {
		myCurrentPage = Constants.ViewingPage.RainbowView;
	};
	pensionApp.RainbowMediator.prototype.appendHtmlRainbowPage = function() {
		var targetDiv = getJqtCurrentPageWrapper(myCurrentPage);
		emptyHTML(targetDiv);
		var html = self.getHtmlForRainbow();
		var insert = $(html);
		$(targetDiv).append(insert);
	};
	pensionApp.RainbowMediator.prototype.getHtmlForRainbow = function() {
		var html = '';	
		html += '<ul>';
		//html += '<input type="button" value="spin" id="spin" style="float:left;" />';
		html += '<canvas id="canvas" width="300" height="300"></canvas>';
		html += '</ul>';
		html += '<a href="javascript:" id="spin" class="whiteButton">추첨</a>';
		return html;
	};
	
	pensionApp.RainbowMediator.prototype.drawRouletteWheel = function(startAngle) {		
		var arc = Math.PI / (Constants.Roulette.GroupNumber/2);
		
		var colors = GroupsColors;
		
		var restaraunts = Groups;
		
		var canvas = document.getElementById("canvas");
		if (canvas.getContext){
			var outsideRadius = 130;
			var textRadius = 95;
			var insideRadius = 60;
			
			ctx = canvas.getContext("2d");
			ctx.clearRect(0,0,300,300);
			
			ctx.strokeStyle = "black";
			ctx.lineWidth = 2;
			
			ctx.font = 'bold 14px Helvetica, Arial';
			
			for(var i = 0; i < Constants.Roulette.GroupNumber; i++){
				var angle = startAngle + i * arc;
				ctx.fillStyle = colors[i];				
				ctx.beginPath();
				ctx.arc(Constants.Roulette.Center, Constants.Roulette.Center, outsideRadius, angle, angle + arc, false);
				ctx.arc(Constants.Roulette.Center, Constants.Roulette.Center, insideRadius, angle + arc, angle, true);
				ctx.stroke();
				ctx.fill();				
				ctx.save();
				
				ctx.shadowOffsetX = -1;
				ctx.shadowOffsetY = -1;
				ctx.shadowBlur    = 0;
				ctx.shadowColor   = "rgb(220,220,220)";
				ctx.fillStyle = "black";
				ctx.translate(Constants.Roulette.Center + Math.cos(angle + arc / 2) * textRadius, 
							  Constants.Roulette.Center + Math.sin(angle + arc / 2) * textRadius);
				ctx.rotate(angle + arc / 2 + Math.PI / 2);
				var text = restaraunts[i];
				ctx.fillText(text, -ctx.measureText(text).width / 2, 0);
				ctx.restore();
			}
			//Arrow
			ctx.fillStyle = "black";
			ctx.beginPath();
			ctx.moveTo(Constants.Roulette.Center - 4, Constants.Roulette.Center - (outsideRadius + 5));
			ctx.lineTo(Constants.Roulette.Center + 4, Constants.Roulette.Center - (outsideRadius + 5));
			ctx.lineTo(Constants.Roulette.Center + 4, Constants.Roulette.Center - (outsideRadius - 5));
			ctx.lineTo(Constants.Roulette.Center + 9, Constants.Roulette.Center - (outsideRadius - 5));
			ctx.lineTo(Constants.Roulette.Center + 0, Constants.Roulette.Center - (outsideRadius - 13));
			ctx.lineTo(Constants.Roulette.Center - 9, Constants.Roulette.Center - (outsideRadius - 5));
			ctx.lineTo(Constants.Roulette.Center - 4, Constants.Roulette.Center - (outsideRadius - 5));
			ctx.lineTo(Constants.Roulette.Center - 4, Constants.Roulette.Center - (outsideRadius + 5));
			ctx.fill();
		}
	};
	pensionApp.RainbowMediator.prototype.drawArrow = function() {		
		/*var canvas = document.getElementById("canvas");
		var outsideRadius = 130;
		ctx = canvas.getContext("2d");
		ctx.fillStyle = "black";
		ctx.beginPath();
		ctx.moveTo(Constants.Roulette.Center - 4, Constants.Roulette.Center - (outsideRadius + 5));
		ctx.lineTo(Constants.Roulette.Center + 4, Constants.Roulette.Center - (outsideRadius + 5));
		ctx.lineTo(Constants.Roulette.Center + 4, Constants.Roulette.Center - (outsideRadius - 5));
		ctx.lineTo(Constants.Roulette.Center + 9, Constants.Roulette.Center - (outsideRadius - 5));
		ctx.lineTo(Constants.Roulette.Center + 0, Constants.Roulette.Center - (outsideRadius - 13));
		ctx.lineTo(Constants.Roulette.Center - 9, Constants.Roulette.Center - (outsideRadius - 5));
		ctx.lineTo(Constants.Roulette.Center - 4, Constants.Roulette.Center - (outsideRadius - 5));
		ctx.lineTo(Constants.Roulette.Center - 4, Constants.Roulette.Center - (outsideRadius + 5));
		ctx.fill();*/
	};
	pensionApp.RainbowMediator.prototype.attachEventRainbowEvents = function() {		
		this.drawRouletteWheel(Constants.Roulette.StartAngle);
		//this.drawArrow();
		$("#spin").click(function(){			
			rainbowFacade.spin();
		});
	};
	pensionApp.RainbowMediator.prototype.displayRainbowPage = function() {
		goToPage(myCurrentPage, 'slideleft');
	};
	
};

