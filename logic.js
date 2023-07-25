    screenvalue = "";
let screen =  document.getElementById('screen');
buttons = document.querySelectorAll('input.button');

for (items of buttons) {
    items.addEventListener('click' , (e)=>{
        buttontext = e.target.value;
        if(buttontext == "Clear"){
            screenvalue = "";
            screen.value = screenvalue;
        }
        else if( buttontext == "="){
            screenvalue = eval(screenvalue);
            screen.value = screenvalue;

         }

         else{
            screenvalue += buttontext;
            screen.value = screenvalue;
         }
    
    })
}



