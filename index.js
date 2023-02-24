const { spy } = require("chai");
const { returns } = require("chai-spies");

  function receivesAFunction(value) {
    return value();
}
  receivesAFunction(function () {return spy});

  
function returnsANamedFunction () {
    return function a () {}
};


  function returnsAnAnonymousFunction() {
    return function () {}
}