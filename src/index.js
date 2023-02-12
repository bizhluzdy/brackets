module.exports = function check(str, bracketsConfig) {
  var open = []; for (i=0; i< bracketsConfig.length; i++){open += (bracketsConfig[i])[0]};
  var closed = []; for (i=0; i< bracketsConfig.length; i++){closed += (bracketsConfig[i])[1]};
  var stack = [];
  console.log(str)
    for (i=0; i < str.length; i++){
      if((open.includes(str[i]) && closed.includes(str[i])) && stack.includes(str[i])){
        stack.pop()
      }
      else if (stack.length == 0 && closed.includes(str[i]) && !open.includes(str[i])){
        return false
      }
      else if (open.includes(str[i])){
        stack.push(str[i])
      }
      else if (closed.includes(str[i]) && !open.includes(str[i])){
        if((str[i] == ')' && stack[stack.length -1] == '(') || (str[i] == ']' && stack[stack.length -1] == '[') || (str[i] == '}' && stack[stack.length -1] == '{') || (str[i] == '2' && stack[stack.length -1] == '1') || (str[i] == '4' && stack[stack.length -1] == '3') || (str[i] == '6' && stack[stack.length -1] == '5')){
        stack.pop()
        }
      }
    }
    console.log(stack.length)
    console.log(stack)
  return (stack.length) == 0
}

