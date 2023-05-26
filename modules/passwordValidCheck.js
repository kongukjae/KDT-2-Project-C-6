/**
 * 
 * @params 비빌번호 유효성 검사
 * @params return 값은 소문자, 특수문자, 숫자, 특수문자 입력시 true, 
 * @params 그렇지 않으면 false 
 *   */ 

function passwordValidCheck(password){
if(password.length<13){

let hasUpperCase = /[A-Z]/.test(password);
let hasLowerCase = /[a-z]/.test(password);
let hasNumber = /[0-9]/.test(password);
let hasSpecialChar = /[!@#$%^&*]/.test(password)

// 모든 요구 사항을 충족하는지 반환
return hasUpperCase && hasLowerCase && hasNumber && hasSpecialChar;
}
else{
    return false
}
}
export default passwordValidCheck