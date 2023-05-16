function descendingOrder(n) {
  var digits = String(n).split('');
  var sortedDigits = digits.sort(function(a, b) {
    return b - a;
  });
  return Number(sortedDigits.join(''));
}
