// This function clear all the values
const a=document.getElementById("result");
function clearScreen() {
        a.value = "";
    }
     
    // This function display values
    function display(value) {
        a.value += value;
    }
     
    // This function evaluates the expression and returns result
    function calculate() {
        var p = a.value;
        var q = eval(p);
        a.value = q;
    }    
    function deleteData(){
        a.value =a.value.substr(0,a.value.length-1);
    }
