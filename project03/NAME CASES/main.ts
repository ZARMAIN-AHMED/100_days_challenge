//lower case

let personname: string = "Zarmain"
console.log("lowercase:",personname.toLowerCase());

//upper case

console.log("uppercase:",personname.toLocaleUpperCase());

//tittle case

console.log("titlecase:",personname.replace(/\bw/g,c => c.toUpperCase()));