const log = (logValue) => console.log(logValue);

log("Working goood ------------");

// loops or iterations

// basic for loop
for (let i = 1; i <= 5; i++) {
  log(i);
}
const countryArr = ["IND", "CHN", "US", "UK", "EUR", "GER"];
//  for loop for array
for (let i = 0; i < countryArr.length; i++) {
  log(countryArr[i]);
}

// object
const countryObj = {
  India: "IND",
  China: "CHN",
  UnitedStated: "US",
  unitedKingdom: "UK",
  Europe: "EUR",
  Germany: "GER",
};
log("Looping Object values ------");
const objectValues = Object.values(countryObj);
log(objectValues);
//  for loop for object values
for (let i = 0; i < objectValues.length; i++) {
  log(objectValues[i]);
}

log("Looping Object keys ------");
const objectkeys = Object.keys(countryObj);
log(objectkeys);
//  for loop for object values
for (let i = 0; i < objectkeys.length; i++) {
  log(objectkeys[i]);
}

/// Types of Loop
// forin , forof, foreach
// for each -> best use case in Array;
//const countryArr = ["IND", "CHN", "US", "UK", "EUR", "GER"];
log("------For each loop-------");
// the parameters should be in this order (value , index, acctualArray)
countryArr.forEach((value, index, actualArray) => {
  log(`
          Value : ${value}
          Index : ${index}
          actualArray : ${actualArray}
         `);
});

// const countryObj = {
//           India: "IND",
//           China: "CHN",
//           UnitedStated: "US",
//           unitedKingdom: "UK",
//           Europe: "EUR",
//           Germany: "GER",
//         };

objectkeys.forEach((value) => {
  log(`
   Object Keys : ${value} 
   Object Value : ${countryObj[value]}
 `);
  //countryObj["India"]
});

///////// For In looop//////////
//best used for object
log("---------------Forin loop---------");
// for(key in objectrName){

// }
for (key in countryObj) {
  log(
    ` 
Keys : ${key}
Values : ${countryObj[key]}
`
  );
}

log("---------for in array ---------");

for (k in countryArr) {
  // for array i'll index
  log(`
  Index of Array : ${k}
  Values of Array : ${countryArr[k]}
  `);
}

log("......................for of.................");
// best used for string
const countryString = "AllCountryData";

for (str of countryString) {
  log(`Values : ${str}`);
}
log("................for of in array");
for (value of countryArr) {
  log(`array value : ${value}`);
}

log("................for of in object");
for (objVal of objectkeys) {
  log(`
  object keys : ${objVal}
  object values : ${countryObj[objVal]}
  '`);
}
