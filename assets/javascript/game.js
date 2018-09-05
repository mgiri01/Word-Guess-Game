var boxers = [
"ALI" ,
"ROBINSON" ,
"MARCIANO" ,
"LOUIS" ,
"TYSON" 
];






var name = boxers[Math.floor(Math.random()*boxers.length)];
var remaining = name.length;
var hidden = [];

if (name ==="TYSON"){
  var  clue="Youngest boxer to win a heavyweight title.";
}

if (name ==="MARCIANO"){
  var  clue="Retired undefeated in 1956.";
}

if (name ==="LOUIS"){
   var clue="World heavyweight champion from 1937 to 1949.";
}

if (name==="ALI"){
  var  clue="Ranked as greatest athlete of the 20th century by Sports Illustrated.";
}

if (name==="ROBINSON"){
    var  clue="173 wins between 1940 and 1965.";
  }


 for (var i =0;i<name.length;i++){
    hidden[i]="_";
    }

    function game(){
        // console.log(name);  
        
            var pressed = String.fromCharCode(event.keyCode);
           
        //     console.log(pressed);
        
        //    console.log
        
        if(pressed != null){
            // console.log("test game start");
                
            // console.log("boxer name is "+name);
        
            var html="<p> Guess a letter! </p>";
            document.querySelector('#introduction').innerHTML=html;
        
               
        
        for (var j =0; j < name.length; j++){
                
                if (name[j] ===pressed){
                hidden[j] = pressed;
                // console.log(hidden[j]);
                remaining --;
                // console.log(remaining);
        
               
               
            }
        
        
        
        // console.log(hidden.join(" "));
        
        
        document.querySelector("#DisplayLetters").innerHTML = hidden.join(" ");

       

        document.querySelector("#Hint").innerHTML="Hint: "+clue;
         
        if(remaining===0){
            alert(hidden.join("") +" is the correct name! You Win!");
            location.reload();
        }
        
        
               }
            
            }

        }

 
document.onkeyup=function(){


game();




}
        

    
  




