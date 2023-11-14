function pratice01() {
  const ages = [15, 17, 18, 29, 42];

  // Arrow Function
  const filteredAges = ages.filter((age) => age >= 18);

  // Function Normal
  const filteredAges2 = ages.filter(function (age) {
    return age >= 18;
  });

  console.log(filteredAges);
  console.log(filteredAges2);
}

function pratice02() {
  const numberList = [1, 3, 5, 4, 7, 8, 10, 11];

  const evenNumber = numberList.findIndex((num) => num % 2 === 0);
  console.log(evenNumber);
}