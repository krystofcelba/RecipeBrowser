describe('RecipesList screen', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should be able to search for a recipe with grapefruits and see its detail', async () => {
    await element(by.id('topSearchBar')).tap();
    await element(by.id('topSearchBar')).typeText('grape\n');
    await expect(element(by.id('recipeCard_2'))).toNotExist();

    await element(by.id('recipeCard_31')).tap();

    await expect(element(by.id('recipeDetailScreen'))).toBeVisible();
  });
});
