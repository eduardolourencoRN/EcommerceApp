import React from 'react';
import { ScrollView, View } from 'react-native';

import { CustomHeader } from '../../Componentes/CustomHeader';
import CarrouselBanner from '../../Componentes/CarrouselBanner';
import { height, width } from '../../Utils/Dimensions';
import CategoryCarousel from '../../Componentes/CarrouselCategories';
import TodaySaller from '../../Componentes/TodaySaller';
import CardItem from '../../Componentes/CardItem';
export const HomeScreen = ({ navigation }) => (
  <ScrollView style={{flex:1}} >

  <View style={{alignItems: 'center', flex:1, maxWidth:'100%',}}>
<CustomHeader/>
<View style={{width: width,height: height  * 0.27,marginTop:20}}>

    <CarrouselBanner/>
</View>

<View style={{width:width, height:height, maxWidth:'95%'}}>
  <CategoryCarousel/>
  <TodaySaller/>
  <CardItem/>
</View>
  </View>
  </ScrollView>
);


