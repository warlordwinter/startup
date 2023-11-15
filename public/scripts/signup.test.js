test('creates a JSON object with correct properties', () => {
  const username = 'testuser';
  const password = 'testpassword';
  const fullName = 'Test User';

  const expectedJson = {
    username: username,
    password: password,
    fullName: fullName
  };

  const actualJson = createJson(username, password, fullName);

  expect(actualJson).toEqual(expectedJson);
});