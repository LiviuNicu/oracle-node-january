const counter = (function () {
  var privateCounter = 0;
  function changedBy(val) {
    privateCounter += val;
  }

  return {
    increment: function () {
      changedBy(1);
    },
    decrement: function () {
      changedBy(-1);
    },
    value: function () {
      return privateCounter;
    },
  };
})();
console.log(counter.value());
counter.increment();
counter.increment();
console.log(counter.value());
counter.decrement();
console.log(counter.value());
