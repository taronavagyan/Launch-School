while (true) {
  let num = Math.floor(Math.random() * 10000000);
  console.log(num);
  if (num === 0) {
    console.log("Got it!");
    break;
  }
}
