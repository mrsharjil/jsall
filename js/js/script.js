//show text
function showText(){
    document.getElementById('st').innerHTML=Date();

}
//show date

function showDate(){
    document.getElementById('sd').innerHTML=Date();
}

// example 1
// JavaScript Variables
let x1 = 5; 
let y1 = 7;
let z1 = x1 + y1;
function letVariable(){
    document.getElementById('let_variable').innerHTML = "The Value of z1: " + z1;
}

// ----------------------------------
// example 2
// JavaScript Variables
var x2 = 5; 
var y2 = 7;
var z2 = x2 + y2;
function varVariable(){
    document.getElementById('var_variable').innerHTML = "The value of z2: " + z2
}

// ----------------------------------
// example 3
// JavaScript Variables
const x3 = 5; 
const y3 = 7;
const z3 = x3 + y3;
function constVariable(){
    document.getElementById('const_variable').innerHTML = "The value of z3: " + z2
}

// ----------------------------------
// example 4
// JavaScript Variables
const price1 = 75; 
const price2= 15;
const total = price1 + price2;
function showPrice(){
    document.getElementById('total_price').innerHTML = "Total Price is : " + total;
}

// ----------------------------------
// example 5
// JavaScript Variables
const favCarName = "Aston Martin"
function favouriteCar(){
    document.getElementById('fav_car').innerHTML = favCarName;
}

// ----------------------------------
// example 6
// JavaScript const
const cars = ["BMW", "Ferarri", "Volvo"] //creating array
cars[0] = "Porsche"; // Change an element replacing bmw with toyota
cars.push ('Aston Martin'); // Add an element
function luxuriousCar(){
    document.getElementById('lux_car').innerHTML = cars;
}

// ----------------------------------
// example 7
// JavaScript const
const car = {type: "Fiat", model: "500", color: "red"};
car.color = "black"; // Change a property
car.owner = "Mr.X"; // Add a property
function ownerCar(){
    document.getElementById('owner_car').innerHTML = "Car Owner is: " + car.owner;
}

// ----------------------------------
// example 8
// JavaScript const
// Create an object with multiple cars and their owners
const multipleCars = [
    {type: "Fiat", model: "500", color: "black", owner: "Johnson"},
    {type: "Fiat", model: "500", color: "red", owner: "Smith"},
    {type: "Fiat", model: "500", color: "white", owner: "Davis"},
];
let ownerInfo = ""; // Display the owners and their cars
multipleCars.forEach(function multipleCar(){
  ownerInfo += "The " + multipleCar.color + " car is for " + multipleCar.owner + "<br>";
});
function multipleCar(){
    document.getElementById("multiple_car").innerHTML = ownerInfo;
}

// ----------------------------------
// example 9
// JavaScript const
// Create an object with multiple items and their owners
const multipleItems = [
    {type: "Pen", brand: "Matador", color: "blue", owner: "Nadim"},
    {type: "Pen", brand: "Lex", color: "red", owner: "Biswas"},
    {type: "Pencil", brand: "Castel", color: "Black", owner: "Rina"},
    {type: "Pencil", brand: "Bat", color: "Yellow", owner: "Bini"},
];

let ownerDetails = "";

multipleItems.forEach(function(item) {
    ownerDetails += "The " + item.color + " " + item.brand + " " + item.type + " is for " + item.owner + "<br>";
});

// Function to display the details
function displayItems() {
    document.getElementById('display_items').innerHTML = ownerDetails;
}

// ----------------------------------
// example 10
// JavaScript Array
// Create an object with Book Information
const bookInfo = [
    {title: "1984", author: "George Orwell", genre: "Dystopian"},
    {title: "To Kill a Mockingbird", author: "Harper Lee", genre: "Fiction"},
    {title: "The Great Gatsby", author: "F. Scott Fitzgerald", genre: "Classic"},
];
let bookDetails = "";
bookInfo.forEach(function (list){
    bookDetails += "The " + list.title + " a " + list.genre + " novel written by " + list.author +"." + "<br>"; 
});
function displayBooks(){
    document.getElementById('display_books').innerHTML = bookDetails;
}

