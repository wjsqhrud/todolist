const eDay = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursthday",
  "Friday",
  "Saturday",
];
const eMonth = [
  "Janury",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const now = new Date();
const date = now.getDate();
const day = eDay[now.getDay()];
const year = now.getFullYear();
const month = eMonth[now.getMonth()];
const todoDate = document.querySelector(".todo__container__date");
todoDate.innerHTML = `
<span class="date">${date}</span>
<span class="day">${day}</span>
<span class="month">${month}</span>
<span class="year">${year}</span>
`;
