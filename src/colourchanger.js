function ChangeColor(){
    var val = document.querySelector("input").value;
    var main = document.querySelector(".main_class");
    if(val==""||val==null||val==undefined){
        main.style.backgroundColor="white";
        document.querySelector("input").focus();
    }
    else{
        main.style.backgroundColor=val;
        document.querySelector("input").focus();
    }
}
window.onload=()=>{
    document.querySelector("input").focus();
}