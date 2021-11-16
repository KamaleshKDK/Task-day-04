//step:1 Creaate an XHR object
//request has to be used in whole program
var request = new XMLHttpRequest();
//step 2 : create a connection


//true:optional,
request.open('GET', 'https://restcountries.com/v3.1/all', true);
//step:3 send a request
//push for the API to send request to server
request.send();
//step 4: once data successfully received from server
//http:200
request.onload = function () {
    //conversion from string to array of JSON objects..
    var data = JSON.parse(request.response);
    // console.log(data);
    for (var i = 0; i < data.length; i++) {
        console.log("country flag :",data[i].flag);
    }
}