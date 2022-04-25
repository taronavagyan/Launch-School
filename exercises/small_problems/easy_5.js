// 1.

/*
const DEGREE = "\xB0";
const MINUTES_PER_DEGREE = 60;
const SECONDS_PER_MINUTE = 60;

function dms(number) {
  let degrees = Math.floor(number / 1);
  let minutes = (number % 1) * MINUTES_PER_DEGREE;
  let seconds = (minutes % 1) * SECONDS_PER_MINUTE;

  minutes = padZeros(minutes);
  seconds = padZeros(seconds);

  console.log(`${degrees}${DEGREE}${minutes}'${seconds}"`);
}

function padZeros(number) {
  number = String(Math.floor(number));
  return number.length === 1 ? `0${number}` : number;
}

dms(30); // 30°00'00"
dms(76.73); // 76°43'48"
dms(254.6); // 254°35'59"
dms(93.034773); // 93°02'05"
dms(0); // 0°00'00"
dms(360); // 360°00'00" or 0°00'00"
*/
