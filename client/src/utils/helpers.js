export function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  
  export function validateEmail(email) {
    var re = /^((\S[^@])*|\w+)(\w+|\-|\-\w+)*@((\w+(\-*\w){1})|\w+)+\.\w{2,}?$/;
    return re.test(String(email).toLowerCase());
  }

export function convertToDecimal(money){
  money = money.toString();
  const decimal = `${money.slice(0, money.length - 2)}.${money.slice(money.length - 2)}`;
  return decimal;
}