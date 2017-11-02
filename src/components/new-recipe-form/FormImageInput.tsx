import React from 'react';
import { StyleSheet, StyleProp, TextStyle, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import ImagePicker from 'react-native-image-crop-picker';

import { imagePickerImageSize } from 'src/assets/constants';
import { formatImageBase64Uri } from 'src/utils';

interface Props {
  input: {
    name: string;
    value: string;
    onChange: (text: string) => void;
  };
}

class FormImageInput extends React.Component<Props> {
  onPress = async () => {
    try {
      const { input: { onChange } } = this.props;
      const image: any = await ImagePicker.openPicker({
        ...imagePickerImageSize,
        cropping: true,
        includeBase64: true,
      });
      onChange(formatImageBase64Uri(image));
    } catch (error) {}
  };

  render() {
    const { input: { value } } = this.props;
    return (
      <TouchableOpacity style={styles.imageContainer} onPress={this.onPress}>
        {value.length ? (
          <Image style={styles.recipeImage} source={{ uri: value }} resizeMode="cover" />
        ) : (
          <Icon name="ios-images-outline" size={100} />
        )}
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  imageContainer: {
    width: '100%',
    height: 220,
    alignItems: 'center',
    justifyContent: 'center',
  },
  recipeImage: {
    width: '100%',
    height: '100%',
  },
});

export default FormImageInput;
