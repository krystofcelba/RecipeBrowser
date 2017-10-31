describe('Example', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have add button', async () => {
    await expect(element(by.id('addButton'))).toBeVisible();
  });

  it('should tap on add button', async () => {
    await element(by.id('addButton')).tap();
  });
});
