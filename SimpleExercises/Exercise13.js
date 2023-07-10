// 13. Create a program that, given an amount in euros, indicates the minimum number of bills and the quantity
// surplus that can be used to get that amount. For example, €232:
// 1 200 bill
// 1 20 bill
// 1 10 bill
// 2 left over

"use strict";
let twoHundredBill = 0;
let twentyBill = 0;
let tenBill = 0;
let rest = 0;
let eur = askEur();

if (eur / 200 >= 1) {
  twoHundredBill = Math.floor(eur / 200);
  eur = eur - 200 * twoHundredBill;
}
if (eur / 20 >= 1) {
  twentyBill = Math.floor(eur / 20);
  eur = eur - 20 * twentyBill;
}
if (eur / 10 >= 1) {
  tenBill = Math.floor(eur / 10);
  eur = eur - 10 * tenBill;
}
rest = eur;

console.log(
  twoHundredBill +
    " bill of 200€\n" +
    twentyBill +
    " bill of 100€\n" +
    tenBill +
    " bill of 10€\nrest " +
    rest +
    "€"
);

/**
 *
 * @returns a positive amount of euros
 */
function askEur() {
  let eur = readInt("Enter a positive amount of euros: ");
  if (eur <= 0) {
    throw Error("The amount must be positive");
  }
  return eur;
}
