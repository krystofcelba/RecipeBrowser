import { NativeModules } from 'react-native';

import { mockedImagePickerImage } from 'src/__mockData__';

NativeModules.ImageCropPicker = { openPicker: () => Promise.resolve(mockedImagePickerImage) };
export default NativeModules.ImageCropPicker;
