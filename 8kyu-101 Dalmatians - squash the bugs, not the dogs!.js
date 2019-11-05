const howManyDalmatians = number => {
  var dogs = [
    "Hardly any",
    "More than a handful!",
    "Woah that's a lot of dogs!",
    "101 DALMATIANS!!!"
  ];
  if (number <= 10) return dogs[0];
  if (number <= 50) return dogs[1];
  if (number <= 100) return dogs[2];
  else return dogs[3];
};

console.log(howManyDalmatians(25));
