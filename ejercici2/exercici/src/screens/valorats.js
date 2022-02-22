import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const Valorats = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.layout}>
            <Button
                color='white'
                onPress={() => navigation.goBack()}
                style={styles.button2}
            >Tornar</Button>
            <Text style={styles.title}>Mes Valorats</Text>
            <View style={styles.view2}>
                <Button
                    color='white'
                    style={styles.button}
                    labelStyle={{fontSize: 20, height:60}}
                    onPress={()=> navigation.navigate("Llista")}
                >Creativitat</Button>
                <Button
                    color='white'
                    style={styles.button}
                    labelStyle={{fontSize: 20, height:60}}
                >Implementar</Button>
                <Button
                    color='white'
                    style={styles.button}
                    labelStyle={{fontSize: 20, height:60}}
                >Comunicació</Button>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    layout: {
        flex: 1,
        padding: 8,
        backgroundColor: '#7F7F7F'
    },
    title: {
        margin: 24,
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'white'
    },
    button2: {
        backgroundColor: 'red',
        width: 100
    },
    view2: {
        alignItems: 'center',
        marginTop: 20
    },
    button: {
        backgroundColor: 'red',
        width: 250,
        marginTop: 100,
        height: 75,
    },
});
export default Valorats;