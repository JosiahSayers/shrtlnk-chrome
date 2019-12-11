async function postUrl(url) {
  response = await fetch('https://shrtlnk.dev/api/v1/link', {
    method: 'POST',
    body: JSON.stringify({ url }),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  return await response.json();
}