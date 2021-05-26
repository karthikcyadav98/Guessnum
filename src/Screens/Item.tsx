import React, {FC} from 'react';
import {TouchableOpacity, Text, Dimensions, StyleSheet} from 'react-native';

const WIDTH = Dimensions.get('window').width;

interface Props {
  disable: boolean;
  backgroundColor: string;
  borderColor: string;
  color: string;
  item: string;
  index: number;
  handleClick: (item: string, index: number) => void;
}

const Item: FC<Props> = props => {
  return (
    <TouchableOpacity
      disabled={props.disable}
      onPress={() => props.handleClick(props.item, props.index)}
      activeOpacity={0.5}
      style={[
        styles.container,
        {
          backgroundColor: props.backgroundColor,
          borderColor: props.borderColor,
        },
      ]}>
      <Text style={[styles.text, {color: props.color}]}>{props.item}</Text>
    </TouchableOpacity>
  );
};

export default Item;

const styles = StyleSheet.create({
  container: {
    width: WIDTH / 3.5,
    height: WIDTH / 3.5,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 25,
  },
});