// ----------------------------------
// example 11
// JavaScript Array
// Student Information
const students = [
    {name: "Neil", grade: "A+", roll: "2"},
    {name: "Rakib", grade: "A", roll: "1"},
    {name: "Sojol", grade: "A-", roll: "3"},
    {name: "Kajol", grade: "B+", roll: "4"},
];
let resultDetails = "";
students.forEach(function (infos){
    resultDetails += "Student Name " + infos.name + " Roll No.  " + infos.roll + " got " + infos.grade + " in the final examination." + "<br>";
});
function displayStudentInfo(){
    document.getElementById('display_si').innerHTML = resultDetails;
}

// ----------------------------------
// example 12
// JavaScript Exponentiation
let
exponent = 10 ** 6;
function displayExponentiation(){
    document.getElementById('display_ex').innerHTML = exponent;
}

// ----------------------------------
// example 13
// JavaScript Exponentiatio2
let
exponent1 = 6,
base1 = 3,
result1 = base1 ** exponent1
function displayExponentiation2(){
    document.getElementById('display_ex2').innerHTML = result1;
}

// ----------------------------------
// example 14
// JavaScript Pre Increment
let 
q = 5,
w = ++q;
function displayPreIncrement(){
    document.getElementById('display_pre_inc').innerHTML = q;
}

// ----------------------------------
// example 15
// JavaScript Post Increment
let 
e = 5,
r = e++;
function displayPostIncrement(){
    document.getElementById('display_post_inc').innerHTML = r;
}

// ----------------------------------
// example 16
// JavaScript Post Decrement
let 
de = 5,
dr = de--;
function displayPostDecrement(){
    document.getElementById('display_post_dnc').innerHTML = dr;
}

// ----------------------------------
// example 17
// JavaScript -=
let 
sub1 = 25;
sub1 -= 10;
function displaySubtractionOperator(){
    document.getElementById('display_sub_op').innerHTML = sub1;
}

// ----------------------------------
// example 18
// JavaScript *=
let 
mt1 = 25;
mt1 *= 10;
function displayMultiplicationOperator(){
    document.getElementById('display_mt_op').innerHTML = mt1;
}

// ----------------------------------
// example 19
// JavaScript **=
let 
exbase = 2;
exbase **=7;
function displayExponentOperator(){
    document.getElementById('display_ex_op').innerHTML = exbase;
}

// ----------------------------------
// example 20
// JavaScript %=
let 
md = 100;
md %= 27;
function displayModulasOperator(){
    document.getElementById('display_md_op').innerHTML = md;
}

// ----------------------------------
// example 21
// JavaScript String Operators
let stringS = "S";
stringN = "N";
value = stringS > stringN;
function displayStringOperators(){
    document.getElementById('display_string_op').innerHTML = value;
}

// ----------------------------------
// example 22
// JavaScript Math POW Operators
let 
squareRoot = Math.pow(9,0.5)
function displayMathPow(){
    document.getElementById('display_math_pow').innerHTML = squareRoot;
}

// ----------------------------------
// example 23
// JavaScript <<= left shift assignment Operator
let 
three = 3; //binary of three is = 00000000000011;
three <<= 2; // shifts the value to 2left = 00000000001100 = 12; 
function leftShift(){
    document.getElementById('left_s_assign').innerHTML = three;
}

// ----------------------------------
// example 24
// JavaScript >>= right shift assignment Operator
let 
five  = 5; // 5 = 00101 
five >>= 2; // 00001
function rightShift(){
    document.getElementById('right_s_assign').innerHTML = five;
}

// ----------------------------------
// example 25
// JavaScript >>>= Unsigned Right Shift Assignment
let 
four = -4;
four >>>= 1;
function unsignedRightShift(){
    document.getElementById('right_s_unsigned').innerHTML = four;
}

// ----------------------------------
// example 26
// JavaScript &&= Logical AND Assignment
let Rahim = "Plumber";
Karim = "Electrician";
Rahim &&= Karim;
function andAssignmentLogical(){
    document.getElementById('logical_and').innerHTML = Rahim;
}

// ----------------------------------
// example 27
// JavaScript ||= Logical Or Assignment
function loginUserName(){
    let username = document.getElementById('user_name').value;
    defaultUsername = "Guest";
    // If the user didn't enter a username (falsy), set it to 'Guest'
    username ||= defaultUsername;
    // Log the welcome message to the console
    console.log('Welcome, ' + username + '.' );
}

