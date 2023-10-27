

function printresults(res)
{
    console.log("Results : ",res);
}
//Invoke or call calc() function]
//Pass the arguments() function as the parameter to 
//calc() function along with other 2 parameters

function calc(val1,val2,printresults)
{
    var result = val1+val2;
    printresults(result);
}
var IMANO=1234;
calc(10,20,printresults);
//module . exports: exports all the reusable finctions and reusable codes x

module.exports={cal:calc,printresults,IMANO}