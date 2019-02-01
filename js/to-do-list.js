  var add = document.getElementById("add-task"),
  	  showNodes = document.getElementById("tdl-list"),
  	  showNodesDone = document.getElementById("tdl-done"),
  	  tblList = document.getElementById("test"),
  	  index=localStorage.getItem("index");
  	  var currentObject={};
  	  if(!index){index=1;} 
   showData();
 
function setVal() {
	  var NewTask=document.getElementById("new-task").value ;
	  currentObject.txt=NewTask;
	  currentObject.flag= false;
	  
	  localStorage.setItem( index ,JSON.stringify(currentObject));
	  index++;
	  
	  localStorage.setItem( "index" , index);	  
	  showData();	
 }

add.addEventListener('click',setVal);

function showData() {
	showNodes.innerHTML="";
	for (var i = 0; i < localStorage.length; i++) {
	  
	  var key = localStorage.key(i);
	  var valueObj = JSON.parse(localStorage.getItem(key));
	  var value= valueObj.txt;
	  if(! valueObj.flag)
	  {
	  var node = document.createElement("DIV");
	  var btnDel = document.createElement("BUTTON");
	  var btnDone = document.createElement("BUTTON");
	  var deletebtn = btnDel.setAttribute("id",key);
	  btnDone.setAttribute("id",key);
	  var textnode = document.createTextNode(value);
	  var btnNodeDel = document.createTextNode("Delete");
	  var btnNodeDone = document.createTextNode("Done");
	  node.appendChild(textnode);
	  btnDel.appendChild(btnNodeDel);
	  btnDone.appendChild(btnNodeDone);
	  if (key != "index"){
	  		document.getElementById("tdl-list").appendChild(node);
	  		document.getElementById("tdl-list").appendChild(btnDel);
	  		document.getElementById("tdl-list").appendChild(btnDone);
	  }
	  btnDel.addEventListener('click',function(event) { 
		  var x = this.getAttribute("id");
		  localStorage.removeItem(x);
		  showData();
	   });
	  btnDone.addEventListener('click',function(event) { 
	  	  var k=this.getAttribute("id");
		  var valueObj =JSON.parse( localStorage.getItem(this.getAttribute("id")));
	      valueObj.flag=true;
           localStorage.setItem(k,JSON.stringify(valueObj))
		  showData();
		  showDataDone();
	   });
     }
	}

  }





function showDataDone() {
	showNodesDone.innerHTML="";
	for (var i = 0; i < localStorage.length; i++) {
	  
	  var key = localStorage.key(i);
	  var valueObj =JSON.parse( localStorage.getItem(key));
	  var value= valueObj.txt;
	  if( valueObj.flag )
	  {
	  var node = document.createElement("DIV");
	  var btnDel = document.createElement("BUTTON");
	  var btnDone = document.createElement("BUTTON");
	  var deletebtn = btnDel.setAttribute("id",key);
	  btnDone.setAttribute("id",key);
	  var textnode = document.createTextNode(value);
	  var btnNodeDel = document.createTextNode("Delete");
	  var btnNodeDone = document.createTextNode("Undo");
	  node.appendChild(textnode);
	  btnDel.appendChild(btnNodeDel);
	  btnDone.appendChild(btnNodeDone);
	  if (key != "index"){
	  		document.getElementById("tdl-done").appendChild(node);
	  		document.getElementById("tdl-done").appendChild(btnDel);
	  		document.getElementById("tdl-done").appendChild(btnDone);
	  }
	  btnDel.addEventListener('click',function(event) { 
		  var x = this.getAttribute("id");
		  localStorage.removeItem(x);
		  showData();
		  showDataDone();
	   });
     }
	}

  }