
//Dynamic imports
//Load a module only when needed.

console.log("App started");

// Dynamic import using then()
document.getElementById("btn-load").addEventListener("click", () => {
  import("./06-math.js")
    .then(module => {
      console.log("Module loaded!");
      console.log("square(5) =", module.square(5));
    })
    .catch(err => {
      console.error("Failed to load module:", err);
    });
});

// Same with async/await
async function loadAndUseMath() {
  const module = await import("./06-math.js");
  console.log("square(10) =", module.square(10));
}

// Optional: call it
// loadAndUseMath();
