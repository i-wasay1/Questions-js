let lastword = function(s) {
  // let x=s.trim()
  let len=s.length
  let i=len-1
  while (i >= 0 && s[i] !== ' ') 
  i--
  return len - 1 - i;
}
let s= "Hello world"
k=lastword(s)
console.log(k)