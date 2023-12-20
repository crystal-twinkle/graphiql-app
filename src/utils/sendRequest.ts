async function sendRequest(url: string, query: string) {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({ query }),
  });

  const result = await response.json();
  console.log(typeof result);

  return result;
}

export { sendRequest };
