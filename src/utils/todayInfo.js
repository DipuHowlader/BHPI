import React from 'react';

const month = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const date = new Date();
const weekday = days[date.getDay()];
const day = date.getDate();
let monthString = month[date.getMonth()];

const hrs = date.getHours();

let greet;

if (hrs < 12) greet = 'Good Morning';
else if (hrs >= 12 && hrs <= 17) greet = 'Good Afternoon';
else if (hrs >= 17 && hrs <= 24) greet = 'Good Evening';


export { monthString, day, weekday, greet };
