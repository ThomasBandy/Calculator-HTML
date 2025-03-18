//Math
function answer() {
    let equation = document.getElementById("result").value 
    let result = eval(equation)
    document.getElementById("result").value = result
}
//Display Results
function dis(val) { 
    document.getElementById("result").value += val 
} 
//Clears Results
function clr() { 
    let blank = ""
    document.getElementById("result").value = blank 
} 
//Changes Themes
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