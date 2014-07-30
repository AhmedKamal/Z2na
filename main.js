//Declearations
var IsActivated = false;
var  Ishovered = false;
var lastclick;

window.onload = function () {
    var buttonsIds=new Array();
    buttonsIds[0]="fb";
    buttonsIds[1]="tw";
    buttonsIds[2]="add";
    buttonsIds[3]="gplus";

    for(var k=0; k<4; k++) {
        var b = document.getElementById(buttonsIds[k]);
        b.onmouseover = Activate(buttonsIds[k] , 'hover');
        b.onmouseout = Deactivate(buttonsIds[k]);
        b.onclick = Activate(buttonsIds[k] , 'click')
    }


}


var event_type ;
function Activate(name , event_type){//start 'Activate' function

    if(event_type == 'hover'){

        //Hovering Case
        if(Ishovered == false){
            ChangeSize(name , 'decrease' , 'hover');
            Ishovered = true;
        }

        //Restore Case
        else {
            var i ;
            for(i=0 ; i<4 ; i++){
                ChangeSize(buttonsIds[i] , 'restore' , 'hover');
                Ishovered = false;
            }
            Activate(name , 'hover');
        }
    }

    else if(event_type == 'click'){

        alert("Item is clicked");

    }

}


//Used to remove the effect when the mouse is out
function Deactivate(name){

    for(var i=0; i<5; i++){
        ChangeSize(buttonsIds[i] , 'restore' , 'hover');


    }

}

function  ChangeSize(name , type , event_type){

    if(type == "decrease" ||  type == "increase" ){
        e=document.getElementById(name);
        if(event_type == 'click') {

            lastclick = name;
            e.style.width = 130 + 'px';}
        else{e.style.width = 150 + 'px';}
    }

    else if (type == "restore"){

        if (event_type = "hover"){

            e=document.getElementById(name);
            e.style.width = 140 + 'px';}}




    else {}
}

/// FB CODE 

function fbs_click() {u=location.href;t=document.title;window.open('http://www.facebook.com/sharer.php?u='+encodeURIComponent(u)+'&t='+encodeURIComponent(t),'sharer','toolbar=0,status=0,width=626,height=436');return false;}


/// Twitter CODE

!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src="//platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");


//Google Plus Code

function gpClick() {
    var po = document.createElement('script');
    po.type = 'text/javascript';
    po.async = true;
    po.src = 'https://apis.google.com/js/plusone.js';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(po, s);
};