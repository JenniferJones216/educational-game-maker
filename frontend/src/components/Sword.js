import apiActions from "../api/api-actions";
import * as CONSTANTS from "../components/constants";
import Users from "./Users";
import cookie from "./cookies"

export default {
  displaySword,
  SwordFunctions,
  SwordGameCreate
}


function displaySword()
{ 
  
  console.log("      =============displaySword==================   ");


return `


<div>    
<p>To Select Words Click On The Letters In Order</p>
<div id="words">
</div>
<div id="found">
</div>
<div id="container">
</div>
</div>
  `;
}

function SwordFunctions(y)
{  
  console.log("      =============SwordFunctions=========   "+y);
    
 
    SetupGame(y);
  
    let arr;// = x2.split(', ');
    let words; //= Keywords2.split(', ');
    const keyword = document.getElementById("words");
    const container = document.getElementById("container");
    const found = document.getElementById("found");
    var key = "";
    var answer = [];
    var calck=0;
    var buff=[];
    var start;
    var step=0;
  
  
  
  
  function SetupGame(x){
    console.log(">>>>>>>>>>>>>>>>>>>");
     apiActions.getRequest(CONSTANTS.swordURL, woogy => {
        console.log(woogy[x-1].matrix);
  arr=(woogy[x-1].matrix).split(', ');
  words=  (woogy[x-1].keywords).split(', ');
  makeRows(10, 10);
  });



}





  function makeRows(rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
   let row = 0;
    let col = 0;
   for (var c = 0; c < (rows * cols); c++) {
     if(col > 9){
        col = 0;
        row++;
       }
      let cell = document.createElement("div");
       cell.innerText = arr[c];
      cell.value=c;
      buff.forEach( (number)=>{  
      if(cell.value==number)
  {    
  cell.style.color="green";
        }
          }     );
      container.appendChild(cell).className = "grid-item";
      keyword.innerText = words.join(", ");
      col++;
    };
  };
  
  container.addEventListener("click", function (e) {
    console.log(e.target.outerText + " ==========  " + e.button);
    if ( key.length<2)
   {
    if (key=='')
   { start=e.target.value;
    buff.push(e.target.value);
    key += e.target.outerText;
  }
    else
    {
  step=start-e.target.value;
  key += e.target.outerText;
  buff.push(e.target.value);
  console.log("step--------->"+step);
    }
   }
    else
    {
    if(arr[e.target.value+step]==key[key.length-1])
    {
      console.log("true   "+key+"   "+arr[e.target.value-step]+"    "+key[key.length-1])
      key += e.target.outerText;
    buff.push(e.target.value);
  console.log("*******"+buff);
  }
    else
   {
    console.log("else      "+key+"   "+arr[e.target.value-step]+"    "+key[key.length-1])
    key=''; buff=[];
  }
    }
    console.log("----" + key + "--------"+calck+"----------"+e.target.value);
    words.forEach(function(item, index, arr1) {
      if (key === item) {
        console.log("you found word  ");
  ///////////////////////////////////
  container.innerHTML = "";
  makeRows(10,10);
    ////////////////////////////////////////
        words[index]='$';
       answer.push(key);
       key = '';
        calck=0;
        console.log("unsolved   "+words);
        found.innerText=answer;
        console.log("solved     "+answer);
      }
     else{
        calck++;
        if (calck>110)
        {key=''; 
       buff=[]; 
        calck=0;}
      }
      var complitionCheck=0;
  words.forEach(element => { if (element!='$'){complitionCheck=1;
  console.log(complitionCheck);
  }
  });
      if (complitionCheck==0)
      {
    keyword.innerText= "You won!!!!!!!!!!!!!!";
      }
  else
  {keyword.innerText = words.join(", ");}
    })
  });
 
}


