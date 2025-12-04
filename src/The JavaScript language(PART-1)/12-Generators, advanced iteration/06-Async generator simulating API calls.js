
//Async iteration and async generators

function fakeApiRequest(id) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ id, data: "Item " + id });
    }, 400);
  });
}

async function* fetchItems(ids) {
  for (const id of ids) {
    const item = await fakeApiRequest(id);
    yield item;
  }
}

(async () => {
  const ids = [101, 102, 103];

  for await (const item of fetchItems(ids)) {
    console.log("Received:", item);
  }
})();
