let flag = new XMLHttpRequest();
flag.open("GET","https://restcountries.com/v3.1/all");
flag.send();
flag.onload=function(){
    let flag1=flag.response;
    let flag2=JSON.parse(flag1);
    for(var i = 0;i<flag2.length;i++){
    console.log(flag2[i].flags.png);
    }
}