// ----------------------------------
// example 28
// JavaScript ||= Logical Or Assignment
function setNotificationPreference(){
    let isChecked = document.getElementById('emailNotification').checked;
    preference = isChecked;
    preference ||= "No"; //If isChecked is false, set preference to "No"
    document.getElementById('notificationMessage').textContent = "Email notifications: " + (preference === true ? "Yes" : preference) + ".";
}

// ----------------------------------
// example 29
// JavaScript ||= Logical Or Assignment
function notificationPreference(){
    let seeChecked = document.getElementById('email_Notification').checked;
        seePreference = seeChecked;
        seePreference ||= "No";
        document.getElementById('notification_Message').textContent = "Email Notifications: " + (seePreference === true ? "Yes" : seePreference) + ".";
}

// ----------------------------------
// example 30
// JavaScript ||= Logical Or Assignment
function setUserAge(){
    let userAge = document.getElementById('age').value;
    defaultAge = 18;
    userAge ||= defaultAge; // If the user didn't enter an age , set it to the default age.
    console.log("User Age is: " + userAge + " Years");
}

// ----------------------------------
// example 31
// JavaScript ||= Logical Or Assignment
function setUserEmail(){
    let userEmail = document.getElementById('e_mail').value;
    defaultEmail = "xyz@gmail.com";
    userEmail ||= defaultEmail;
    document.getElementById('see_email').innerHTML = "Your E-mail is : " + userEmail + ".";
}

// ----------------------------------
// example 32
// JavaScript ||= Logical Or Assignment with if
function setValidAge(){
    let validAge = document.getElementById('a_g_e').value;
    defaultAge = 18;
    validAge ||= defaultAge;
    // Convert validAge to a number for comparison & add some validation to make sure that validAge is actually a valid number
    validAge = Number(validAge);
    if (isNaN(validAge)){
        document.getElementById('valid_age').innerHTML = "Please enter a valid age";
        return; //if the age is not given or not valid
    }
    // If the age is not 18
    if (validAge < 18){
        document.getElementById('valid_age').innerHTML = "Come Back When you're 18";
    } else{
        document.getElementById('valid_age').innerHTML = "Welcome to the MIND GAME";
    }
}

// ----------------------------------
// example 33
// JavaScript &&= Logical AND Assignment using ternary Operator ?
window.onload = function() {
      emailNotiPre();
};
function emailNotiPre(){
    let notPref = document.getElementById('e_mail_Notification').checked;
    userPref = notPref? "Yes" : "No";
    document.getElementById('mail_Notification').innerHTML = "E-mail Notifications: " + userPref;
}

// ----------------------------------
// example 34
// JavaScript &&= Logical AND Assignment 
function updateText(){
    let checkBox1 = document.getElementById('check_box');
    messAge1 = document.getElementById('mes_sage');
    text1 = "New Text";
    checkBox1.checked &&= (messAge1.innerHTML = text1);
}

// ----------------------------------
// example 35
// JavaScript Nullish coalescing assignment operator ??=
let user1 = undefined;
function setUser_Name(){
    user1 ??= "Guest";
    document.getElementById('welcomeMessage').innerHTML = "Hello " + user1;
}

// ----------------------------------
// example 36
// JavaScript Nullish coalescing assignment operator ??=
let firstName = undefined;
function firstNameInput(){
    firstName ??= "Guest";
    document.getElementById('userNameMessage').innerHTML = "Mr. " + firstName;
}

// ----------------------------------
// example 37
// JavaScript Functions
function funcRet(){
    let fr = funcRes(5,7);
    document.getElementById('func_res').innerHTML = fr;
}
function funcRes(as,bs){
    return as * bs;
}

// ----------------------------------
// example 38
// JavaScript Functions
function convertCelcius(){
    let farenheit1 = inCelcius(77);
    document.getElementById('con_cels').innerHTML = farenheit1;
}
function inCelcius(frt1){
    return (5/9) * (frt1-32)
}

