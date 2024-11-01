
// const weekDays = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
// const date = new Date();
// let day = weekDays[date.getDay()]



// // console.log(day == currentDay);

// for (let i = 0; i < weekDays.length; i++) {
//     if (i = 0) {
//         weekDays == 'Monday'
//     }
    
    
// }
// console.log(weekDays.map());



// let date =    moment().format('MMMM Do YYYY, h:mm:ss a');
// let remain=moment([2007, 5, 29]).fromNow(true); // 4 years ago
// let toNow=moment([2020, 1, 29]).toNow(); // in 4 years
// console.log(date);
// console.log(remain);
// console.log(toNow);
// // .format('M Do YYYY')
// var a = moment([24, 10, 27]);
// var b = moment([2, 5, 16])

// console.log(a.diff(b,'months'));
// console.log(a.diff(b,'years'));
//  // 1.5 months (rounded if not integer'years'));

// var a = moment("2012-02", "YYYY-MM").daysInMonth() // 29
// var b = moment("2012-01", "YYYY-MM").daysInMonth() // 31
// console.log(a,b);

// // var obj = moment().toObject()
// // console.log(obj);
// // console.log(moment().toString().subtract(22, 'years') );


// // moment().format("MMM Do YY");          
// console.log(moment("20020516", "YYYYMMDD").fromNow());
    

// const moment = require('moment');
// import moment from 'moment';



// function calculateAge() {
//     const birthdate = new Date(document.getElementById('birthdate').value);
//     const today = new Date();

//     let years = today.getFullYear() - birthdate.getFullYear();
//     let months = today.getMonth() - birthdate.getMonth();
//     let days = today.getDate() - birthdate.getDate();

//     // Adjust if birthdate month or day is greater than the current month or day
//     if (months < 0 || (months === 0 && days < 0)) {
//         years--;
//         months += 12;
//     }
//     if (days < 0) {
//         months--;
//         days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
//     }

//     document.getElementById('result').textContent =
//         `Your age is ${years} years, ${months} months, and ${days} days.`;
// }


// var moments = moment().month()
// var a = 2002-0o5-16
// var date = moment()

// console.log(date,a,moments)






// const birthDate = prompt("Enter your BirthDate in this format (2002-05-16)(year-month-day)")

// const birthDate = '2002-05-16'; // replace with actual birthdate, e.g., '2000-12-25'
// const currentDate = moment();
// let nextBirthday = moment(birthDate).year(currentDate.year());
// console.log(nextBirthday);

// // Check if the birthday this year has already passed
// if (currentDate.isAfter(nextBirthday)) {
//   nextBirthday.add(1, 'year'); // Set to next year's birthday if it has passed this year
// }

// // Calculate remaining time in months and days
// const monthsRemaining = nextBirthday.diff(currentDate, 'months');
// const daysRemaining = nextBirthday.diff(currentDate.add(monthsRemaining, 'months'), 'days');

// console.log(`Time until next birthday: ${monthsRemaining} months and ${daysRemaining} days.`);
// document.write(`Time until next birthday: ${monthsRemaining} months and ${daysRemaining} days.`)
function calculateAge() {
    // Get the birth date input from the user
    let birthDate = new Date(document.getElementById('birthDate').value);
    
    // Get the current date using Moment.js
    let currentDate = moment();

    // Calculate the next birthday by setting the birth date to the current year
    let nextBirthday = moment(birthDate).year(currentDate.year());

    // If the next birthday for the current year has already passed,
    // adjust the next birthday to the following year
    if (currentDate.isAfter(nextBirthday)) {
        nextBirthday.add(1, 'year');
    }

    // Calculate the number of full months remaining until the next birthday
    let monthsRemaining = nextBirthday.diff(currentDate, 'months');

    // Calculate the remaining days after subtracting the full months
    let daysRemaining = nextBirthday.diff(currentDate.add(monthsRemaining, 'months'), "days");

    // Log the result to the console for debugging purposes
    console.log(`Remaining Time until next birthday is : ${monthsRemaining} months and ${daysRemaining} days.`);

    // Display the result in an HTML element with the id 'result'
    document.getElementById('result').textContent = 
        `Remaining Time until next birthday is : ${monthsRemaining} months and ${daysRemaining} days.`;
}
