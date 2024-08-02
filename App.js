import React, {useEffect, useState} from 'react';
import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import Header from './component/Header';
import Products from './component/Products';
import styles from './component/StyleSheets/styles';
const App = () => {
  const [data, setData] = useState([]);
  const ApiCall = async () => {
    const uri = 'https://fakestoreapi.com/products';
    let res = await fetch(uri);
    res = await res.json();
    setData(res);
  };
  useEffect(() => {
    ApiCall();
  }, []);
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Header />
        <ScrollView>
          <Products data={data} />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};
export default App;
