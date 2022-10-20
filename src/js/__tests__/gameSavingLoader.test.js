import gameSavingLoader from '../gameSavingLoader';

test('test promise chain', (done) => {
  const result = gameSavingLoader.load().then((value) => {
    return value
  });
  const toBe = {"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}
  expect(result).toBe(toBe);
  done();
});
