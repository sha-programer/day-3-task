let country = new XMLHttpRequest();
country.open("GET","https://restcountries.com/v3.1/all");
country.send();
country.onload=function(){
    let country1=country.response;
    let country2=JSON.parse(country1);
    for(var i=0;i<country2.length;i++){
        console.log("CountryName:"+" "+country2[i].name.common , "Region:"+" "+country2[i].region ,"SubRegion:"+" "+country2[i].subregion ,"Population:"+" "+country2[i].population)
    }
}