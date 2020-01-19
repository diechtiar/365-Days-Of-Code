function checkCashRegister(price, cash, cid) {
  var needToCollect = roundToTwo(cash - price);
  var hand = 0;
  var change = {
    'status': 'PROCESSING',
    'change': []
  };

  var cashInDrawer = Array.from(cid);
  let collected = [['PENNY', 0], ['NICKEL', 0], ['DIME', 0], ['QUARTER', 0], ['ONE', 0], ['FIVE', 0], ['TEN', 0], ['TWENTY', 0], ['ONE HUNDRED', 0]];

  function roundToTwo(number) {
    return Math.round(number * 100) / 100;
  }

  function update(slotIndex, coinValue) {
    var value = roundToTwo(coinValue);
    cashInDrawer[slotIndex][1] = roundToTwo(cashInDrawer[slotIndex][1] - value);
    hand = roundToTwo(hand + value);
    collected[slotIndex][1] = roundToTwo(collected[slotIndex][1] + value);
  }

  function logCoins() {
    // console.log(hand);
    // console.log(needToCollect);
    // console.log((needToCollect - hand));
  }

  function availableCash(drawer) {
    let cash = 0;
    drawer.forEach(slot => {
      // console.log(slot);
      cash = cash + slot[1];
    });
    
    return roundToTwo(cash);
  }
  
  function collectChange () {

    if ((needToCollect - hand - 100 >= 0) && (cashInDrawer[8][1] > 0)) {
      // console.log('ONE HUNDRED'); 
      logCoins();
      update(8, 100);
    } else if ((needToCollect - hand - 20 >= 0) && (cashInDrawer[7][1] > 0)) {
      // console.log('TWENTY'); 
      logCoins();
      update(7, 20);
    } else if ((needToCollect - hand - 10 >= 0) && (cashInDrawer[6][1] > 0)) {
      // console.log('TEN'); 
      logCoins();
      update(6, 10);
    } else if ((needToCollect - hand - 5 >= 0) && (cashInDrawer[5][1] > 0)) {
      // console.log('FIVE');
      logCoins();
      update(5, 5);
    } else if ((needToCollect - hand - 1 >= 0) && (cashInDrawer[4][1] > 0)) {
      // console.log('ONE'); 
      logCoins();
      update(4, 1);
    } else if ((roundToTwo(needToCollect - hand - 0.25) >= 0) && (roundToTwo(cashInDrawer[3][1]) > 0)) {
      // console.log('QUARTER');
      logCoins();
      update(3, 0.25);
    } else if ((roundToTwo(needToCollect - hand - 0.1) >= 0) && (roundToTwo(cashInDrawer[2][1]) > 0)) {
      // console.log('DIME'); 
      logCoins();
      update(2, 0.1)
    } else if ((roundToTwo(needToCollect - hand - 0.05) >= 0) && (roundToTwo(cashInDrawer[1][1]) > 0)) {
      // console.log('NICKEL'); 
      logCoins();
      update(1, 0.05);
    } else if ((roundToTwo(needToCollect - hand - 0.01) >= 0) && (roundToTwo(cashInDrawer[0][1]) > 0)) {
      // console.log('PENNY'); 
      logCoins();
      update(0, 0.01);  
    } else if ((roundToTwo(hand)) === roundToTwo(needToCollect)) {
      // console.log(`Cash register opened.`);
      change.status = 'OPEN';
    } else {
      // console.log('Insufficient funds.');
      change.status = 'INSUFFICIENT_FUNDS';
      collected = [];
    }
  }

  while ((change.status === 'PROCESSING')) {
    collectChange();
  }  
  
  // console.log(hand);
  // console.log(needToCollect);
  // console.log((needToCollect - hand));
  // console.log(collected);
  // console.log(availableCash(cid));

  collected.reverse().forEach((slot) => {
    if (slot[1] > 0) {
      change.change.push(slot);
    }
  });

  if (availableCash(cid) === 0 && !(change.status === 'INSUFFICIENT_FUNDS')) {
    change.status = 'CLOSED';
    change.change = collected.reverse();
  }
  // Here is your change, ma'am.
  return change;
}

// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.1],
// ["QUARTER", 4.25],
// ["ONE", 90],
// ["FIVE", 55],
// ["TEN", 20],
// ["TWENTY", 60],
// ["ONE HUNDRED", 100]]

let showMe = checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);
console.log(showMe);
