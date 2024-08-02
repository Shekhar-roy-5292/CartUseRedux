import React from 'react';
import {Button, Image, Text, View} from 'react-native';
import styles from './StyleSheets/styles';
import {AddToCart} from './Redux/action';
import {useDispatch} from 'react-redux';
const Products = prop => {
  const data = prop.data;
  const dispatch = useDispatch();
  const handleAdd2Cart = item => {
    dispatch(AddToCart(item));
    // console.log('Add to cart', item);
  };
  return (
    <View>
      {data.map(item => (
        <View key={item.id} style={styles.ProductView}>
          <View style={styles.ProductListLeft}>
            <Image style={styles.ProductImage} source={{uri: item.image}} />
          </View>
          <View style={styles.ProductListRight}>
            <Text style={styles.ProductHeader}>{item.title}</Text>
            <Text style={styles.ProductCategory}>{item.category}</Text>
            <Text style={styles.ProductDescription}>{item.description}</Text>
            <Text style={styles.ProductPrice}>{item.price}</Text>
            <Button title="Add to Cart" onPress={() => handleAdd2Cart(item)} />
          </View>
        </View>
      ))}
    </View>
  );
};

export default Products;
