import React, {useState, useEffect } from 'react';
import { FlatList, StyleSheet, Text, View, SafeAreaView } from 'react-native'
import Items from './Components/Items';
import { getData } from './services/cryptoService'
import {
  AdMobBanner,
  AdMobInterstitial,
  PublisherBanner,
  AdMobRewarded,
  setTestDeviceIDAsync,
} from 'expo-ads-admob'



export default function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchMarketData = async () => {
      const marketData = await getData();
      setData(marketData);
    }

    fetchMarketData();
  }, [])


  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.divTitle}>
        <Text style={styles.title}>Crypto Agora</Text>
      </View>
      <View style={styles.line} />
      {/* banner */}
      <AdMobBanner
        bannerSize="fullBanner"
        adUnitID="ca-app-pub-6683680607769822/6304444199"
        servePersonalizedAds 
        onDidFailToReceiveAdWithError />
      {/* banner */}
      <FlatList
        keyExtractor={(item) => item.id}
        data={data}
        renderItem={({ item }) => (
          <Items
            name={item.name}
            symbol={item.symbol}
            currentPrice={item.current_price}
            priceChangePercent={item.price_change_percentage_7d_in_currency}
            logoUrl={item.image}
          />


        )

        }
      />
     
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2e9e4',

  },
  divTitle: {
    marginTop: 60,
    padding: 16,

  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#4a4e69",

  },
  line: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: "#4a4e69",
    marginHorizontal: 16,
    marginTop: 16,

  }
});
