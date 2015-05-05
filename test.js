var createCircuit = require('./');
var circuit  = createCircuit(require('./config.json'));

describe('Test the prtklbdg circuit', function(){
  it ('test the echo circuit', function(done){
    circuit.echo.exec('hihi')
    .then(function(value){
      value.should.equal('.hihi.');
    })
    .catch(circuit.TimeoutError, function(err){ console.log('circuit.TimeoutError'); })
    .catch(circuit.OpenCircuitError, function(){ console.log('circuit.OpenCircuitError'); })
    .catch(done)
    .finally(function(){
      circuit.echo.stopEvents();
      done();
    });
  });
});


