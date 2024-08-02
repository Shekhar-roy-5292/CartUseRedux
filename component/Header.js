import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {useSelector} from 'react-redux';
const Header = () => {
  const CartItems = useSelector(state => state.reducer);
  const [Items, setItems] = React.useState([]);
  useEffect(() => {
    setItems(CartItems.length);
  }, [CartItems]);
  return (
    <View>
      <Text>CartItems = {Items}</Text>
    </View>
  );
};
export default Header;
