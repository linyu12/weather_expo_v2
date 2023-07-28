import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';


interface TP {
    PLACE_NAME: string;
    //profileImage: any; // You can use 'string' if you are using image URLs, or 'number' if you are using image resources.
    TEMP: string;
    TEMP_FITURE: string;
    TEMP_TIME: string;
}


const TempPlace: React.FC<TP> = ({PLACE_NAME, TEMP, TEMP_FITURE, TEMP_TIME}) => {

    return (
        <View style={styles.container}>
        <Text style={styles.title}>{PLACE_NAME}{'\n'}{'\n'}</Text> 
        <Text style={styles.word}>  {/*Each child in a list should have a unique "key" prop. */}
            氣溫: {TEMP}°C {'\n'}
            天氣: {TEMP_FITURE} {'\n'} {'\n'}
        <Text style={styles.word_light}>
            上次更新時間: {'\n'} {TEMP_TIME} {'\n'}
        </Text>
        </Text>
        </View>
    )
};  


const styles = StyleSheet.create({
    container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    },
    title: {
    fontSize: 25,
    fontWeight: 'bold',
    },
    separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
    },
    word: {
    fontSize: 19,
    textAlign: 'center',
    },
    word_light: {
    fontSize: 15,
    textAlign: 'center',
    color: '#888888',
    },
});

    export default TempPlace;