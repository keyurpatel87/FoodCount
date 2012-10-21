// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');

// create tab group
var tabGroup = Titanium.UI.createTabGroup();


//
// create base UI tab and root window
//
var win1 = Titanium.UI.createWindow({  
    title:'Tab 1',
    backgroundColor:'#fff'
});
var tab1 = Titanium.UI.createTab({  
    icon:'KS_nav_views.png',
    title:'Tab 1',
    window:win1
});

var label1 = Titanium.UI.createLabel({
	color:'black',
	text:'FoodCount',
	font:{fontSize:20,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	backgroundColor:'red',
	width:'auto'
});

var btn1 = Titanium.UI.createButton({
	title:"Browse",
	top:"5px",
	left:"5px",
	height:Ti.UI.SIZE,
	width:Ti.UI.SIZE,
	backgroundColor:"purple"
});

var btn2 = Titanium.UI.createButton({
	title:"Search",
	top:"5px",
	right:"5px",
	height:Ti.UI.SIZE,
	width:Ti.UI.SIZE,
	color:"blue",
	backgroundColor:"purple"
});



/*
var v1 = Ti.UI.createView({
	color:"Black",
	text:"FoodCount",
	top:"120",
	backgroundColor:"red",
	
});
*/

btn1.addEventListener("click", function (e) {
    alert(e.source + "pushed");  
});

win1.add(label1);
win1.add(btn1);
win1.add(btn2);
//win1.add(v1);
//
// create controls tab and root window
//
var win2 = Titanium.UI.createWindow({  
    title:'Tab 2',
    backgroundColor:'#fff'
});
var tab2 = Titanium.UI.createTab({  
    icon:'KS_nav_ui.png',
    title:'Tab 2',
    window:win2
});

var label2 = Titanium.UI.createLabel({
	color:'#999',
	text:'I am Window 2',
	font:{fontSize:20,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'auto'
});

win2.add(label2);



//
//  add tabs
//
tabGroup.addTab(tab1);  
tabGroup.addTab(tab2);  


// open tab group
tabGroup.open();
