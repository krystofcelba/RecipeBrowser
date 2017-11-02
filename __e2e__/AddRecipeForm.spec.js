const assert = require('assert');

const typeText = async (id, text) => {
  await element(by.id(id)).tap();
  await element(by.id(id)).typeText(`${text}\n`);
};

const hideKeyboard = async () => {
  await element(by.id('addRecipeFormScreen')).tapAtPoint({ x: 5, y: 10 });
};

describe('AddRecipeForm screen', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
    await element(by.id('addButton')).tap();
  });

  it('should not be able to submit form with validation errors', async () => {
    await element(by.id('name')).typeText('grape\n');

    try {
      await element(by.id('add')).tap();
      await expect(element(by.id('add'))).toBeNotVisible();
      assert.fail('add button should not be clickable, if there are validation errors');
    } catch (e) {
      assert.throws(() => {
        throw e;
      });
    }
  });

  it('should be able to submit valid form', async () => {
    await element(by.id('name')).typeText('recipe name\n');

    await typeText('description', 'recipe desc');

    await hideKeyboard();
    await element(by.id('ingredients:add')).tap();
    await typeText('ingredients[0].name', 'potatoes');
    await typeText('ingredients[0].amount', '9');
    await typeText('ingredients[0].unit', 'kg');

    await element(by.id('seasonings:add')).tap();
    await typeText('seasonings[0]', 'red powder');

    await element(by.id('steps:add')).tap();
    await typeText('steps[0]', 'Cook it!');

    try {
      await element(by.id('add')).tap();
      await expect(element(by.id('add'))).toBeNotVisible();
    } catch (e) {
      assert.ifError(() => {
        throw e;
      }, 'something wrong there! add button should be clickable now');
    }
  });
});
