console.log ("I am ready!");

// Iteration 1: Names and Input
let hacker1 = "Alonso";
console.log ("The driver´s name is " + hacker1);

let hacker2 = "Lewis";
console.log ("The navigator´s name is " + hacker2);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log ("The driver has the longest name, it has " + hacker1.length + " characters");
}

else if ( hacker1.length < hacker2.length) {
    console.log ("It seems that the navigator has the longest name, it has " + hacker2.length + " characters");
}

else {
    console.log ("Wow, you both have equally long names, " + hacker1.length + " characters!");
}

// Iteration 3: Loops

for (i=0; i<hacker1.length; i++) {
    let char1=hacker1[i].toUpperCase () + " ";  
    console.log (char1); 
}

for (i=hacker2.length-1; i>=0; i--) {
    console.log (hacker2[i]);
}



for (i="a"; i<"z"; i++) {
    if (hacker1[0]<hacker2[0]) {
        console.log ("The driver's name goes first.");
    } else if (hacker1[0]>hacker2[0]) {
        console.log ("Yo, the navigator goes first definitely.");
    } else {
        console.log ("What?! You both have the same name?");
    }
}