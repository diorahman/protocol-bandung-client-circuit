var prtklbdg = require('prtklbdg');
var CircuitBreaker = require('promise-circuitbreaker');
module.exports = function(config, options) {
  options = options || {
    timeout: 1000,
    errorThreshold: 0.1
  };
  var obj = {};
  var client = prtklbdg(config);
  client.methods.forEach(function(method){
    obj[method] = new CircuitBreaker(client[method], client, options);
  });
  obj.TimeoutError = CircuitBreaker.TimeoutError;
  obj.OpenCircuitError = CircuitBreaker.OpenCircuitError;
  return obj;
}
