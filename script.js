var year=document.getElementById("year");
var result=document.getElementById("result");
var button=document.getElementById("button");

function buttonclick(){
   
        if(year.value%4==0 &&year.value%100!=0 ||year.value%400==0) 
        {     
            result.innerText= "This is a Leap Year";
        }
       
        else{
            result.innerText= "Not a Leap Year";
        }
    
   
};

