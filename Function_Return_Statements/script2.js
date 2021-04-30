const nMinAge = 18;

let nMaxPeople = 50;
let nCurPeople = 49;

let processEntryRequest = function (nMax, nCurrent, age) {
  if (nCurrent >= nMax) { return 'It\'s too busy right now, come back later.'; }
  if (age < nMinAge) { return 'This club is for adults only.'; }

  return true;
}

let checkResult = function (result) {
  if (result === true) { 
    nCurPeople++;

    console.log('Please come in.');
  }
  else { console.log(result); }
}

checkResult(processEntryRequest(nMaxPeople, nCurPeople, 15));
checkResult(processEntryRequest(nMaxPeople, nCurPeople, 17));
checkResult(processEntryRequest(nMaxPeople, nCurPeople, 18));
checkResult(processEntryRequest(nMaxPeople, nCurPeople, 21));
checkResult(processEntryRequest(nMaxPeople, nCurPeople, 25));