 
console.log('szia, én meg a Order script file');


// szukséges: math.js

function multiplyWithCouponDiscount(price, qty, discount) {
  console.log('multiplyWithCouponDiscount a order.js-bol')
  return price * qty;
}

function orderHandling(item, price, qty) {
  console.log(`Item: ${item} osszes netto ar: ${multiplyWithCouponDiscount(price, qty, 10)}`)
}