function _(x){
		return document.getElementById(x);
}

function add(){
	_("add").innerHTML='<iframe src="add.html" width="600" height="500" frameborder="0"></iframe>';
	_("wrapper").style.opacity="0.2";
	_("add").style.display="block";
	_("closeadd").style.display="block";
}

function closeadd(){
	_("add").style.display="none";
	_("closeadd").style.display="none";
	_("wrapper").style.opacity="1";
}

function submit(){
	var name = _("addname").value;
	var link = _("addlink").value;
	var des = _("adddes").value;
	var sub = _("selsub").value;
	
	if(name == "" || link == "" || des == ""){     // for checking if the input is empty
		_("status").innerHTML = "Fill all the fields!";
	}
	
	name = name.replace(/(<([^>]+)>)/ig, "");  // for trimming the html tags
	link = link.replace(/(<([^>]+)>)/ig, "");
	des = des.replace(/(<([^>]+)>)/ig, "");
	
}

/*function listcolors(){
	
	var sublist = _("subjectlist");
	
	var childnums = sublist.children.length;
	
	for(var i=0; i<childnums; i++){
		var hexcolor = "";
		for(var k=0 ; k<6; k++){
			var randnum = Math.floor(Math.random() * (9 - 0 + 1)) + 0;
			hexcolor = hexcolor.concat( randnum );
		}
		
		sublist.children[1].style.backgroundColor= "red";
	}
}*/

