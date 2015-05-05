var createCircuit = require('./pb-circuit');
var circuit  = createCircuit(require('./config.json'));




circuit.balance.exec('hihi')
.then(function(value){
  console.log(value);
})
.catch(circuit.TimeoutError, function(error) {})
.catch(circuit.OpenCircuitError, function(error) {})
.catch(function(error) {})
.finally(function(){
  circuit.echo.stopEvents();
});

