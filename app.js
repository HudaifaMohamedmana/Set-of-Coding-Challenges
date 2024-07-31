//-------------------find the largest number--------------------
function findLargest(a,b,c) {
    let largestNumber = Math.max(a,b,c);   
    return largestNumber
}
console.log(findLargest(5,10,3));
console.log(findLargest(8,2,6));
//--------------------------reverse words-------------------------------
function reverseWords(sentense) {
    sentense = sentense.split(' ');
    sentense = sentense.reverse();
    sentense = sentense.join(' ');
  return sentense;
};

console.log(reverseWords("Hello world!"));
console.log(reverseWords("the quick brown fox"));
console.log(reverseWords("javaScript is fun"));

//---------------find the longest word in array-----------------
function findLongestWord(words) {
    let longest="";

    for (const word of words) {
    if (word.length > longest.length) {
        longest = word;
    }   
}
    return longest
}

console.log(findLongestWord(['apple','banana','cherry','date']));
console.log(findLongestWord(['dog','elephant','cat']));
console.log(findLongestWord(['red','blue','green']));
//--------------count occurrences of words in a sentence------------
function countWords(sentence) {
    let words = sentence.split(' ');
    let wordCount = {};
    
    for (const word of words) {
        if (wordCount[word]) {
            wordCount[word]++;
        } else {
            wordCount[word] = 1;
        }
    }
    
    return wordCount;
}

console.log(countWords("hello world hello"));//{hello:2 world:1}
console.log(countWords("this is a a test this is a test"));//{this:2 is:2 a:2 test:2}





