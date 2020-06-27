function getnumber(num){
    var result=document.getElementById("result");
    result.value+=num;
}
function clearResult(){

    var result=document.getElementById("result");
    result.value="";
}
function getResult(){
    var result=document.getElementById("result");
    result.value=eval(result.value);
}
function getbackspace(){
    var result=document.getElementById("result");
    result.value=result.substring(0,result.length -1);

}
function square(){
    var result=document.getElementById("result");
    result.value=result.value*result.value;
}
function tripl(){
    var result=document.getElementById("result");
    result.value=result.value*result.value*result.value;
}