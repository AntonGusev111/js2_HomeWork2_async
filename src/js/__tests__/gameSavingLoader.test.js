import gameSavingLoader from '../gameSavingLoader.js';

jest.setTimeout(15000);
test('test promise chain', (done) => {
  const result = gameSavingLoader.load().then((value) => {
    const toBe = "{\"id\":9,\"created\":1546300800,\"userInfo\":{\"id\":1,\"name\":\"Hitman\",\"level\":10,\"points\":2000}}" 
    expect(value).toEqual(toBe);
    done();
  });

});
