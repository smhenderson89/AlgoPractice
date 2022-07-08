// string replace example

s = "A*b$C#"
sLower = s.toLowerCase();
clean = sLower.replace(/[^0-9a-z]/gi,'')
console.log(clean);