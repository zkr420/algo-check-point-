let s = "hello world my name is zakaria .";

document.write(s) ;


// -------------------------length of string-------------// 
let l =" <br/>the length is : ";
document.write(l + (s.length));  
//--------------------------nomber of words--------------//
let counter = 0;
    for (let i =0; i < s.length; i++)  {
        if (s.charAt(i) == ' '){
            counter++;
        }
        
    }         
    console.log(counter);  
let word = "<br/> Nomber of words is :  "
    document.write(word + counter)  
//--------------------------vowelscount----------------------//
function vowelscount  (str) {
    var count = 0 ;
    var vowels = "aeoiuAEOIU"
    
    for(var i = 0; i < s.length; i++){
        if (vowels.indexOf(str[i]) > -1 ){
            count++;

        }
         
         
        }
        console.log (count)
         document.write("<br/>Number of vowels in this sentence is :" + count)
        }
    
    
  
   vowelscount("hello world my name is zakaria .");
  