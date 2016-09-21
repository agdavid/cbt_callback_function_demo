function FirstFunction(a, b, DoSecond) {
  var c = a + b;
  alert('The FIRST function provides the sum: ' + c.toString());
    
  DoSecond(a, b);
};

function SecondFunction(a, b) {
  var c = a - b;
  alert('The SECOND function provides the difference: ' + c.toString());
}; 
