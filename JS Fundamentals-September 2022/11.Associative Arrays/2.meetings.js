function meetings(data) {
  let meetings = {};

  data.forEach((element) => {
    let [day, name] = element.split(" ");

    if (!meetings.hasOwnProperty(day)) {
      meetings[day] = name;
      console.log(`Scheduled for ${day}`);
    } else {
      console.log(`Conflict on ${day}!`);
    }
  });

  for (const line in meetings) {
    console.log(`${line} -> ${meetings[line]}`);
  }
}

meetings([
  "Friday Bob",
  "Saturday Ted",
  "Monday Bill",
  "Monday John",
  "Wednesday George",
]);


// Meetings
// Write a function that manages meeting appointments.The input comes as an array of strings.Each string contains a weekday and person’s name.For each successful meeting, print a message.If you receive the same weekday twice, the meeting cannot be scheduled so print a conflicting message.In the end, print a list of all successful meetings.