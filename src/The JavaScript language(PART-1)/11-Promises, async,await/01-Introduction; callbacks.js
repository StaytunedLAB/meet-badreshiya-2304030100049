function fetchData(callback) {
  console.log("Fetching data...");

  setTimeout(() => {
    const data = { id: 1, name: "Meet" };
    callback(data); // call the callback when done
  }, 1000);
}

function handleData(result) {
  console.log("Data received:", result);
}

fetchData(handleData);
