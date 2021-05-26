import React, {FC} from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

interface Props {
  name: string;
  onClick: () => void;
  disable: boolean;
}

const Button: FC<Props> = props => {
  return (
    <TouchableOpacity
      disabled={props.disable}
      onPress={props.onClick}
      style={[styles.btn, props.disable ? styles.disable : styles.active]}>
      <Text style={styles.btnText}>{props.name}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  btn: {
    margin: 25,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  active: {backgroundColor: '#1BB954'},
  disable: {backgroundColor: '#aaa'},
  btnText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
});
