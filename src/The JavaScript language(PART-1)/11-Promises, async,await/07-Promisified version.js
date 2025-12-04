
//Promisification (callback → promise)

function readDataPromise() {
  return new Promise((resolve, reject) => {
    readDataCallback((err, data) => {
      if (err) reject(err);
      else resolve(data);
    });
  });
}

readDataPromise()
  .then(data => console.log("Data:", data))
  .catch(err => console.log("Error:", err));
