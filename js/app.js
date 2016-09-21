function FirstFunction(a, b, DoSecond) {
  var c = a + b;
  alert('The FIRST function provides the sum: ' + c.toString());
    
  DoSecond(a, b, ThirdFunction);
};

function SecondFunction(a, b, DoThird) {
  var c = a - b;
  alert('The SECOND function provides the difference: ' + c.toString());

  DoThird(a, b);
};

function ThirdFunction(a, b) {
  var c = a * b;
  alert('The THIRD function provides the product: ' + c.toString());
}; 
