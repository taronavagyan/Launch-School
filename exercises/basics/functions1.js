// 1.

/*
function sum(number1, number2) {
  return number1 + number2;
}

console.log(sum(22,10));
*/

// 2.

/*
function brendanEichQuote() {
  console.log('Always bet on JavaScript');
}

brendanEichQuote();
The function returns undefined because it has no return statement.
*/

// 3.

/*
function cite(speaker, quote) {
  console.log(`${speaker} said: "${quote}"`);
}

cite('Santa Claus','Ho, Ho, Ho');
*/

// 4.

/*
function squaredNumber(number) {
  return number ** 2;
}

console.log(squaredNumber(9));
console.log(squaredNumber(3));
*/

// 5.

/* There will be no output since the function is not invoked. */


// 6.

/*
function compareByLength(string1, string2) {
  if (string1.length < string2.length) 
    return -1;
  else if (string2.length < string1.length) 
    return 1;
  else 
    return 0;
}

console.log(compareByLength('patience', 'perseverance')); // -1
console.log(compareByLength('strength', 'dignity'));      //  1
console.log(compareByLength('humor', 'grace'));           //  0
*/

// 7.

/*
console.log('Captain Ruby'.replace('Ruby', 'Javascript'));
*/

// 8.

/*
function greet(lang) {
  switch (lang) {
    case "en": return "Hi!";
    case "fr": return "Salut!";
    case "pt": return "Ola!";
    default: return "Language not detected.";
  }
}

console.log(greet('en'));
console.log(greet('fr'));
console.log(greet('pt'));
console.log(greet('la'));
*/

// 9.

/*
function extractLanguage(locale) {
  return locale.split('_')[0];
}

console.log(extractLanguage('en_US.UTF-8'));  // 'en'
console.log(extractLanguage('en_GB.UTF-8'));  // 'en'
console.log(extractLanguage('ko_KR.UTF-16')); // 'ko'
*/

// 10.

/*
function extractRegion(locale) {
  return locale.split('.')[0].split('_')[1];
}

console.log(extractRegion('en_US.UTF-8'));  // 'US'
console.log(extractRegion('en_GB.UTF-8'));  // 'GB'
console.log(extractRegion('ko_KR.UTF-16')); // 'KR'
*/

// 11.

/*
function greetByLang(lang) {
  switch (lang) {
    case "en": return "Hi!";
    case "fr": return "Salut!";
    case "pt": return "Ola!";
    case "de": return "Hallo!";
    case "sv": return "Hej!";
    case "af": return "Haai!";
    default: return "Language not detected.";
  }
}

function greetbyRegion(region) {
  switch (region) {
    case "US": return "Hey!";
    case "CAN": return "Hey there!";
    case "GB": return "Hello!";
    case "AU": return "Howdy!";
    case "FR": return "Salut!";
    case "CA": return "Como sava?";
    case "MX": return "Que paso?";
    case "ES": return "Hola!";
    default: '';
  }
}

function extractLanguage(locale) {
  return locale.split('_')[0];
} 

function extractRegion(locale) {
  return locale.split('.')[0].split('_')[1];
}

function localGreet(locale) {
  let lang = extractLanguage(locale);
  let region = extractRegion(locale);

  if (greetbyRegion(region)) {
    return greetbyRegion(region);
  }

  return greetByLang(lang);
}

console.log(localGreet('en_US.UTF-8')); // 'Hey!'
console.log(localGreet('en_GB.UTF-8')); // 'Hello!'
console.log(localGreet('en_AU.UTF-8')); // 'Howdy!'


console.log(localGreet('fr_FR.UTF-8')); // 'Salut!'
console.log(localGreet('fr_CA.UTF-8')); // 'Salut!'
console.log(localGreet('fr_MA.UTF-8')); // 'Salut!'
*/