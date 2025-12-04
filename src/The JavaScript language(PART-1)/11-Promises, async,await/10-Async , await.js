function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function fetchUser() {
  console.log("Fetching user...");
  await delay(1000);

  // simulate data
  return { id: 1, name: "Meet" };
}

async function main() {
  try {
    const user = await fetchUser();
    console.log("User:", user);
  } catch (err) {
    console.log("Error:", err.message);
  } finally {
    console.log("Done in async function");
  }
}

main();
