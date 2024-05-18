let output = document.getElementById("calc-screen");
let clear = document.getElementById("clear");
function display(num){
    output.value +=num;
};
clear.onclick = function clear(){
    output.value = "";
};
function del(){
    output.value = output.value.slice(0,-1);
};
function calc(){
    try{
        output.value = eval(output.value);
    }
    catch(err){
        output.value = "error";
    }
}
