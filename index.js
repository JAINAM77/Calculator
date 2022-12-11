console.log("hello1");
let displaystyle = document.getElementById('display');
let sidebar = document.getElementById('sidebar');
let backspace = document.getElementById('backspace');

sidebar.addEventListener('click', () => {
    sidebar.style.width = '50px';
    sidebar.style.borderRight = '10px solid black';
    backspace.style.display = 'block';

    setTimeout(() => {
        sidebar.style.width = '10px';
        sidebar.style.borderRight = 'none';
        backspace.style.display = 'none';
    }, 3000);
 
});
var ans11;
var lastAns=" ";
var firstAns=" ";

var plus = false;
var minus = false;
var divide = false;
var multi = false;
var reminder = false;
var index;
var ansofdisplay = false;
let store=" ";
let run1=false;
var helpingarray=[];
var helpingarray1=[];

var size2;
document.getElementById('container').addEventListener('click', (e) => {

    size2 = displaystyle.innerText.length-1;

    let id = e.target.id;
    
    if (id != 'numbers' && id != 'manu' && id != 'container') {

        if (ansofdisplay) {
            displaystyle.innerText = " ";
            ansofdisplay = false;
        }
        if (e.target.innerText == 'C') {
            displaystyle.innerText = " ";
            plus=false;
minus=false;
multi=false;
reminder=false;
divide=false;
helpingarray=[];
store="";
        }
        else if(size2<0 && (e.target.innerText=='+' || e.target.innerText=='-' || e.target.innerText=='x' || e.target.innerText=='%' || e.target.innerText=='/')){
            console.log("invalid");
        }
        else if (e.target.innerText == '+') {
          
            
         
    
            helpingarray.push(store.trim());
            helpingarray.push(e.target.innerText);

store=" ";
            if (displaystyle.innerText[size2] != '+' && displaystyle.innerText[size2] != '-' && displaystyle.innerText[size2] != 'x' && displaystyle.innerText[size2] != '/' && displaystyle.innerText[size2] != '%') {
           
                   
                
                    displaystyle.innerText += e.target.innerText;
                    plus = true;      
            }       
            else {
                displaystyle.innerText = displaystyle.innerText.replace(displaystyle.innerText[size2], '+');
                plus = true;
                minus = false;
                divide = false;
                multi = false;
                reminder = false;
            }

        }
    
        else if (e.target.innerText == "-"){
            
  
            helpingarray.push(store.trim());
            helpingarray.push(e.target.innerText);

store=" ";
            if (displaystyle.innerText[size2] != '+' && displaystyle.innerText[size2] != '-' && displaystyle.innerText[size2] != 'x' && displaystyle.innerText[size2] != '/' && displaystyle.innerText[size2] != '%') {
            
                displaystyle.innerText += e.target.innerText;
       
                minus = true;
            }
            else {
                displaystyle.innerText = displaystyle.innerText.replace(displaystyle.innerText[size2], '-');
                plus = false;
                minus = true;
                divide = false;
                multi = false;
                reminder = false;
            }

        
    }
        else if (e.target.innerText == 'x') {

            
      
            helpingarray.push(store.trim());
            helpingarray.push(e.target.innerText);

store=" ";
            if (displaystyle.innerText[size2] != '+' && displaystyle.innerText[size2] != '-' && displaystyle.innerText[size2] != 'x' && displaystyle.innerText[size2] != '/' && displaystyle.innerText[size2] != '%') {
               
                displaystyle.innerText += e.target.innerText;
             
                multi = true;
            }
            else {
                displaystyle.innerText = displaystyle.innerText.replace(displaystyle.innerText[size2], 'x');
                plus = false;
                minus = false;
                divide = false;
                multi = true;
                reminder = false;
            }

        }

        else if (e.target.innerText == '/') {

            

            helpingarray.push(store.trim());
            helpingarray.push(e.target.innerText);

store=" ";
            if (displaystyle.innerText[size2] != '+' && displaystyle.innerText[size2] != '-' && displaystyle.innerText[size2] != 'x' && displaystyle.innerText[size2] != '/' && displaystyle.innerText[size2] != '%') {

                displaystyle.innerText += e.target.innerText;
     
                divide = true;
            }
            else {
                displaystyle.innerText = displaystyle.innerText.replace(displaystyle.innerText[size2], '/');
                plus = false;
                minus = false;
                divide = true;
                multi = false;
                reminder = false;
            }


        }
        else if (e.target.innerText == '%') {
            
            
     
            helpingarray.push(store.trim());
            helpingarray.push(e.target.innerText);

store=" ";
            if (displaystyle.innerText[size2] != '+' && displaystyle.innerText[size2] != '-' && displaystyle.innerText[size2] != 'x' && displaystyle.innerText[size2] != '/' && displaystyle.innerText[size2] != '%') {
        
                displaystyle.innerText += e.target.innerText;
      
                reminder = true;
            }
     
            else {
                displaystyle.innerText = displaystyle.innerText.replace(displaystyle.innerText[size2], '%');
                plus = false;
                minus = false;
                divide = false;
                multi = false;
                reminder = true;
            }
        }
        else if (e.target.innerText=='='){
               
     
       

helpingarray.push(store.trim());

store=" ";
            ansofdisplay=true;
            ansReturn(e);
       
    }

        else {
store+=e.target.innerText;
            displaystyle.innerText += e.target.innerText;
        }
        
    }




});

function ansReturn(e) {
    
helpingarray.forEach((element,index) => {
    if(element=='x'){
        lastAns+='*';
    }else{
    lastAns+=element;}

});

lastAns=lastAns.trim();
lastAns=eval(lastAns);
displaystyle.innerText=" ";
displaystyle.innerText=lastAns;
lastAns=" ";
plus=false;
minus=false;
multi=false;
reminder=false;
divide=false;
helpingarray=[];
}

backspace.addEventListener('click', () => {
    backspace.style.border = '2px solid black';
    let size = (displaystyle.innerText.length) - 1;

    displaystyle.innerText = displaystyle.innerText.substring(0, size);
    setTimeout(() => {
        backspace.style.border = 'none';
    }, 100);
    let size3=store.length-1;
    store=store.substring(0,size3);
})


