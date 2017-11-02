export const base64Uri = 'data:image/jpeg;base64,xxxxxxxxx';

export const addRecipeFormValues = {
  name: 'recipe',
  description: 'desc',
  image: base64Uri,
  ingredients: [{ name: 'aa', amount: 1, unit: 'kg' }] as [{ name: string; amount: number; unit: string }],
  seasonings: ['red powder'] as [string],
  steps: ['ddd'] as [string],
};

export const mockedImagePickerImage = {
  path: '/xxx',
  mime: 'image/json',
  data: 'xxxxxxx',
};
