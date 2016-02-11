settingDB();

function settingDB() {
	myDBHandler = new DBHandler(databaseOptions);
	myDBHandler.connectDB();	
	myDBHandler.createSettingTable();	
	/*myDBHandler.createUserTable();	
	myDBHandler.createPenalTable();*/
}

function clone(obj) {
	if(typeof(obj) != 'object') return obj;
	if(obj == null) return obj;
	
	var newObj = new Object();
	for(var i in obj) newObj[i] = clone(obj[i]);
	return newObj;
};

function getJqtCurrentPageWrapper(pageId) {
	var wrapperPage = pageId+'-wrapper';
	return wrapperPage;
};

function getJqtCurrentPageToolbar(pageId) {
	var toolbarPage = pageId+'-toolbar';
	return toolbarPage;
};

function goBackJqt(){
	jQT.goBack();
}

function emptyHTML(Id){
	$(Id).empty();
};

function goToPage(pageId,event,reverse) {	
	if (event==null) event='';
	if (reverse==null) reverse=false;
	jQT.goTo(pageId,event,reverse);	
};

function splitData(data,separator) {
	return data.split(separator);	
};
function dropTable(){
	myDBHandler.dropTable('setting');
	myDBHandler.dropTable('user');
	myDBHandler.dropTable('penal');
};
// random
function getRandomFromTo(from,to) {			
	return Math.floor(Math.random() * (to - from + 1) + from);
};	

// date

function getToDayDate(){
	var today = new Date();	
	var s = leadingZeros(today.getFullYear(), 4) + '-' +
		leadingZeros(today.getMonth() + 1, 2) + '-' +
		leadingZeros(today.getDate(), 2);
	return s;
}

function getStartDate(){
	var s = leadingZeros(Constants.StartDate.Year, 4) + '-' +
	leadingZeros(Constants.StartDate.Month + 1, 2) + '-' +
	leadingZeros(Constants.StartDate.Day, 2);
return s;
}

function leadingZeros(n, digits) {
  var zero = '';
  n = n.toString();

  if (n.length < digits) {
    for (i = 0; i < digits - n.length; i++)
      zero += '0';
  }
  return zero + n;
}


// loading

function appendLoading(currentPage)
{
	$(currentPage).append('<div id="loadingview"><center><div id="loading" class="loading"><img src="./images/loading/ajax-loader.gif"></div></center></div>');	
}

function emptyLoading()
{	
	$("#loadingview").remove();	
}
	