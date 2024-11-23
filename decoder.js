letter = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];


const reverse = (alpha)=>{
    rIndex = 25 - letter.indexOf(alpha)
    return letter[rIndex]
}
function reverseWord(word){
    wordOutput=""
    for (const element of word) {
       if(letter.includes(element)){
         wordOutput+=reverse(element)
       } 
       else wordOutput += element
        
    }
    return wordOutput;
}

console.log(reverseWord("I am decoding"))