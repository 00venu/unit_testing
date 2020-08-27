const score = [
  ["pakistan", 21],
  ["pakistan", 38],
  ["india", 41],
  ["india", 35],
  ["australia", 75],
  ["pakistan", 39],
];
const scoreCard = (country) => {
  const getCountry = score.filter((val) => {
    return val[0] === country;
  });

  var result = getCountry.reduce(function (prev, next) {
    return prev + next[1];
  }, 0);

  let totalScore = result;

  let averageScore = (result / getCountry.length).toFixed();

  console.log(
    `Country = ${country} , Total Score =  ${totalScore}, Average Score = ${averageScore}`
  );
};

scoreCard("pakistan");
