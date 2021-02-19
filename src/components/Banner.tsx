import React from 'react';
import {Image, ScrollView, StyleSheet, View} from 'react-native';

interface BannerProps {}

export const Banner: React.FC<BannerProps> = ({}) => {
  return (
    <View style={{flexDirection: 'row'}}>
      <ScrollView
        horizontal={true}
        contentContainerStyle={{width: `${80 * 3}%`}}
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={100}
        decelerationRate="fast"
        pagingEnabled
        style={styles.banner}>
        <Image
          source={require('../images/banner1.jpg')}
          style={styles.bannerimg}
        />
        <Image
          source={require('../images/banner2.jpg')}
          style={styles.bannerimg}
        />
        <Image
          source={require('../images/banner3.jpg')}
          style={styles.bannerimg}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    padding: 20,
  },
  banner: {
    height: 150,
    // padding: 10,
    margin: 10,
    borderRadius: 80,
  },
  bannerimg: {
    width: 250,
    marginRight: 20,
    borderRadius: 20,
    height: 145,
  },
});

export default Banner;
