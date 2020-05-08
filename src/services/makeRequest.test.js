//see review on services from Ryans lecture on 5/4
describe('makeRequest service', () => {
  it('uses fetch with post and a body', () => {
    global.fetch = jest.fn(()=> Promise.resolve({
      json: () => Promise.resolve()
    }));
 
    return makeRequest ('https://test.com', 'POST', { test: 1234 })
      .then(() => {
        expect(global.fetch).toHaveBeenCalledWith('https://test.com', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ test: '1234' })
        });
      });
  });
});


 
