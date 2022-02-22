import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
const Inici2 = (props) => {
    const navigation = useNavigation();
    return (
        <View style={styles.layout}>
            <Button
                color='white'
                onPress={() => navigation.goBack()}
                style={styles.button2}
            >Tornar</Button>
            <View style={styles.view2}>
                <Button
                    color='white'
                    style={styles.button}
                    labelStyle={{fontSize: 20, height:60}}
                >Temps Real</Button>
                <Button
                    color='white'
                    onPress={() => navigation.navigate('Valorats')}
                    style={styles.button}
                    labelStyle={{fontSize: 20, height:60}}
                >Mes Valorats</Button>
            </View>
        </View> 
    );
};
const styles = StyleSheet.create({
    layout: {
        flex: 1,
        padding: 8,
        backgroundColor: '#7F7F7F'
    },
    title: {
        margin: 24,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    button2: {
        backgroundColor: 'red',
        width: 100
    },
    button: {
        backgroundColor: 'red',
        width: 250,
        marginTop: 100,
        height: 75,

    },
    view2: {
        alignItems: 'center',
        marginTop: 20,
    },
});
export default Inici2;