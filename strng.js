// let str = 'Hello'
// let slic = str.slice(1)
// str = 'j' + slic
// console.log(str)

// let  str = 'Widget with id';

// console.log(str.indexOf('id',2))

// let str = "   fly me   to   the moon  ";

// let s = str.trim();
// console.log(s.split(" "));
// let j = s.split(" ");
// console.log(j[j.length - 1].length);
function getObjectKey(obj, value) {
    return Object.keys(obj).find((key) => obj[key] === value);
  }
  
var isValid = function (s) {
  let mapObj = {
    "(": ")",
    "{": "}",
    "[": "]",
  };
  let stack = []
  for (let i = 0; i < s.length; i++) {
    if (s[i] in mapObj){
        stack.push(s[i])
    }else if ( s[i] === ")" || s[i] === "]" || s[i] === "}"){
        if( stack[stack.length - 1 ] === getObjectKey(mapObj, s[i]) ){
            stack.pop()
        }else{
            return false
        }
    }
  }
return stack.length === 0
  
};

console.log(isValid("[(())]"));

