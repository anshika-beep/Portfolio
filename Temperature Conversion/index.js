const textbox = document.getElementById("textbox");
const toF = document.getElementById("toF");
const toC = document.getElementById("toC");
const result = document.getElementById("result");
let temp;

function convert(){

    if(toF.checked){
        temp = Number(textbox.value);
        temp = temp * 9/5 + 32;
        result.textContent = temp + "deg. F";
    }
    else if(toC.checked){
        temp = Number(textbox.value);
        temp = 5/9(temp - 32);
        result.textContent = temp + "deg. C";
    }
    else{
        result.textContent = "Select an unit";
    }

}