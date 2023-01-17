let btn1=document.getElementById("btn");
btn1.addEventListener("click",myFunct);

function myFunct(){
var age=parseInt (document.getElementById("age").value);
let sex=confirm("are you female");

if(age>=20 && sex){
  document.getElementById("con").innerText="work only urban areas";
      
}
else if(age>=20 && age<=40 ){
  document.getElementById("con").innerText="the man work anywhere";
 
}
else if(age>40 && age<=60 ){
  document.getElementById("con").innerText=" the man work only urban areas";
  
}
else{
  document.getElementById("con").innerText="ERROR"
 
}

}

// else if(a<60 && a>=40){
//   document.getElementById("total").value=a;
//   document.getElementById("grate").innerText="D ";
// }
// else{
//   document.getElementById("total").value=a;
//   document.getElementById("grate").innerText=" F";

// }

// }


