// get time the moment a branch is created
// record this time stamp

function calculateDuration(moment) {
  // translate it into UTC form
  // calculate the duration
  // turn it into hh/mm/ss form
  const createdMoment = Date.parse(moment);
  const deleteMoment = Date.now();
  let time = ((deleteMoment - createdMoment) / 3600000).toFixed(2);
  if (time < 24) {
    return time;
  }
  for (let i = 1; i < 30; i++) {
    if (time >= 24 * i) {

      time -= 16 * i;
      console.log(time);
    }
  }

  return time;
}

calculateDuration("Sat Jun 21 18:30:29 2019");
