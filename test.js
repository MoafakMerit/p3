const nMap = {
  ">": "$gt",
  "<": "$lt",
  "=>": "$egt",
  "=<": "$elt",
  "=": "$eq",
};

const regEx = /\b(<|>|>=|=|<|<=)\b/g;

const nummeric = "price>40";

const newnummeric = nummeric.replace(regEx, (match) => `-${nMap[match]}-`);
console.log(newnummeric);

const [filed, operater, price] = newnummeric.split("-");

const [cat, wight, hight] = ["mish", 10, 20];
console.log(cat);

let tomObject = {};

tomObject[cat] = { wight: wight };
console.log(tomObject);
