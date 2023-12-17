import { useEffect, useState } from 'react';
import { prettify } from '../../utils/prettifier';

function ResponseSection() {
  const [result, setResult] = useState('');
  const url = 'https://countries.trevorblades.com/graphql';
  const req = `{
    countries {
      code
      name
      emoji
    }
  }`;

  async function sendRequest(url: string, query: string) {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({ query }),
    });

    const res = await response.json();
    console.log('Response before prettify:', JSON.stringify(res));
    const prettified = prettify(JSON.stringify(res), true);
    console.log('Response after prettify:', prettified);
    setResult(prettified);
  }

  useEffect(() => {
    sendRequest(url, req);
  });

  return (
    <section className="max-h-screen overflow-auto w-1/2 p-5 whitespace-pre-wrap">{result}</section>
  );
}

export default ResponseSection;
