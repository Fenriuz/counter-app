describe('Tests in the file demo.test.js', () => {
  test('The strings must be the same.', () => {
    // 1. Initialization
    const message = 'Hello world';

    // 2. Stimulus
    const message2 = `Hello world`;

    // 3. Observe behavior
    expect(message).toBe(message2);
  });
});
