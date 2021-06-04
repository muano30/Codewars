// 8 kyu Twice as old
// Your function takes two arguments:

// 1.current father's age (years)
// 2. current age of his son (years)

// Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old).

function twiceAsOld(dadYearsOld, sonYearsOld) {
    let twice = dadYearsOld - sonYearsOld * 2;
    return twice < 0 ? twice * (-1) : twice;
    }
   let results = twiceAsOld(20,5);
    console.log(results)