// ----------------------------------
// example 39
// JavaScript Functions
function fToCelcius(){
    let farenheit2 = document.getElementById('farenheit_input').value;
    celcius2 = (5/9) * (farenheit2-32);
    document.getElementById('far_cels').innerHTML = celcius2.toFixed(2) + " deg c"
}

// ----------------------------------
// example 40
// JavaScript Objects
const women= {};
women.firstName = "Reshma";
women.age = "17";
women.occupation = "Nurse";
function objectLiteral(){
    document.getElementById('obj_lit').innerHTML = women.firstName + women.age + " years old is a " + women.occupation + ".";
}

// ----------------------------------
// example 41
// JavaScript Objects Methods
const person = {
    firstName: "John",
    lastName: "Smith",
    Age: 50,
    fullName: function(){
        return this.firstName + " " + this.lastName;
    }
};
function clickShowFullName(){
    document.getElementById('csfn').innerHTML = person.fullName();
}

// ----------------------------------
// example 42
// JavaScript Template String
let last_Name01 =  `His last name is "Midford"`;
function clickShowLastName(){
    document.getElementById('csln').innerHTML = last_Name01;
}

// ----------------------------------
// example 43
// JavaScript String Length
let paraQ = "qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq"
function clickForLength(){
    document.getElementById('cfL').innerHTML = paraQ.length;
}

// ----------------------------------
// example 44
// JavaScript String escape sequence \" 
let vikings = "We are the so called \"Vikings\" from North";
chakma = "We are the \'Chakmas\' from bangladesh \\ we live in ctg/mymensingh"
function clickEscapeSequence(){
    document.getElementById('ceseq').innerHTML = vikings + "<br>" + chakma;
}

// ----------------------------------
// example 45
// JavaScript Slice String
let fullDate = "2025-02-12";
function yearSlice(){
    document.getElementById('yr_slice').innerHTML = fullDate.slice(0,4);
}

// ----------------------------------
// example 46
// JavaScript Sub-String
let fruitList = "Banana, Orange, Watermelon, Apple";
function fruitSubString(){
    document.getElementById('frt_ss').innerHTML = fruitList.substring(8,14) + " and " +fruitList.substring(27,33); 
}

// ----------------------------------
// example 47
// JavaScript String substr
let carList = "Ford, Audi, Bentley, Chevrolet, Dodge";
function carSubStr(){
    document.getElementById('car_ss').innerHTML = carList.substr(12,7) + " and " + carList.substr(-5,5);
}

// ----------------------------------
// example 48
// JavaScript Convert string to upper/lower case
function carUpperCase(){
    document.getElementById('car_ulcase').innerHTML = carList.toUpperCase();
}
function carLowerCase(){
    document.getElementById('car_ulcase').innerHTML = carList.toLowerCase();
}

// ----------------------------------
// example 49
// JavaScript String trim()
function trimInput(){
    let inputvalue = document.getElementById('trimName').value;
    document.getElementById('out_put').innerHTML = "Cleaned Name: " + inputvalue.trim();
}

// ----------------------------------
// example 50
// JavaScript String padStart()
function formatTime(){
    let daysFormat = document.getElementById('days').value;
    hoursFormat = document.getElementById('hours').value;
    minutesFormat = document.getElementById('minutes').value;
    secondsFormat = document.getElementById('seconds').value;
    document.getElementById('formattedTime').innerHTML = "Come Back in " + daysFormat.padStart(3,'0') + " : " + hoursFormat.padStart(2,'0') + " : " + minutesFormat.padStart(2,'0') + " : " + secondsFormat.padStart(2,'0') + ".";
}

// ----------------------------------
// example 51
// JavaScript number toString() with repeat
let 
numberValue = 17;
numberString = numberValue.toString();
function objectString(){
    document.getElementById('obj_str').innerHTML = numberString.padEnd(12,'xyz').repeat(4);
}

// ----------------------------------
// example 52
// JavaScript replace
let replacedText = document.getElementById('rep_txt').innerHTML;
function replaceText(){
    document.getElementById('rep_txt').innerHTML = replacedText.replace("YXZ Abc", "123456");
}
function replaceFirstPart(){
    document.getElementById('rep_txt').innerHTML = replacedText.replace("YXZ", "Blue");
}

