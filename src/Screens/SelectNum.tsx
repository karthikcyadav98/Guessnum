import React, {FC, useState} from 'react';
import {View, FlatList, Text, StyleSheet} from 'react-native';
import {Navigation} from '../Navigation/NavInterface';
import {Appbar} from 'react-native-paper';
import Item from './Item';
import Button from '../common/Button';
import Header from '../common/Header';

const Home: FC<Navigation> = props => {
  const Numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
  const [select, setSelect] = useState<string>('');

  const handleSelect = (item: string, index: number) => {
    setSelect(item);
  };

  const handleNext = () => {
    props.navigation.replace('GuessNum', {select: select});
  };

  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.headingView}>
        <Text style={styles.heading}>Select a Number</Text>
      </View>
      <View style={styles.grid}>
        <FlatList
          style={styles.listView}
          keyExtractor={item => item}
          data={Numbers}
          numColumns={3}
          renderItem={({item, index}) => (
            <Item
              disable={false}
              index={index}
              borderColor="#6101EE"
              backgroundColor={select === item ? '#6101EE' : '#fff'}
              color={select === item ? '#fff' : '#000'}
              item={item}
              handleClick={handleSelect}
            />
          )}
        />
      </View>

      <Button disable={select === ''} name="NEXT" onClick={handleNext} />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  grid: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  listView: {borderColor: '#6101EE', borderWidth: 1},
  headingView: {
    margin: 30,
    alignItems: 'center',
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
});
