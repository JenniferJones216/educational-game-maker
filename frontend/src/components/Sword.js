import apiActions from "../api/api-actions";



export default {
  displaySword,
  SwordFunctions,
  SwordGameCreate
}



















function displaySword()
{ console.log("      =============displaySword==================   ");
  
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
    
  //function onClick(e) {
 
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
     apiActions.getRequest(`https://localhost:44308/api/Wordsearch`, woogy => {
        console.log(woogy[x-1].matrix);
  arr=(woogy[x-1].matrix).split(', ');
  words=  (woogy[x-1].keywords).split(', ');
  makeRows(10, 10);
  });



}



  // //var x2 = "J, Q, V, N, R, G, N, T, U, I, V, L, A, O, S, A, X, P, S, C, W, P, R, I, D, M, E, I, I, T, K, P, I, T, I, E, T, R, H, K, Z, U, A, C, K, S, G, C, X, T, X, T, B, N, F, Z, Y, S, G, J, O, D, L, U, Y, U, H, A, H, N, A, F, E, F, C, A, N, V, A, S, E, D, O, C, R, P, L, A, Y, A, F, X, E, E, V, C, P, J, H, B";
  // //var Keywords2= "CANVAS, CODE, FUN, FUNCTION, GAMES, JAVASCRIPT, KIDS, PLAY, SHARE, VARIABLE" ;                
  // let arr;// = x2.split(', ');
  // let words; //= Keywords2.split(', ');
  // const keyword = document.getElementById("words");
  // const container = document.getElementById("container");
  // const found = document.getElementById("found");
  // var key = "";
  // var answer = [];
  // var calck=0;
  // var buff=[];
  // var start;
  // var step=0;





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
    //  let rowInput = document.createElement("input");
    // let columnInput = document.createElement("input");
    // rowInput.type = "hidden";
    // columnInput.type = "hidden";
    //  rowInput.value = row;
    //  columnInput.value = col;
    //  rowInput.name = "yValue";
    //  columnInput.name = "xValue";
      cell.innerText = arr[c];
      cell.value=c;
      buff.forEach( (number)=>{  
       //  colorTextcolor=randomColor();
      // console.log(colorTextcolor);
       if(cell.value==number)
  {    
  cell.style.color="green";
        }
          }     );
     // cell.appendChild(rowInput);
     // cell.appendChild(columnInput);
      container.appendChild(cell).className = "grid-item";
      keyword.innerText = words.join(", ");
      col++;
    };
  };
  
  container.addEventListener("click", function (e) {
    console.log(e.target.outerText + " ==========  " + e.button);
    //e.target.style.color = "blue";
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
  // function getRequest(location, callback) {
  //   fetch(location)
  //     .then(response => response.json())
  //     .then(data => {
  //         console.log(data);
  //       callback(data);
  //     })
  //     .catch(err => console.log(err));}


 // window.addEventListener("click", onClick);
}


function SwordGameCreate(){

//////////////////////////////////////////////////////////////////////////////////

console.log("      =============SwordGameCreates=========   ");
    
  //function onClick(e) {
 
   

  var x2 = "J, Q, V, N, R, G, N, T, U, I, V, L, A, O, S, A, X, P, S, C, W, P, R, I, D, M, E, I, I, T, K, P, I, T, I, E, T, R, H, K, Z, U, A, C, K, S, G, C, X, T, X, T, B, N, F, Z, Y, S, G, J, O, D, L, U, Y, U, H, A, H, N, A, F, E, F, C, A, N, V, A, S, E, D, O, C, R, P, L, A, Y, A, F, X, E, E, V, C, P, J, H, B";
  var Keywords2= "CANVAS, CODE, FUN, FUNCTION, GAMES, JAVASCRIPT, KIDS, PLAY, SHARE, VARIABLE" ;                
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


   SetupGame();
  
  
  
    function SetupGame(){
      console.log(">>>>>>>>>>>>>>>>>>>");
    
    var Keywords2= "CANVAS, CODE, FUN, FUNCTION, GAMES, JAVASCRIPT, KIDS, PLAY, SHARE, VARIABLE" ;                
    
   // words= Keywords2.split(', ');
    //makeRows2(10, 10);
    
   // GenerateWordSearch(words);
    arr=GenerateWordSearch(Keywords2.split(', '))[0];
   words=GenerateWordSearch(Keywords2.split(', '))[1];
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
    //  let rowInput = document.createElement("input");
    // let columnInput = document.createElement("input");
    // rowInput.type = "hidden";
    // columnInput.type = "hidden";
    //  rowInput.value = row;
    //  columnInput.value = col;
    //  rowInput.name = "yValue";
    //  columnInput.name = "xValue";
      cell.innerText = arr[c];
      cell.value=c;
      buff.forEach( (number)=>{  
       //  colorTextcolor=randomColor();
      // console.log(colorTextcolor);
       if(cell.value==number)
  {    
  cell.style.color="green";
        }
          }     );
     // cell.appendChild(rowInput);
     // cell.appendChild(columnInput);
      container.appendChild(cell).className = "grid-item";
      keyword.innerText = words.join(", ");
      col++;
    };
  };
  
  container.addEventListener("click", function (e) {
    console.log(e.target.outerText + " ==========  " + e.button);
    //e.target.style.color = "blue";
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
           /*
           
                case "NESW":
                attempts++;
                y = randomNumber(10 - elementExplode.length + 1)
                x = randomNumber(10 - elementExplode.length + 1)
                for(letter in elementExplode){
                    toChange.push(10*(y) + x + 9*parseInt(letter))
                }
                console.log(toChange);
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
                console.log(stringGrid);
                break;
            case "SWNE":
                attempts++;
                elementExplode = elementExplode.reverse();
                y = randomNumber(10 - elementExplode.length + 1);    
                x = randomNumber(10 - elementExplode.length + 1);
                for(letter in elementExplode){
                    toChange.push(10*(y) + x + 9*parseInt(letter))
                }
                console.log(toChange);
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
                console.log(stringGrid);
                break;
            
            */
                case "SENW":
                attempts++;
                elementExplode = elementExplode.reverse();
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