// ----------------------------------
// example 53
// JavaScript replace
function replaceTextArea(){
    let textAreaContent = document.getElementById('contentNew').value;
    document.getElementById('output_area').innerHTML = textAreaContent.replaceAll("JavaScript", "Python");
}

// ----------------------------------
// example 54
// Changing an Array Element
const newCarList = ["Saab", "Volvo", "BMW"];
newCarList[1] = "Fiat"
function changeCarList(){
    document.getElementById('output_car').innerHTML = newCarList;
}

// ----------------------------------
// example 55
// Accessing the Last Array Element
function lastCarList(){
    document.getElementById('last_car').innerHTML = newCarList[newCarList.length-1]
}

// ----------------------------------
// example 56
// Looping an Array
let carLength = newCarList.length;
let carLoop = "<ul>";
for (let i = 0; i < carLength; i++){
    carLoop += "<li>" + newCarList [i] + "</li>";
}
carLoop += "</ul>";
function loopingArray(){
    document.getElementById('loop_arr').innerHTML = carLoop;
}

// ----------------------------------
// example 57
// Looping an Array for even numbers
function loopingArrayEven(){
    const evenNumbers = [];
    for(let i = 2; i <= 10; i+=2){
        evenNumbers.push(i);
    }
    let evenNumbersList = "<ul>";
    for (let i = 0; i < evenNumbers.length; i++){
        evenNumbersList += "<li>" + evenNumbers[i] + "</li>";
    }
    evenNumbersList += "</ul>";
    document.getElementById('loop_arr_even').innerHTML = evenNumbersList;
}

// ----------------------------------
// example 58
// Looping an Array for odd numbers
function loopingArrayOdd(){
    const oddNumbers = [];
    for (let i = 1; i <=11; i+=2){
        oddNumbers.push(i);
    }
    let oddNumbersList = "<ul>"
    for (let i = 0; i < oddNumbers.length; i++){
        oddNumbersList += "<li>" + oddNumbers[i] + "</li>";
    }
    oddNumbersList += "</ul>"
    document.getElementById('loop_arr_odd').innerHTML = oddNumbersList;
}

// ----------------------------------
// example 59
// Looping an Array for odd numbers
function namesOfStudents(){
    const nameStudents = ["Alice", "Jack", "Riddick"];
    let nameStudentsList = "<ul>";
    for (let i = 0; i < nameStudents.length; i++){
        nameStudentsList += "<li>" + nameStudents[i] + "</li>"
    }
            nameStudentsList += "</ul>";
    document.getElementById('names_students').innerHTML = nameStudentsList;
}

// ----------------------------------
// example 60
// Making a Sentence from Words (String Manipulation)
function sentenceWords(){
    const words = ["I", "love", "coding", "with", "JavaScript"];
    let sentence = "";
    for (let i = 0; i < words.length; i++){
        sentence += words[i] + " ";
    }
    document.getElementById('sent_words').innerHTML = sentence.trim();
}

// ----------------------------------
// example 61
// The forEach() Method
function carForEach(){
    const carBrand = ["Saab", "Volvo", "BMW"];
    let brandList = "<ul>";
    carBrand.forEach(function(brand){
        brandList += "<li>" + brand + "</li>";
    });
    brandList += "</ul>";
    document.getElementById('car_each').innerHTML = brandList; 
}

// ----------------------------------
// example 62
// The forEach() Method
function numbersForEach(){
    const numeric = [1,2,3,4,5,6]
    let numericList = "<ul>";
    numeric.forEach(function(list){
        numericList += "<li>" + list + "</li>";
    });
    numericList += "</ul>";
    document.getElementById('numbers_each').innerHTML = numericList;
}

// ----------------------------------
// example 63
// The typeof Operator
function typeOfOperator(){
    const pens = ["mat", "lex", "ball"];
    document.getElementById('typeof_op').innerHTML = Array.isArray(pens);
}
function typeOfOperator2(){
    pencil = {name: "castel", color: "red", box: "no"};
    document.getElementById('typeof_op').innerHTML = typeof pencil;
}

