export default {
    displaySword,
    SwordFunctions
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


 function SwordFunctions()
 {   
    console.log("      =============SwordFunctions==================   ");
    
       var x=0;

    function onClick(e) {
   
    if (x==0)
    {x=1; 
      SetupGame(0);
    
    }
    
    }
    window.addEventListener("click", onClick);
    
    
    function SetupGame(x){
      console.log(">>>>>>>>>>>>>>>>>>>");
        getRequest(`https://localhost:44308/api/Wordsearch`, woogy => {
        
         
          console.log(woogy[x].matrix);
    
    arr=(woogy[x].matrix).split(', ');
    words=  (woogy[x].keywords).split(', ');
    makeRows(woogy[x].height, woogy[0].width);
    
    }); }
    
    
    
    
    
    //var x2 = "J, Q, V, N, R, G, N, T, U, I, V, L, A, O, S, A, X, P, S, C, W, P, R, I, D, M, E, I, I, T, K, P, I, T, I, E, T, R, H, K, Z, U, A, C, K, S, G, C, X, T, X, T, B, N, F, Z, Y, S, G, J, O, D, L, U, Y, U, H, A, H, N, A, F, E, F, C, A, N, V, A, S, E, D, O, C, R, P, L, A, Y, A, F, X, E, E, V, C, P, J, H, B";
    //var Keywords2= "CANVAS, CODE, FUN, FUNCTION, GAMES, JAVASCRIPT, KIDS, PLAY, SHARE, VARIABLE" ;                
    
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
        
       let rowInput = document.createElement("input");
      let columnInput = document.createElement("input");
      rowInput.type = "hidden";
      columnInput.type = "hidden";
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
       
        cell.appendChild(rowInput);
        cell.appendChild(columnInput);
    
        
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
          {key=''; buff=[]; calck=0;}
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
    
    
    function getRequest(location, callback) {
      fetch(location)
        .then(response => response.json())
        .then(data => {
            console.log(data);
          callback(data);
        })
        .catch(err => console.log(err));}
    




 }

//     var x=0;

//     function onClick(e) {
//       if (e.which === 1 || e.button === 0) {
//         console.log('Left mouse button at ' + e.clientX + 'x' + e.clientY);
//       }
//       if (e.which === 2 || e.button === 1) {
//         console.log('Middle mouse button at ' + e.clientX + 'x' + e.clientY);
//         key=''; calck=0;
      
//       }
//       if (e.which === 3 || e.button === 2) {
//         console.log('Right mouse button at ' + e.clientX + 'x' + e.clientY);
//         key=''; calck=0;
//       }
//       if (e.which === 4 || e.button === 3) {
//         console.log('Backward mouse button at ' + e.clientX + 'x' + e.clientY);
//       }
//       if (e.which === 5 || e.button === 4) {
//         console.log('Forward mouse button at ' + e.clientX + 'x' + e.clientY);
//       }
//     if (x==0)
//     {x=1; ;
//       SetupGame(0);
    
//     }
    
//     }
//     window.addEventListener("mousedown", onClick);
    
    
//     function SetupGame(x){
//       console.log(">>>>>>>>>>>>>>>>>>>");
//      getRequest(`https://localhost:44308/api/Wordsearch`, woogy => {
        
         
//           console.log(woogy[x].matrix);
    
//     arr=(woogy[x].matrix).split(', ');
//     words=  (woogy[x].keywords).split(', ');
//     makeRows(woogy[x].height, woogy[0].width);
    
//     }); 
  
  
  
 
 
//      makeRows(10, 10);
 
  
  
//   }
    
    
    
    
    
//    // var x2 = "J, Q, V, N, R, G, N, T, U, I, V, L, A, O, S, A, X, P, S, C, W, P, R, I, D, M, E, I, I, T, K, P, I, T, I, E, T, R, H, K, Z, U, A, C, K, S, G, C, X, T, X, T, B, N, F, Z, Y, S, G, J, O, D, L, U, Y, U, H, A, H, N, A, F, E, F, C, A, N, V, A, S, E, D, O, C, R, P, L, A, Y, A, F, X, E, E, V, C, P, J, H, B";
//    // var Keywords2= "CANVAS, CODE, FUN, FUNCTION, GAMES, JAVASCRIPT, KIDS, PLAY, SHARE, VARIABLE" ;                
    
//     let arr;// = x2.split(', '); 
//     let words;// = Keywords2.split(', ');
    
//     var x=0;
//     const keyword = document.getElementById("words");
//     const container = document.getElementById("container");
//     const found = document.getElementById("found");
//     var key = "";
//     var ansver = [];
//     var calck=0;
//     var buff=[];
//     var start;
//     var step=0;
//     var colorText='';
    
//     function makeRows(rows, cols) {
     
    
//       container.style.setProperty('--grid-rows', rows);
//       container.style.setProperty('--grid-cols', cols);
//       let row = 0;
//       let col = 0;
//       for (let c = 0; c < (rows * cols); c++) {
//         if(col > 9){
//           col = 0;
//           row++;
//         }
//         let cell = document.createElement("div");
    
//    let rowInput = document.createElement("input");
//   let columnInput = document.createElement("input");
//   rowInput.type = "hidden";
//   columnInput.type = "hidden";
//   //  rowInput.value = row;
//   //  columnInput.value = col;

//   //  rowInput.name = "yValue";
//   //  columnInput.name = "xValue";

//     cell.innerText = arr[c];
//     cell.value=c;
     
   
   
//     buff.forEach( (number)=>{   
      
//      //  colorTextcolor=randomColor();
//     // console.log(colorTextcolor);
    

//      if(cell.value==number)
// {     
 
// cell.style.color=colorTextcolor;

//       }
//         }     );
   
//     cell.appendChild(rowInput);
//     cell.appendChild(columnInput);

    
//     container.appendChild(cell).className = "grid-item";
//     keyword.innerText = words.join(", ");
//     col++;

//       };
    
    
//     };
    
    
// container.addEventListener("click", function (e) {
  
//   console.log(e.target.outerText + " ==========  " + e.button);

//   //e.target.style.color = "blue";

 
//  if ( key.length<2)
//  {
//   if (key=='')
//  { start=e.target.value;
//   buff.push(e.target.value);
//   key += e.target.outerText;
 
// }

//   else
//   {
// step=start-e.target.value;
// key += e.target.outerText;
// buff.push(e.target.value);

// console.log("step--------->"+step);
//   }

//  }
//   else
//   {
//   if(arr[e.target.value+step]==key[key.length-1])
//   {
//     console.log("true   "+key+"   "+arr[e.target.value-step]+"    "+key[key.length-1])
   
//     key += e.target.outerText;
//   buff.push(e.target.value);
// console.log("*******"+buff);

// }
//   else
//  {
//   console.log("else      "+key+"   "+arr[e.target.value-step]+"    "+key[key.length-1])
//   key=''; buff=[];


// }
//   }
  
  
  
  
//   console.log("----" + key + "--------"+calck+"----------"+e.target.value);
  
//   //item, index, arr1
//   words.forEach(function(item, index, arr1) {

//     if (key === item) {
//       console.log("you found word  ");
// ///////////////////////////////////
// container.innerHTML = "";

// colorTextcolor="pink";

// makeRows(10,10);
   
//   //////////////////////////////////////// 
//       words[index]='$';

    
   
//      ansver.push(key);
//      key = '';
//       calck=0;
//       console.log("unsolved   "+words);
//       found.innerText=ansver;
//       console.log("solved     "+ansver);
     
//     }
     
//     else{
//       calck++; 
//       if (calck>110) 
//       {key=''; buff=[]; calck=0;}
//     }
   

//     var complitionCheck=0;

// words.forEach(element => { if (element!='$'){complitionCheck=1;
// console.log(complitionCheck);
// }
  
// });

//     if (complitionCheck==0)
//     {
  
//   keyword.innerText= "You won!!!!!!!!!!!!!!";
//     }
// else
// {keyword.innerText = words.join(", ");}

    
//   })



// });

    
    
//     function getRequest(location, callback) {
//       fetch(location)
//         .then(response => response.json())
//         .then(data => {
//             console.log(data);
//           callback(data);
//         })
//         .catch(err => console.log(err));}
    
// }