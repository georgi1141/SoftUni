function solve(data) {

  // will store all info in Object
  let courses = {};
  // go through every line
  for (let line of data) {
    // if the current line has length 2
    if (line.split(" ").length === 2) {
      let [courseName, capacity] = line.split(": ");
      // check if the is NOT present
      if (!courses[courseName]) {
        // insert capacity and empy array for later on
        courses[courseName] = { capacity: Number(capacity), students: [] };
      } else {
        //if it is present so add the new value to the old
        courses[courseName].capacity += Number(capacity);
      }
    } else {
      // if we have the command with user , email and credit
      let index1 = line.indexOf("[");
      let index2 = line.indexOf("]");
      // copy the credit from the current line
      let creditCount = Number(line.slice(index1 + 1, index2));
      let splittedLine = line.split(" ");
      // get mail,name,course
      let name = splittedLine[0].slice(0, index1);
      let mail = splittedLine[3];
      let course = splittedLine[5];
      // check if we have the current course and if any capacity
      if (courses[course] && courses[course].capacity > 0) {
        courses[course].students.push({
          name: name,
          mail: mail,
          creditCount: creditCount,
        });
        // DONT forget to decremeeeeeeent
        courses[course].capacity--;
      }
    }
  }

  // took me a while to figure out how to sort by the length of the students but finally succeesed :D
  let sortByEntries = Object.entries(courses).sort(
    (a, b) =>
      Object.keys(b[1].students).length - Object.keys(a[1].students).length
  );

  // another hour to figure out the final output.......... but 100/100 Phuuu... :D
  for (const element of sortByEntries) {
    console.log(`${element[0]}: ${element[1].capacity} places left`);
    element[1].students
      .sort((a, b) => b.creditCount - a.creditCount)
      .forEach((x) =>
        console.log(`--- ${x.creditCount}: ${x.name}, ${x.mail}`)
      );
  }
}

solve([
  "JavaBasics: 2",
  "user1[25] with email user1@user.com joins C#Basics",
  "C#Advanced: 3",
  "JSCore: 4",
  "user2[30] with email user2@user.com joins C#Basics",
  "user13[50] with email user13@user.com joins JSCore",
  "user1[25] with email user1@user.com joins JSCore",
  "user8[18] with email user8@user.com joins C#Advanced",
  "user6[85] with email user6@user.com joins JSCore",
  "JSCore: 2",
  "user11[3] with email user11@user.com joins JavaBasics",
  "user45[105] with email user45@user.com joins JSCore",
  "user007[20] with email user007@user.com joins JSCore",
  "user700[29] with email user700@user.com joins JSCore",
  "user900[88] with email user900@user.com joins JSCore",
]);
