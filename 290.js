let s = "dog dog dog dog";
let pat = "abba";

let words = s.split(" ");
if (words.length !== pat.length) {
    console.log("false");
    return;
}

let mapping = new Map();
let reverseMapping = new Set();

for (let i = 0; i < pat.length; i++) {
    if (mapping.has(pat[i])) {
        // If the mapping exists, check if it matches the expected word
        if (mapping.get(pat[i]) !== words[i]) {
            console.log("false");
            return;
        }
    } else {
        // If the word is already mapped to a different pattern, it's invalid
        if (reverseMapping.has(words[i])) {
            console.log("false");
            return;
        }
        
       console.log("here")
        mapping.set(pat[i], words[i]);
        console.log(mapping)
        reverseMapping.add(words[i]);
        console.log(reverseMapping)
    }
}

console.log(mapping)
console.log("true");

