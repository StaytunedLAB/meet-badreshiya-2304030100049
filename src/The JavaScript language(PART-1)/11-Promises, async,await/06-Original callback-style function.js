
//Promisification (callback → promise)

function readDataCallback(callback) {
  setTimeout(() => {
    callback(null, "Some data");
  }, 500);
}
