/*
 *
 *
 *       Complete the handler logic below
 *
 *
 */

function ConvertHandler() {
  this.getNum = function(input) {
    var regex = /\d*[.|/]\d*/gi;

    var resultNum = input.match(regex);
    resultNum = resultNum[0];
       console.log('result input', resultNum, 'end')
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
    var resultReturnUnit;
    if (initUnit == "mi") {
      resultReturnUnit = "km";
    } else if (initUnit == "km") {
      resultReturnUnit = "mi";
    } else if (initUnit == "L") {
      resultReturnUnit = "gal";
    } else if (initUnit == "gal") {
      resultReturnUnit = "L";
    } else if (initUnit == "kg") {
      resultReturnUnit = "lbs";
    } else if (initUnit == "lbs") {
      resultReturnUnit = "kg";
    }
   // console.log("resultReturnUnit", resultReturnUnit);
    return resultReturnUnit;
  };

  this.spellOutUnit = function(unit) {
    var resultSpellout;
    console.log("resultSpellout", unit);

    return resultSpellout;
  };

  this.convert = function(initNum, initUnit) {
    initNum = Number(initNum);  
 console.log('initNum,', initNum,)
    
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    var resultConvert;

    if (initUnit == "mi") {
      resultConvert = initNum * miToKm;
    } else if (initUnit == "km") {
      resultConvert = initNum / miToKm;
    } else if (initUnit == "L") {
      resultConvert = initNum / galToL;
    } else if (initUnit == "gal") {
      resultConvert = initNum * galToL;
    } else if (initUnit == "kg") {
      resultConvert = initNum * lbsToKg;
    } else if (initUnit == "lbs") {
      resultConvert = initNum * lbsToKg;
    }

    console.log(
      "initNum convert",
      initNum,
      "initUnit",
      initUnit,
      "converted",
      resultConvert
    );
    return resultConvert;
  };

  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var result;

    return result;
  };
}

module.exports = ConvertHandler;
