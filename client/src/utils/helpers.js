export function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  
  export function validateEmail(email) {
    var re = /^((\S[^@])*|\w+)(\w+|\-|\-\w+)*@((\w+(\-*\w){1})|\w+)+\.\w{2,}?$/;;
    return re.test(String(email).toLowerCase());
  }