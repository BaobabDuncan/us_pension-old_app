var databaseOptions = {
	fileName : "pension.db",
	version : "1.0",
	displayName : "pension db",
	maxSize : 1024
};
var SERVER_URL = 'http://api-server-1.appspot.com/pension';
//var SERVER_URL = 'http://localhost:8080/pension';
var mySetting = '';
var myCurrentPage = '';
var Constants = {
	PensionPrice : 1000,
	ViewingPage : {
		MainView : '#mainview',
		RainbowView : '#rainbowview',
		NumberView : '#numberview',
		NumberDetailView : '#numberdetailview',
		ManageView : '#manageview'
	},
	Default : {
		Setting_id : 1
	},
	Roulette : {
		StartAngle : 4.5,
		Center : 150,
		GroupNumber : 7
	},
	ServerBoolean : {
		False : "False",
		True : "True"
	},
	Boolean : {
		False : false,
		True : true
	},
	StartDate : {
		Year : 2011,
		Month : 5,
		Day : 29
	},
	Separator : {
		Date : '-'
	}
};

var Groups = [ "1조", "2조", "3조", "4조", "5조", "6조", "7조" ];
var GroupsColors = [ "red", "orange", "yellow", "green", "#149cc5", "#183ea8",
		"purple" ];