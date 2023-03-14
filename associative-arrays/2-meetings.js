function checkMeetings(meetings) {
  let noConflictMeetings = {};
  meetings.forEach((meeting) => {
    let [dayOfmeeting, person] = meeting.split(` `);

    if (noConflictMeetings[dayOfmeeting]) {
      console.log(`Conflict on ${dayOfmeeting}!`);
    } else {
      noConflictMeetings[dayOfmeeting] = person;
      console.log(`Scheduled for ${dayOfmeeting}`);
    }
  });
  for (const day in noConflictMeetings) {
    console.log(`${day} -> ${noConflictMeetings[day]}`);
  }
}
checkMeetings(["Monday Peter", "Monday Tim", "Friday Tim"]);
