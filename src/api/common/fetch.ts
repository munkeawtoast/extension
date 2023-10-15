async function internalFetch(input: RequestInfo | URL, init?: RequestInit) {
  return fetch(input, {
    mode: 'no-cors',
    ...init,
  })
}

export default internalFetch
