/*
 *
 *
 *       Complete the handler logic below
 *
 *
 */

function ConvertHandler() {
  this.getNum = function(input) {
    var regex = /\d*/;

    var resultNum = input.match(regex);
    resultNum = resultNum[0];
    //   console.log('result input', resultNum, 'end')
    return resultNum;
  };

  this.getUnit = function(input) {
    var regex = /[a-z]/gi;

    var resultUnit = input.match(regex);
    resultUnit = resultUnit.join("");
   // console.log("result input", resultUnit, "end");
    return resultUnit;
  };

  this.getReturnUnit = function(initUnit) {
    var resultInitUnit = initUnit ;
//console.log("initUnit", resultInitUnit)
    return resultInitUnit;
  };

  this.spellOutUnit = function(unit) {
    var resultSpellout;
    console.log("resultSpellout", unit)

    return resultSpellout;
  };

  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    var result;
console.log('initNum convert',initNum,"initUnit", initUnit)
    return result;
  };

  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var result;

    return result;
  };
}

module.exports = ConvertHandler;
