import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'

const Items = ({name, symbol, currentPrice, priceChangePercent, logoUrl}) => {
    const colorChange = priceChangePercent > 0 ? 'green' : 'red'

    return(
        <TouchableOpacity>
            <View style={styles.divItem}> 
                {/* left side */}
               <View style={styles.leftDiv}>
                    <Image source={{ uri: logoUrl}} style={styles.Images}/>
                    <View style={styles.divTitles}>
                        <Text style={styles.title}>{name}</Text>
                        <Text style={styles.subtitle}>{symbol}</Text>
                    </View>
               
               </View>
                {/* right side */}
               <View style={styles.rightDiv}>

                    <Text style={styles.title}>${currentPrice.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</Text>
                    <Text style={styles.subtitle, {color: colorChange}}>{priceChangePercent.toFixed(2)}%</Text>
               </View>
            </View>
        </TouchableOpacity>
        
)
}
const styles = StyleSheet.create({
    divItem:{
        paddingHorizontal:16,
        marginTop: 24,
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: "center",
    },
    
    Images:{
        width: 48,
        height: 48, 
    },
    leftDiv: {
        flexDirection: "row",
        alignItems: 'center',
        
    },
    rightDiv:{
        alignItems: 'flex-end',

    },
    title:{
        color: '#22223b',
        marginLeft: 8,
        fontSize: 18,
    },
    subtitle:{
        marginTop: 4,
        fontSize: 14,
        marginLeft: 8,
        color: '#9a8c98',
        textTransform: 'uppercase',
    },
})
export default Items