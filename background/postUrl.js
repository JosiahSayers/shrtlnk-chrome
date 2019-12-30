async function postUrl(url) {
  response = await fetch('https://shrtlnk.dev/api/v2/link', {
    method: 'POST',
    body: JSON.stringify({ url }),
    headers: {
      'Content-Type': 'application/json',
      'api-key': '347ko7BRVqxiNDg7M9925CZb+AzdXSaFULdKRVYNuYU='
    }
  });

  return await response.json();
}