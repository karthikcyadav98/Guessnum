import React, {FC, useEffect, useState} from 'react';
import {View, Text, StyleSheet, FlatList, Alert} from 'react-native';
import {Navigation} from '../Navigation/NavInterface';
import Header from '../common/Header';
import Item from './Item';

const GuessNum: FC<Navigation> = props => {
  const {select} = props.route.params;
  const [grid, setGrid] = useState<any[]>([]);
  const [count, setCount] = useState<number>(0);
  const [isWon, setWon] = useState<string>('');

  useEffect(() => {
    getGridData();
  }, []);

  const handleGuess = (item: string, index: number) => {
    let prevData = [...grid];
    prevData[index].check = true;
    setGrid(prevData);

    setCount(count + 1);
    if (count + 1 <= 3 && select === item) {
      setWon('won');
      handleMessage('Congratulations', 'You have Won🥳🎉');
    } else {
      if (count + 1 >= 3) {
        handleMessage('Game Over', 'Better luck next time😀');
      }
    }
  };

  const handleMessage = (heading: string, message: string) => {
    Alert.alert(heading, message, [
      {text: 'OK', onPress: () => props.navigation.replace('SelectNum')},
    ]);
  };

  const getGridData = () => {
    for (var arr = [], i = 1; i < 10; ++i) {
      arr[i - 1] = {value: i.toString(), check: false};
    }
    arr = shuffle(arr);

    setGrid(arr);
  };

  const shuffle = (array: Array<any>) => {
    var tmp,
      current,
      top = array.length;
    if (top)
      while (--top) {
        current = Math.floor(Math.random() * (top + 1));
        tmp = array[current];
        array[current] = array[top];
        array[top] = tmp;
      }
    return array;
  };

  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.headerView}>
        <Text style={[styles.header, styles.C6101EE]}>
          You Selected {select}
        </Text>
      </View>

      <View style={styles.headerView}>
        <Text style={[styles.header, styles.black]}>
          Click on below grid to try your luck
        </Text>
      </View>

      <View style={styles.grid}>
        <FlatList
          style={styles.listView}
          keyExtractor={item => item.value}
          data={grid}
          numColumns={3}
          renderItem={({item, index}) => (
            <Item
              disable={count >= 3}
              index={index}
              borderColor="#fff"
              backgroundColor={item.check ? '#fff' : '#6101EE'}
              color={item.check ? '#000' : '#6101EE'}
              item={item.value}
              handleClick={handleGuess}
            />
          )}
        />
      </View>
    </View>
  );
};

export default GuessNum;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerView: {
    margin: 20,
    alignItems: 'center',
  },
  header: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#6101EE',
  },
  C6101EE: {
    color: '#6101EE',
  },
  black: {
    color: '#000',
  },
  grid: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  listView: {borderColor: '#fff', borderWidth: 1},
});