// ----------------------------------
// example 64
// Nested JavaScript Objects and Arrays.
function nestedObjectsArrays(){

    let xAbc = "";

    const xAbcInfo = {

        name: "Bret",

        age: 20,

        carowns: [

            {name: "Ford", color: "red", model: ["Fiesta", "Focus", "Mustang"]},

            {name: "BMW", color: "black", model: ["320", "x3", "x5"]},

            {name: "Fiat", color: "blue", model: ["500", "Panda"]}

        ]
    };

    for (let i in xAbcInfo.carowns){

        xAbc += "<h2>" + xAbcInfo.carowns[i].name + "</h2>" + "<br>";

        for (let j in xAbcInfo.carowns[i].model){

            xAbc += "<h6>" +  xAbcInfo.carowns[i].model[j] + "</h6>" + "<br>"

        }
    }

    document.getElementById('nest_o_a').innerHTML = xAbc;
}

// ----------------------------------
// example 65
// The copyWithin() Method
function copyWithinMethod(){
    const fruitsMonsoon = ["Banana", "Orange", "Apple", "Mango"];
    document.getElementById('cpy_with').innerHTML = fruitsMonsoon.copyWithin(0,2);
}

// ----------------------------------
// example 66
// JavaScript Array flat()
function arrayFlatStudents(){
    const studentsSubject = [
        ["Alice", "Math", "English"],
        ["Bob", "Science", "History"],
        ["Charlie", "Physics", "Chemistry"]
    ];
    document.getElementById('arr_flat').innerHTML = studentsSubject.flat();
}

// ----------------------------------
// example 67
// JavaScript Array flat map()
function arrayFlatMap(){
    arrayOne = [1,2,3,4,5];
    arrayTwo = arrayOne.flatMap(x =>[x, x*10]);
    document.getElementById('arr_flat_map').innerHTML = arrayTwo;
}

// ----------------------------------
// example 68
// The splice() Method
function spliceMethod(){
    const tasks = ["Buy groceries", "Complete homework", "Call mom", "Read book"];
    document.getElementById('todo-list').innerHTML = tasks.join("-");
    tasks.splice(0,1, "Go for a walk");
    document.getElementById('updated-list').innerHTML = tasks.join("-");
}

// ----------------------------------
// example 69
// The splice() Method
function spliceMethodShow(){
    const bdFruits = ["Banana", "Orange", "Apple", "Mango"];
    document.getElementById('demo10').innerHTML = "Original: " + bdFruits;
    let removed = bdFruits.splice(3,1, "Lemon", "Coconut");
    document.getElementById('demo20').innerHTML = "Updated: " + bdFruits;
    document.getElementById('demo30').innerHTML = "Removed: " + removed;
}

// ----------------------------------
// example 70
// The slice() Method
function sliceMethodShow(){
    const movies = ["Inception", "Titanic", "The Dark Knight", "The Matrix", "Interstellar", "Avatar"
    ]
    removedMoviesPair = movies.slice(1,3);
    removedMovies = movies.slice(2);
    document.getElementById('demo11').innerHTML = movies;
    document.getElementById('demo21').innerHTML = removedMoviesPair;
    document.getElementById('demo31').innerHTML = removedMovies;
}

// ----------------------------------
// example 71
// The () ? : Ternary Operator
function voteValidAge(){
    let voterAge = document.getElementById('vot_age').value;
    voteable = ( voterAge < 18) ? "To Young" : "Old Enough";
    document.getElementById('demo100').innerHTML = voteable;
}

// ----------------------------------
// example 72
// The () ? : Ternary Operator with if
function voterValidAge(){
    let newVoter;
    voteAge = Number(document.getElementById('voter_age').value);
    if (isNaN(voteAge)){
        newVoter = "Input is not a valid Number";
    } else {
        newVoter = (voteAge < 18) ? "Too Young" : "Old Enough";
    }
    document.getElementById('demo150').innerHTML = newVoter;
}

// ----------------------------------
// example 73
// JavaScript if
function grettingText(){
    if (new Date().getHours() < 18){
        document.getElementById('geeting_text').innerHTML = "Good Day";
    }
}

