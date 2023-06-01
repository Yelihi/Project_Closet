describe('Test', () => {
  function Test() {
    return 'hi';
  }
  it('say hello', () => {
    expect(Test()).toBe('hi');
  });
});

export {};
