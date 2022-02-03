let counterModul = (function () {
  let count = 0;

  function inc() {
    count++;
  }

  function dec() {
    count--;
  }
  
  function show() {
    console.log('count:', count);
  }

  return {
    inc,
    dec,
    show
  }
})();