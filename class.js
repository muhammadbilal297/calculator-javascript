let display = document.getElementById("display")
function button(value){
    display.value += value;
}

function cleardisplay(){
    display.value = "";
}
function button(value){
    if(display.value === "0"){     
        display.value = value;       
    } else {
        display.value += value;     
    }
}


    function calculate(){
      try {
        let answar = eval(display.value);   
        display.value = answar;  
        a = "";                   
      } catch {
        display.value = "Error"; 
      }
    }