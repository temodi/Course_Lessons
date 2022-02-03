
console.log('szia, én meg a Order script file');

function orderHandling(item, price, qty) {
  console.log(`Item: ${item} osszes netto ar: ${multiplyWithCouponDiscount(price, qty, 10)}`)
}