//lower case
var personname = "Zarmain";
console.log("lowercase:", personname.toLowerCase());
//upper case
console.log("uppercase:", personname.toLocaleUpperCase());
//tittle case
console.log("titlecase:", personname.replace(/\bw/g, function (c) { return c.toUpperCase(); }));
