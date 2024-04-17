import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  Image,
  Text,
  FlatList,
  ImageBackground,
} from 'react-native';
import colors from '../Utils/colors';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const CardItem = ({title}) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/products?offset=2&limit=10')
      .then(response => response.json())
      .then(data => {
        setProducts(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const renderItem = ({item}) => {
    const image = item.images.length > 0 ? item.images[0] : null;

    return (
      <View style={styles.container}>
      {products.map((item) => {
        const image = item.images.length > 0 ? item.images[0] : null;

        return (
          <View key={item.id} style={styles.item}>
            {image ? (
              <View style={{ borderRadius: 20, height:290,paddingBottom:20, maxWidth: '100%', width: '90%' }}>
                <Image
                  source={{ uri: image }}
                  style={styles.image}
                />
                <View style={{ maxWidth: '100%', width: '100%' }}>
                  <Text style={{ color: 'black', fontWeight: '600' }}>{item.title}</Text>
                 
                  <Text style={{ color: 'gray', fontWeight: '600' }} numberOfLines={1}>{item.description}</Text>
                  <Text style={{ color: 'green', fontWeight: '600' }} numberOfLines={1}>R$ {item.price},90</Text>
               
                </View>
              </View>
            ) : (
              <Text>No Image</Text>
            )}
          </View>
        );
      })}
      <View style={{ height: 200 }} /> 
    </View>
    );
  };

  return (
    <View style={{width: '100%', marginTop: 20, maxWidth: '100%'}}>
      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        numColumns={2}
        ListFooterComponent={
                    <View style={{height:'100%', width: '100%'}} />
                  }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  item: {
    width: 200,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  
  },
  image: {

   borderTopLeftRadius:19,
   borderBottomRightRadius:19,
    borderBottomRightRadius:19,
    width:'100%',
    height:'80%'

  },
});

export default CardItem;