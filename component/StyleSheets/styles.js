import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    Color: 'black',
  },
  text: {
    fontSize: 20,
  },
  button: {
    backgroundColor: '#f1f1f1',
    padding: 10,
    borderRadius: 5,
  },
  ProductView: {
    flex: 1,
    color: 'white',
    alignItems: 'center',
    flexDirection: 'row',
    borderColor: 'black',
    borderWidth: 2,
  },
  ProductListRight: {
    flex: 1,
  },
  ProductListLeft: {},
  ProductImage: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  ProductHeader: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  ProductCategory: {
    fontWeight: '700',
  },
});

export default styles;