function SwordGameCreate(){

//////////////////////////////////////////////////////////////////////////////////

console.log("      =============SwordGameCreates=========   ");
    
  //function onClick(e) {
 
   

    const keyword = document.getElementById("words");
 const container = document.getElementById("container");
   const found = document.getElementById("found");
   var key = "";
   var answer = [];
   var calck=0;
  var buff=[];
   var start;
   var step=0;
   var Keywords=[];
  
  var arr;
  var words;
  
   
   
  
  
 
   
    
   

  let gide=document.createElement("lable");
  let txt= document.createElement("input");
 let btn = document.createElement("button");
 let play = document.createElement("button");
 btn.innerHTML = "add word";
 play.innerText="generate game";

 gide.innerHTML="</br><p>Type word click (add word) after you have some words click (generate game) to play</p></br>";

 keyword.appendChild(gide);
 keyword.appendChild(txt);
 keyword.appendChild(btn);
 keyword.appendChild(play);
 
  
   btn.addEventListener("click", function()
   {
    Keywords.push(txt.value);
    txt.value = "";

    console.log(Keywords);
  });

  
  
   /*

<p id="demo"></p>
>>>>>>> 91c6193c59056ee7b2777241d9c60c3edc0d4383

 btn.addEventListener("click", function()
 {
  Keywords.push(txt.value);
txt.value='';

  console.log(Keywords);
});

 /*/
 
 
play.addEventListener("click", function(){
   SetupGame();
  
});
  
    function SetupGame(){
      console.log(">>>>>>>>>>>>>>>>>>>");
      const newSword= {
        UserId: cookie.getCookie("userId"),
      }
      
  

   var x=GenerateWordSearch(Keywords);
   arr=x[0];
   words=x[1];
    makeRows(10, 10);
    }




  function makeRows(rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
   let row = 0;
    let col = 0;
   for (var c = 0; c < (rows * cols); c++) {
     if(col > 9){
        col = 0;
        row++;
       }
      let cell = document.createElement("div");
        cell.innerText = arr[c];
      cell.value=c;
      buff.forEach( (number)=>{  
       if(cell.value==number)
  {    
  cell.style.color="green";
        }
          }     );
       container.appendChild(cell).className = "grid-item";
      keyword.innerText = words.join(", ");
      col++;
    };
  };
  
  container.addEventListener("click", function (e) {
    console.log(e.target.outerText + " ==========  " + e.button);
   if ( key.length<2)
   {
    if (key=='')
   { start=e.target.value;
    buff.push(e.target.value);
    key += e.target.outerText;
  }
    else
    {
  step=start-e.target.value;
  key += e.target.outerText;
  buff.push(e.target.value);
  console.log("step--------->"+step);
    }
   }
    else
    {
    if(arr[e.target.value+step]==key[key.length-1])
    {
      console.log("true   "+key+"   "+arr[e.target.value-step]+"    "+key[key.length-1])
      key += e.target.outerText;
    buff.push(e.target.value);
  console.log("*******"+buff);
  }
    else
   {
    console.log("else      "+key+"   "+arr[e.target.value-step]+"    "+key[key.length-1])
    key=''; buff=[];
  }
    }
    console.log("----" + key + "--------"+calck+"----------"+e.target.value);
    //item, index, arr1
    words.forEach(function(item, index, arr1) {
      if (key === item) {
        console.log("you found word  ");
  ///////////////////////////////////
  container.innerHTML = "";
  makeRows(10,10);
    ////////////////////////////////////////
        words[index]='$';
       answer.push(key);
       key = '';
        calck=0;
        console.log("unsolved   "+words);
        found.innerText=answer;
        console.log("solved     "+answer);
      }
     else{
        calck++;
        if (calck>110)
        {key=''; 
       buff=[]; 
        calck=0;}
      }
      var complitionCheck=0;
  words.forEach(element => { if (element!='$'){complitionCheck=1;
  console.log(complitionCheck);
  }
  });
      if (complitionCheck==0)
      {
    keyword.innerText= "You won!!!!!!!!!!!!!!";
      }
  else
  {keyword.innerText = words.join(", ");}
    })
  });

//////////////////////////////////////////////////////////////////////
  function GenerateWordSearch(words){
    
    let dirs = ["WE","EW","NS","SN","NWSE","SENW"]
    let templateString = randomString(100,'abcdefghijklmnopqrstuvwxyz');
    let stringGrid = [];
    let answersInPuzzle = [];
    for(let i = 0; i < 100; i++){
        stringGrid.push({char: templateString[i], touched: false});
    }

    console.log(stringGrid);
    //console.log(templateString);

    words = words.filter(function(value){return value.length <= 10})
    words.forEach(element => {
        let elementExplode = element.split("");
        let x = 0
        let y = 0
        let toChange = [];
        let possible = true;
        let placed = false;
        let attempts = 0;
        while(!placed && attempts < 200){
            let dir = dirs[randomNumber(dirs.length)];
        switch(dir){
            case "WE":
                attempts++;
                x = randomNumber(10 - elementExplode.length + 1);    
                y = randomNumber(10);
                for(letter in elementExplode){
                    toChange.push(10*y + x + parseInt(letter))
                }
                //console.log(toChange);
                toChange.forEach(element => {
                    if(stringGrid[element].touched){
                        possible = false;
                    }
                });
                if(possible){
                    for(letter in elementExplode){
                        stringGrid[toChange[letter]].char = elementExplode[letter];
                        stringGrid[toChange[letter]].touched = true;
                        placed = true;
                    }
                }
                //console.log(stringGrid);
                break;
            case "EW":
                attempts++;
                x = randomNumber(10 - elementExplode.length + 1);    
                y = randomNumber(10);
                elementExplode = elementExplode.reverse();
                for(letter in elementExplode){
                    toChange.push(10*y + x + parseInt(letter))
                }
                //console.log(toChange);
                toChange.forEach(element => {
                    if(stringGrid[element].touched){
                        possible = false;
                    }
                });
                if(possible){
                    for(letter in elementExplode){
                        stringGrid[toChange[letter]].char = elementExplode[letter];
                        stringGrid[toChange[letter]].touched = true;
                        placed = true;
                    }
                }
                //console.log(stringGrid);
                break;
            case "NS":
                attempts++;
                y = randomNumber(10 - elementExplode.length + 1);    
                x = randomNumber(10);
                for(letter in elementExplode){
                    toChange.push(10*(y + parseInt(letter)) + x)
                }
                //console.log(toChange);
                toChange.forEach(element => {
                    if(stringGrid[element].touched){
                        possible = false;
                    }
                });
                if(possible){
                    for(letter in elementExplode){
                        stringGrid[toChange[letter]].char = elementExplode[letter];
                        stringGrid[toChange[letter]].touched = true;
                        placed = true;
                    }
                }
                //console.log(stringGrid);
                break;
            case "SN":
                attempts++;
                elementExplode = elementExplode.reverse();
                y = randomNumber(10 - elementExplode.length + 1);    
                x = randomNumber(10);
                for(letter in elementExplode){
                    toChange.push(10*(y + parseInt(letter)) + x)
                }
                //console.log(toChange);
                toChange.forEach(element => {
                    if(stringGrid[element].touched){
                        possible = false;
                    }
                });
                if(possible){
                    for(var letter in elementExplode){
                        stringGrid[toChange[letter]].char = elementExplode[letter];
                        stringGrid[toChange[letter]].touched = true;
                        placed = true;
                    }
                }
                //console.log(stringGrid);
                break;
            case "NWSE":
                attempts++;
                y = randomNumber(10 - elementExplode.length + 1);    
                x = randomNumber(10 - elementExplode.length + 1);
                for(letter in elementExplode){
                    toChange.push(10*(y + parseInt(letter)) + x + parseInt(letter))
                }
                //console.log(toChange);
                toChange.forEach(element => {
                    if(stringGrid[element].touched){
                        possible = false;
                    }
                });
                if(possible){
                    for(letter in elementExplode){
                        stringGrid[toChange[letter]].char = elementExplode[letter];
                        stringGrid[toChange[letter]].touched = true;
                        placed = true;
                    }
                }
                //console.log(stringGrid);
                break;
                case "SENW":
                attempts++;
                elementExplode = elementExplode.reverse();
                y = randomNumber(10 - elementExplode.length + 1);    
                x = randomNumber(10 - elementExplode.length + 1);
                for(letter in elementExplode){
                    toChange.push(10*(y + parseInt(letter)) + x + parseInt(letter))
                }
               
                toChange.forEach(element => {
                    if(stringGrid[element].touched){
                        possible = false;
                    }
                });
                if(possible){
                    for(letter in elementExplode){
                        stringGrid[toChange[letter]].char = elementExplode[letter];
                        stringGrid[toChange[letter]].touched = true;
                        placed = true;
                    }
                }
       
                break;
        }
    }
    if(placed){
        answersInPuzzle.push(element);
    }

    });
    let toReturn = "";
    stringGrid.forEach(element => {
        toReturn += element.char;
    });
    return [toReturn, answersInPuzzle];
}

function randomNumber(max){
    return Math.floor(Math.random()*max);
}

function randomString(length, chars) {
    var result = '';
    for (var i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
    return result;
}


  
}
