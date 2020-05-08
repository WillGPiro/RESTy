export const makeRequest = (url, method = 'GET', body) => {
  return fetch(url, { 
    method, 
    body: body ? JSON.stringify(JSON.parse(body)) : undefined  
  })
    .then(res => res.json());
};

