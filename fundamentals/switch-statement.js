var keyNames = "WASDwasd";
var keyName = keyNames.charAt(Math.floor(Math.random() * keyNames.length));
console.log("keyName:", keyName);

console.log("keyName:", keyName); 
switch (keyName.toLowerCase()){
    case "a":
        console.log("move left"); //This block will execute when break; // keyName is a
       case "d":
        console.log("move right");//This block will execute when break; // keyName is d
       case "w":
        console.log("move up");//This block will execute when break; // keyName is w
       case "s":
        console.log("move down");//This block will execute when break; // keyName is s
        
      }