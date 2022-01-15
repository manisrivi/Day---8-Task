var request = new XMLHttpRequest();
request.open("GET" , "https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
request.send();
request.onload = function(){
    var data = JSON.parse(request.response);

// Print the country which uses US Dollars as currency.
/*   var result = data.filter((x)=>{
       for(let i in x.currencies){
           if(x.currencies[i].code == "USD"){
               return true
           }
       }
   })
console.log(result); */





//  Print the total population of countries using reduce function
/*var sum = data.reduce((acc, curr)=> acc + curr.population, 0)
console.log(sum);*/






//  Print the following details name, capital, flag using for Each function
/*var data1 = data.forEach((x) => console.log(x.name));
var data2 = data.forEach((x) => console.log(x.capital));
var data3 = data.forEach((x) => console.log(x.flag));
console.log(data1);*/







//  Get all the countries with a population of less than 2 lakhs using Filter function
/*var results = data.filter((x) => x.population < 200000)*/






//  Get all the countries from Asia continent /region using Filter function
/*var results = data.filter((x)=> x.region == "Asia")*/

     


};
request.onload()