// Function that display value 
 function dis(val) { 
    document.getElementById("result").value += val 
} 

function myFunction(event) { 
    if (event.key == '0' || event.key == '1' 
        || event.key == '2' || event.key == '3' 
        || event.key == '4' || event.key == '5' 
        || event.key == '6' || event.key == '7' 
        || event.key == '8' || event.key == '9' 
        || event.key == '+' || event.key == '-' 
        || event.key == '*' || event.key == '/') 
        document.getElementById("result").value += event.key; 
} 

var cal = document.getElementById("calcu"); 
cal.onkeyup = function (event) { 
    if (event.keyCode === 13) { 
        console.log("enter"); 
        let x = document.getElementById("result").value 
        console.log(x); 
        answer(); 
    } 
} 
 
function answer() {
    let equation = document.getElementById("result").value 
    let result = eval(equation)
    document.getElementById("result").value = result
}

function clr() { 
    let blank = ""
    document.getElementById("result").value = blank 
} 

function change(){
    let css = document.getElementById('css');
    let cha = document.getElementById('change')
    if (css.getAttribute('href') == "calculator2.css") {
        css.setAttribute('href', 'calculator.css')
        cha.setAttribute('value', 'Light')
    }
        else {
            css.setAttribute('href', 'calculator2.css')
            cha.setAttribute('value', 'Dark')
        }
}