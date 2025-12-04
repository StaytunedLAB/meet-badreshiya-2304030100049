function fetchData() {
  return new Promise((resolve, reject) => {
    console.log("Fetching data...");

    setTimeout(() => {
      const success = true;

      if (success) {
        resolve({ id: 1, name: "Meet" });
      } else {
        reject(new Error("Failed to fetch data"));
      }
    }, 1000);
  });
}

fetchData()
  .then(data => {
    console.log("Data:", data);
  })
  .catch(err => {
    console.log("Error:", err.message);
  });
