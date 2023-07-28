import React from 'react';
import { View, StyleSheet } from 'react-native';
import TempPlace from './temp_place';
import {FetchExample} from './api';

interface background_props {
    backgroundColor: string;
}

interface ITEM {
    lat: string;
    lon: string;
    locationName: string;
    stationId: string;
    time: {
        obsTime: string;
    };
    weatherElement: {
        elementName: string;
        elementValue: string;
    }[];
    parameter: {
        parameterName: string;
        parameterValue: string;
    }[];
}
interface TP {
    PLACE_NAME: string;
    profileImage: any; // You can use 'string' if you are using image URLs, or 'number' if you are using image resources.
    TEMP: string;
    TEMP_FITURE: string;
    TEMP_TIME: string;
}

const YourComponent_2: React.FC<background_props> = ({ backgroundColor }) => {
    const data = FetchExample();
    return (
        <View style={[styles.container, { backgroundColor }]}>
        {data.map((item: ITEM) => {
            const weatherElement_weather = item.weatherElement.find(
                (element) => element.elementName === "Weather"
            );
            if (item.lat === "25.031331" && weatherElement_weather) {
                return(
                    <TempPlace key={item.stationId}
                        PLACE_NAME='台北市'
                        TEMP={item.weatherElement[3].elementValue}
                        TEMP_FITURE={weatherElement_weather?.elementValue}
                        TEMP_TIME={item.time.obsTime}
                    />
                );
            };
        })}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default YourComponent_2;
