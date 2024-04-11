import React, { useRef, useState, useEffect } from 'react';
import { View, FlatList, Image,StyleSheet } from 'react-native';
import { width, height } from '../Utils/Dimensions';

const images = [
  'https://img.freepik.com/free-psd/black-friday-super-sale-web-banner-template_120329-2157.jpg?w=826&t=st=1712792303~exp=1712792903~hmac=cd9be21f8c19b52a1c2c5baa54998b15a323d845831e4eff28e212e785bfd931',
  'https://img.freepik.com/free-psd/black-friday-super-sale-web-banner-template_120329-2150.jpg?w=826&t=st=1712792410~exp=1712793010~hmac=f16da4402931004da068eadfc4ef3679f47258676f0d4f9710aaa2c4680886f6',
  'https://img.freepik.com/free-psd/black-friday-super-sale-web-banner-template_120329-3862.jpg?w=826&t=st=1712792468~exp=1712793068~hmac=2259595ab8cae50306aff0c012cdfcde078c0d37cfcf00e7e03a6a486f30093d'
];

const CarrouselBanner = () => {
  const flatListRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      if (currentIndex < images.length - 1) {
        flatListRef.current.scrollToIndex({ index: currentIndex + 1 });
        setCurrentIndex(currentIndex + 1);
      } else {
        flatListRef.current.scrollToIndex({ index: 0 });
        setCurrentIndex(0);
      }
    }, 7000);

    return () => clearInterval(timer);
  }, [currentIndex]);

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={images}
        keyExtractor={(item, index) => index.toString()}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <Image
            source={{ uri: item }}
            style={{ width: width * 0.94, height: height * 0.25, borderRadius: 20,marginHorizontal:1}}
            resizeMode="cover"
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width,
    height: height * 0.25,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal:11,

  },
});

export default CarrouselBanner;
