import React from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import colors from '../Utils/colors';

  const categories = [
    {
      name: 'Nike',
      image:
        'https://cdn-icons-png.freepik.com/256/732/732084.png?ga=GA1.1.100022072.1705966884&',
    },
    {
      name: 'Adidas',
      image:
        'https://cdn-icons-png.freepik.com/256/731/731962.png?ga=GA1.1.100022072.1705966884&',
    },
    {
      name: 'Puma',
      image:
        'https://cdn-icons-png.freepik.com/256/47/47137.png?ga=GA1.1.100022072.1705966884&',
    },
    {
      name: 'Gucci',
      image: 'https://img.icons8.com/?size=100&id=25272&format=png',
    },
   {
      name: 'Tenis',
      image: 'https://cdn-icons-png.freepik.com/256/10449/10449365.png?ga=GA1.1.100022072.1705966884&',
    },
  ];

const CategoryCarousel = () => {
  const renderItem = ({item}) => (
    <View style={{width:80, height:100, justifyContent: 'center',alignItems: 'center', gap:10, maxWidth:'90%'}}>
    <TouchableOpacity
      style={styles.categoryItem}
      onPress={() => handleCategoryPress(item.name)}>
      <Image source={{uri: item.image}} style={styles.categoryImage} />
    
    </TouchableOpacity>
      <Text style={styles.categoryName}>{item.name}</Text>
    </View>
  );

  const handleCategoryPress = categoryName => {
    // Aqui você pode adicionar a lógica para navegar para a tela da categoria selecionada
    console.log('Category selected:', categoryName);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={categories}
        keyExtractor={(item, index) => index.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({

  categoryItem: {
    alignItems: 'center',
    backgroundColor: colors.fifth,
    width: 70,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },
  categoryImage: {
    width: 30,
    height: 30,
  },
  categoryName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.sixth,
    

  },
});

export default CategoryCarousel;
