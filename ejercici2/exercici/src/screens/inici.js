import * as React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
const Inici = (props) => {
    const navigation = useNavigation();
    return (
        <View style={styles.layout}>
            <Button
                color='white'
                style={styles.button2}
            >Credits</Button>
            <Image source={require('../assets/florida.png')} style={styles.image} />
            <View style={styles.view2}>
                <Button
                    color='white'
                    style={styles.button}
                    labelStyle={{fontSize: 22}}
                >Crear Projecte</Button>
                <Button
                    color='white'
                    style={styles.button}
                    labelStyle={{fontSize: 22}}
                >Votar</Button>
                <Button
                    color='white'
                    onPress={() => navigation.navigate('Inici2')}
                    style={styles.button}
                    labelStyle={{fontSize: 22}}
                >Informació</Button>
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
    image: {
        width: 350,
        height: 160,
        marginTop: 75,
    },
    button: {
        backgroundColor: 'red',
        width: 250,
        marginTop: 50,
        height: 50,
    },
    view2: {
        alignItems: 'center',
        marginTop: 20
    },
    button2: {
        backgroundColor: 'red',
        width: 100
    }
});
export default Inici;