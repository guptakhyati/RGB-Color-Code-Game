var square=document.querySelectorAll(".square");                          //rgb(0, 0, 0) not working!
var correctColor='#'+Math.floor(Math.random()*16777215).toString(16);
var h1=document.querySelector("h1");
var index=randomNumber(0,5);
var header=document.querySelector(".header");
var button=document.querySelector("button");
var paragraph=document.getElementById("correct_incorrect");                
var easy=document.querySelector("#easy");
var hard=document.querySelector("#hard");
var selected="none";
for(var i=0;i<square.length;i++)
{   
	var color='#'+Math.floor(Math.random()*16777215).toString(16);
	square[i].style.backgroundColor=color;
    
}
h1.textContent=hexToRGB(correctColor);
square[index].style.backgroundColor=correctColor;

button.addEventListener("click",function(){
//     for(var i=0;i<6;i++)
// {   var x = Math.floor(Math.random() * 256);
//     var y = Math.floor(Math.random() * 256);
//     var z = Math.floor(Math.random() * 256);
//     var bgColor = "rgb(" + x + "," + y + "," + z + ")";
// 	square[i].style.backgroundColor=bgColor;
//     h1.textContent=bgColor;
// }
// var correctColor='#'+Math.floor(Math.random()*16777215).toString(16);
// var index=randomNumber(0,5);
// square[index].style.backgroundColor=correctColor;
for(var i=0;i<6;i++)
{   
	square[i].style.visibility="visible";
	var color='#'+Math.floor(Math.random()*16777215).toString(16);
	square[i].style.backgroundColor=color;
    
}
correctColor='#'+Math.floor(Math.random()*16777215).toString(16);
if(selected==="easy"){
index=randomNumber(0,2);
}
if(selected==="hard"||selected==="none"){
index=randomNumber(0,5);	
}
h1.textContent=hexToRGB(correctColor);
square[index].style.backgroundColor=correctColor;
})


function hexToRGB(h) {
  let r = 0, g = 0, b = 0;

  // 3 digits
  if (h.length == 4) {
    r = "0x" + h[1] + h[1];
    g = "0x" + h[2] + h[2];
    b = "0x" + h[3] + h[3];

  // 6 digits
  } else if (h.length == 7) {
    r = "0x" + h[1] + h[2];
    g = "0x" + h[3] + h[4];
    b = "0x" + h[5] + h[6];
  }
  
  return "rgb("+ +r + "," + +g + "," + +b + ")";
}

function randomNumber(min, max) {  
    min = Math.ceil(min); 
    max = Math.floor(max); 
    return Math.floor(Math.random() * (max - min + 1)) + min; 
}  

for(var i=0;i<6;i++){
square[i].addEventListener("click",check);
}

function check(){
	var selectedsquarecolor=this.style.backgroundColor;
	var selectedsquarecolorhex=RGBToHex(selectedsquarecolor);
	if(selectedsquarecolorhex===correctColor){
		if(selected==="easy"){
		  for(var i=0;i<3;i++){	
          square[i].style.visibility="visible";
          }
          for(var i=0;i<3;i++){	
          square[i].style.backgroundColor=correctColor;
      }
      header.style.backgroundColor=correctColor;
      if(paragraph.textContent!="Correct!"){
          paragraph.textContent ="Correct!";
      }
      document.getElementById("reset").innerHTML="Play Again?";
      button.addEventListener("click",function(){
      	header.style.backgroundColor="#20B2AA";
      	document.getElementById("reset").innerHTML="New Colors";
      	paragraph.textContent="";
      })    
  }
  if(selected==="hard"||selected=="none"){
  	for(var i=0;i<6;i++){	
          square[i].style.visibility="visible";
          }
          for(var i=0;i<6;i++){	
          square[i].style.backgroundColor=correctColor;
      }
      header.style.backgroundColor=correctColor;
      if(paragraph.textContent!="Correct!"){
          paragraph.textContent ="Correct!";
      }
      document.getElementById("reset").innerHTML="Play Again?";
      button.addEventListener("click",function(){
      	header.style.backgroundColor="#20B2AA";
      	selected="none";
      	document.getElementById("reset").innerHTML="New Colors";
      	paragraph.textContent="";
       for(var i=0;i<6;i++)
       {   
	     square[i].style.visibility="visible";
	     var color='#'+Math.floor(Math.random()*16777215).toString(16);
	     square[i].style.backgroundColor=color;
    
        }
        correctColor='#'+Math.floor(Math.random()*16777215).toString(16);
if(selected==="easy"){
index=randomNumber(0,2);
}
if(selected==="hard"||selected==="none"){
index=randomNumber(0,5);	
}
h1.textContent=hexToRGB(correctColor);
square[index].style.backgroundColor=correctColor;     	

      })    

  }

}
	else{
	  if(paragraph.textContent!="Try Again!")
	       paragraph.textContent += "Try Again!";	
	  this.style.visibility="hidden";
	}

}

function RGBToHex(rgb) {
  // Choose correct separator
  let sep = rgb.indexOf(",") > -1 ? "," : " ";
  // Turn "rgb(r,g,b)" into [r,g,b]
  rgb = rgb.substr(4).split(")")[0].split(sep);

  let r = (+rgb[0]).toString(16),
      g = (+rgb[1]).toString(16),
      b = (+rgb[2]).toString(16);

  if (r.length == 1)
    r = "0" + r;
  if (g.length == 1)
    g = "0" + g;
  if (b.length == 1)
    b = "0" + b;

  return "#" + r + g + b;
}


hard.addEventListener("click",function(){
selected="hard";
for(var i=0;i<square.length;i++){
	square[i].style.visibility="visible";
}	

for(var i=0;i<square.length;i++)
{   
	var color='#'+Math.floor(Math.random()*16777215).toString(16);
	square[i].style.backgroundColor=color;
    
}
correctColor='#'+Math.floor(Math.random()*16777215).toString(16);
index=randomNumber(0,5);
h1.textContent=hexToRGB(correctColor);
square[index].style.backgroundColor=correctColor;
header.style.backgroundColor="#20B2AA";  
paragraph.textContent="";
})

easy.addEventListener("click",function(){
selected="easy";
for(var i=3;i<6;i++){
	square[i].style.visibility="hidden";
}

for(var i=0;i<3;i++)
{   
	var color='#'+Math.floor(Math.random()*16777215).toString(16);
	square[i].style.backgroundColor=color;
    
}
correctColor='#'+Math.floor(Math.random()*16777215).toString(16);
index=randomNumber(0,2);
h1.textContent=hexToRGB(correctColor);
square[index].style.backgroundColor=correctColor; 
header.style.backgroundColor="#20B2AA";  
paragraph.textContent=""; 
})


