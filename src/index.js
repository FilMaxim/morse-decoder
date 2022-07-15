function decode(expr) {
    // delete zero in start str
const deleteZero = (strZero) => {
    let resultStr = '';
   for (let i = 0; i < strZero.length; i++) {
     if (strZero[i] === '0') {
       resultStr = resultStr;
     } else {
       resultStr = strZero.slice(i)
       return resultStr;
     }
   }
 }
 // change strit to morze
 const changeStrToMorze = (str) => {
   const arrStr = str.match(/.{2}/g);
   const changeMorze = arrStr.map(ilem => {
     return ilem === "10" ? ilem = "." : ilem === "11" ? ilem = "-" : ilem = "*";
   })
   return changeMorze.join('');
 }
  const morze = {
     '.-':     'a',
     '-...':   'b',
     '-.-.':   'c',
     '-..':    'd',
     '.':      'e',
     '..-.':   'f',
     '--.':    'g',
     '....':   'h',
     '..':     'i',
     '.---':   'j',
     '-.-':    'k',
     '.-..':   'l',
     '--':     'm',
     '-.':     'n',
     '---':    'o',
     '.--.':   'p',
     '--.-':   'q',
     '.-.':    'r',
     '...':    's',
     '-':      't',
     '..-':    'u',
     '...-':   'v',
     '.--':    'w',
     '-..-':   'x',
     '-.--':   'y',
     '--..':   'z',
     '.----':  '1',
     '..---':  '2',
     '...--':  '3',
     '....-':  '4',
     '.....':  '5',
     '-....':  '6',
     '--...':  '7',
     '---..':  '8',
     '----.':  '9',
     '-----':  '0',
     '*****': ' '
   };

 let arr = expr.match(/.{10}/g);
 let newArr = arr.map(item => {
   return changeStrToMorze(deleteZero(item))
 })

 for (let i = 0; i < newArr.length; i++){
   for (let key in morze) {
     if (newArr[i] === key) {
       newArr[i] = morze[key]
     }
   }
 }
   return newArr.join('');
 }

module.exports = {
    decode
}