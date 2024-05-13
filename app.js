// Q1.Declare an empty array using JS literal notation to store
// student names in future.

let stdNames = [];

// Q2.Declare an empty array using JS object notation to store
// student names in future.

// let names = stdNames ();

// Q3.Declare and initialize a strings array.

// let stringArr = ["string"];

// Q4.Declare and initialize a numbers array.

// let numArr = [50];

// Q5.Declare and initialize a boolean array.

// let boolArr = [true];

// Q6.Declare and initialize a mixed array.

// let mixedArr = ["string" , 50 , true , undefined , null];

// Q7.Declare and Initialize an array and store available
// education qualifications in Pakistan (e.g. SSC, HSC, BCS,
// BS, BCOM, MS, M. Phil., PhD). Show the listed
// qualifications in your browser

let edu = ["SSC" , "HSC" , "BCS" , "BS" , "B.COM" , "MS" , "M.Phil" , "PhD"];
document.write(`<h1>Q7. Qualifications</h1> ${edu[0]} <br> ${edu[1]} <br> ${edu[2]} <br> ${edu[3]} <br> ${edu[4]} <br> ${edu[5]} <br> ${edu[6]} <br> ${edu[7]} <br>`);

// Q8.Write a program to store 3 student names in an array.Take
// another array to store score of these three students.
// Assume that total marks are 500 for each student, display
// the scores & percentages of students like:
document.write("<br> Q8. <br>");

stdNames  = ["Asif", "Faizan" , "Musab"];
let scores = [320 , 230 , 480];

for (var i = 0;   i < 3; i++){
    document.write(` Score of ${stdNames[i]} is ${scores[i]}. Percentage : ${scores[i] * 100 / 500} % <br>` );
}

// Q9.
let colorNames = ["Orange", "Pink" , "Yellow" , "Blue" , "White"];
document.write("<br> Q9. Color Names <br>" + colorNames + "<br><br>");
//A
let addStart = prompt("Q9. (A) Enter Your Color Name" , "Purple")
colorNames.unshift(addStart);
document.write("A. After addition Start <br>" + colorNames);
//B
let addEnd = prompt("Q9. (B) Enter Your Color Name" , "Red")
colorNames.push(addEnd);
document.write("<br><br> B. After addition End <br>" + colorNames);
//C
colorNames.unshift("Green");
colorNames.unshift("Gray");
document.write("<br><br> C. Two More Addition <br>" + colorNames);
// D
colorNames.shift();
document.write("<br><br> D. Delete first color <br>" + colorNames);
//E
colorNames.pop();
document.write("<br><br> E. Delete last color <br>" + colorNames);
//F
let indexNum = +prompt("Q9, F - Enter your index number" , 3);
let UserCol =  prompt("Q9, F - Enter your Color" , "SkyBlue");
colorNames.splice(indexNum, 0, UserCol);
document.write("<br><br> F. Add color index wise  <br>" + colorNames);
// G
let remNum  = +prompt("Q9. G Enter your index number remove  which index" , 3);
let howCol  = +prompt("Q9. G How Color " , 2 );
colorNames.splice(remNum, howCol);
document.write("<br><br> G. remove and add  <br>" + colorNames);

// Q.10
let scoreStu = [320 , 230  , 480 , 120];
document.write("<br><br>Q10. <br>Scores Of Students : " + scoreStu); 
scoreStu.sort();
document.write("<br>Ordered Scores Of Students : " + scoreStu); 

// Q 11
let citiesList = ["Karachi" , "Lahore" , "Islamabad" , "Quetta" , "Peshawar"];
document.write("<br><br>Q11. <br>Cities Lists <br>  " + citiesList);
let selCities = citiesList.slice(2 , 4);
document.write("<br>Selected Cities <br> " + selCities);

//Q12
let arr = ["This" , "is" , "my" , "cat"];
document.write("<br><br>Q12. <br>Array : <br>  " + arr);
let stringArr = arr.join(" ");
document.write("<br>String : <br>  " + stringArr);

// Q13
let devices = [];
devices.push("Keyboard");
devices.push("Mouse");
devices.push("Printor");
devices.push("Monitor");
document.write("<br><br> Q13  Devices <br> " + devices);

document.write("<br><br> OUT <br> " + devices.shift());
document.write("<br><br> OUT <br> " + devices.shift());
document.write("<br><br> OUT <br> " + devices.shift());
document.write("<br><br> OUT <br> " + devices.shift());

// Q14
let devArr = [];
devArr.push("Keyboard");
devArr.push("Mouse");
devArr.push("Printor");
devArr.push("Monitor");
document.write("<br><br> Q14  Devices <br> " + devArr);

document.write("<br><br> OUT <br> " + devArr.pop());
document.write("<br><br> OUT <br> " + devArr.pop());
document.write("<br><br> OUT <br> " + devArr.pop());
document.write("<br><br> OUT <br> " + devArr.pop() + "<br>");


// Q15
let manufactures = ["Apple" , "Samsung" , "Motorolla" , "Nokia" , "Sony" , "Haier"];
document.write("<br> Q15 : Phone Manufactures <br><br>" + `<select>`);
document.write(`<option>` + manufactures[0] + `</option>`);
document.write(`<option>` + manufactures[1] + `</option>`);
document.write(`<option>` + manufactures[2] + `</option>`);
document.write(`<option>` + manufactures[3] + `</option>`);
document.write(`<option>` + manufactures[4] + `</option>`);
document.write(`<option>` + manufactures[5] + `</option>`);
document.write(`</select>`);

















