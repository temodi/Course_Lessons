
console.log('szia, én vagyok az Math script file');

const PI = 3.14;

// coupon_price = 10
function multiplyWithCouponDiscount(item_price, qty, coupon_price) {
  console.log('multiplyWithCouponDiscount a math.js-bol')
  return (item_price * qty) * ((100 - coupon_price) / 100);
}