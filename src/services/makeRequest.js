const BODY_METHODS = ['POST', 'PUT', 'PATCH'];

export const makeRequest = (url, method = 'GET', body) => {
  return fetch(url, { 
    method, 
    body: BODY_METHODS.includes(method) ? body : null,  
  })
    .then(res => res.json());
};