// ----------------------------------
// example 74
// JavaScript if with greeting
function greetBasedOnTime(){
    inputTime = document.getElementById('time_Input').value;
    inputHours = parseInt(inputTime);

    if (isNaN(inputHours)|| inputHours < 0 || inputHours > 23){
        document.getElementById('get_greeting').innerHTML = "Please  enter a valid hour between 0 and 23!";
    } else if (inputHours < 12){
        document.getElementById('get_greeting').innerHTML = "Good Morning";
    } else if (inputHours < 16){
        document.getElementById('get_greeting').innerHTML = "Good Afternoon";
    } else if (inputHours < 20){
        document.getElementById('get_greeting').innerHTML = "Good Evening";
    } else {
        document.getElementById('get_greeting').innerHTML = "Good Night";
    }
}

// ----------------------------------
// example 75
// JavaScript if A time-based greeting
function greetTime(){
    const newHour = new Date().getHours();
    let newGreeting = "Are you having a "
    if (newHour <12){
        newGreeting += "Good Morning";
    } else if (newHour <18){
        newGreeting += "Good Afternoon";
    } else{
        newGreeting += "Good evening";
    }
    document.getElementById('time_greeting').innerHTML = newGreeting + ", Sir?"
}

// ----------------------------------
// example 76
// JavaScript Switch Statement
function dayFinder(){
    let newDay;
    switch (new Date().getDay()){
    case 0 : newDay = "Sunday";
        break;
    case 1 : newDay = "Monday";
        break;
    case 2 : newDay = "Tuesday";
        break;
    case 3 : newDay = "Wednesday";
        break;
    case 4 : newDay = "Thursday";
        break;
    case 5 : newDay = "Friday";
        break;
    case 6 : newDay = "Saturday";
    }
    document.getElementById('day_find').innerHTML = newDay;
}

// ----------------------------------
// example 77
// JavaScript Switch Statement
function weekendFinder(){
    let weekend;
    switch (new Date().getDay()){
    case 0 : weekend = Sunday;
        break;
    case 6 : weekend = "Saturday";
        break;
    default : weekend = "Work Day";
    }
    document.getElementById('week_find').innerHTML = weekend;
}

// ----------------------------------
// example 78
// JavaScript Switch Statement
function weekendCombinedFinder(){
    let dayWeekend;
    switch (new Date().getDay()){
    default : dayWeekend = "Try to keep up! No excuses!"
        break;
    case 5 :
    case 6 : dayWeekend = "Its Weekend, Complete your backlogs";
        break;
    case 4 :
    case 3 : dayWeekend = "Dont lose hope if u cant catch up! You have a weekend coming to be ahead.";
    }
    document.getElementById('week_c_find').innerHTML = dayWeekend;
}

// ----------------------------------
// example 79
// JavaScript For Loop
function car_loop(){
    const carXY = ["Saab", "Volvo", "BMW", "Ferarri"];
    let carLoopXY = " ";
    for (let i = 0; i < carXY.length ; i++){
        carLoopXY += carXY[i] + "<br>"
    }
    document.getElementById('loop-car').innerHTML = carLoopXY;
}

// ----------------------------------
// example 80
// JavaScript For Loop with multiple expression 1
function mt_exp(){
    const singleNumberNew = [1, 2, 3, 4, 5];
    let i, numLen, sqValue;
    for (i = 0, numLen = singleNumberNew.length, sqValue =" a. "; i < numLen; i++ ){
        sqValue += "Square of " + singleNumberNew[i] + " is " + (singleNumberNew[i] * singleNumberNew[i]) + "<br>";
    };
    document.getElementById('mt-express').innerHTML = sqValue;
}

// ----------------------------------
// example 81
// For Loop with Restart or Stop
// Loop from i = 0 to 9
// let outputElement = document.getElementById("mtexpress2");
// for (let i = 0; i < 10; i++) {
//    //Condition 1: If i is 5, reset i to -3 and continue the loop
//  if (i === 5) {
//      outputElement.innerHTML += "1st Condition Met, restarting the loop<br>";
//       i = -1;  // Reset i to -3, so on next iteration i becomes -2
//           continue; // Skip the rest of the loop and continue from the top.
//     }
//   // Normal behavior: show the current value of i
//   outputElement.innerHTML += i ;

//    //Condition 2: If i is 8, stop the loop
//   if (i === 8) {
//     outputElement.innerHTML += "2nd Condition Met, Stopping the Loop";
//       break; // Break the loop completely
//   }
// }
 

