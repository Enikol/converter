/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  
  this.getNum = function(input) {
    var index = input.search(/[a-z]/i);
    var num = input.slice(0, index);
    if (num === ''){
      return 1;
    }

    var bits = num.split("/");
    
    if (bits.length === 1) {
        return bits[0]
      } else if (bits.length === 2){
      return parseFloat(bits[0],10)/parseFloat(bits[1],10);
      } else return 'invalid number';
  
  };
  
  this.getUnit = function(input) {

    var units = ['gal','l','mi','km','lbs','kg'];
    var inputUnit = input.slice(input.match(/[a-z]/i).index);
    if (units.indexOf(inputUnit.toLowerCase()) !== -1) {
      return inputUnit;
    } else {
      return 'invalid unit';
    }

  };
  
  this.getReturnUnit = function(initUnit) {
    switch(initUnit){
      case 'gal':
        return 'L';
      case 'L':
        return 'gal';
      case 'lbs':
       return 'kg';
      case 'kg':
         return 'lbs';
      case 'mi':
        return 'km';
      case 'km':
        return 'mi';
      default:
        return 'invalid unit';
        
                   }
  };

  this.spellOutUnit = function(unit) {
    
      switch(unit){
      case 'gal':
        return 'gallons';
      case 'L':
        return 'liters';
      case 'lbs':
       return 'pounds';
      case 'kg':
         return 'kilograms';
      case 'mi':
        return 'miles';
      case 'km':
        return 'kilometers';
                     }
    
    
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    var num;
    switch(initUnit){
      case 'gal':
        num = initNum*galToL;
        break;
      case 'L':
        num = initNum/galToL;
        break;
      case 'lbs':
       num = initNum*lbsToKg;
        break;
      case 'kg':
        num = initNum/lbsToKg;
        break;
      case 'mi':
        num = initNum*miToKm;
        break;
      case 'km':
        num = initNum/miToKm;
        break;
                   }
    return num;
    
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    
    return `${initNum} ${this.spellOutUnit(initUnit)} converts to ${returnNum.toFixed(5)} ${this.spellOutUnit(returnUnit)}`
  };
  
}

module.exports = ConvertHandler;
