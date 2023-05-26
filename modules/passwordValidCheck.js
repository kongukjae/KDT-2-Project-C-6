
let a="ab1"

function check(password){
var hasUpperCase = /[A-Z]/.test(password);
var hasLowerCase = /[a-z]/.test(password);
var hasNumber = /[0-9]/.test(password);

// 모든 요구 사항을 충족하는지 반환
return hasUpperCase && hasLowerCase && hasNumber;
}

console.log(check(a))