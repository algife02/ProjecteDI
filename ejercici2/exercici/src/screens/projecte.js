import React from "react";
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { Button, Card, Title, Paragraph } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import MultiSlider from '@ptomasroos/react-native-multi-slider';


export default function Projecte(props){
    const navigation = useNavigation();
    return(
        <View style={styles.layout}>
            <Button
                color='white'
                onPress={() => navigation.goBack()}
                style={styles.button2}
            >Tornar</Button>
            <Title style={styles.title}>{props.route.params.projecte.nom}</Title>
            {/* {console.log(props.route.params.projecte.nom)} */}
            <View style={styles.view}>
                <Image source={props.route.params.projecte.imatge} style={styles.image}/>
                <Text style={{fontSize: 32}}>{props.route.params.projecte.nom}</Text>
                <Text style={{fontSize: 16}}>{props.route.params.projecte.descripcio}</Text>
                <Text style={{marginTop: 20}}>Creativitat</Text>
                <MultiSlider min={0} max={5} showSteps={true} showStepMarkers={true} allowOverlap={true} snapped={true} smoothSnapped={true}></MultiSlider>
                <Text>Implementar</Text>
                <MultiSlider min={0} max={5} showSteps={true} showStepMarkers={true} allowOverlap={true} snapped={true} smoothSnapped={true}></MultiSlider>
                <Text>Comunicacio</Text>
                <MultiSlider min={0} max={5} showSteps={true} showStepMarkers={true} allowOverlap={true} snapped={true} smoothSnapped={true}></MultiSlider>
            </View>
            <View style={{alignItems: "center"}}>
            <Button style={styles.button} color='black' onPress={()=> navigation.goBack()}>Votar</Button>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    layout: {
        flex: 1,
        padding: 8,
        backgroundColor: 'red'
    },
    title: {
        margin: 24,
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 20,
        marginBottom: 10,
        color: "white"
    },
    image: {
        width: 364,
        height: 160,
        marginTop: 15,
    },
    button: {
        backgroundColor: 'white',
        width: 250,
        marginTop: 50,
        height: 50,
    },
    view2: {
        alignItems: 'center',
        marginTop: 20
    },
    button2: {
        backgroundColor: '#7F7F7F',
        width: 100
    },
    card:{
        marginTop: 30,
        backgroundColor: "#7F7F7F"
    },
    paragraph: {
        fontSize: 16,
    },
    view:{
        alignItems: "center",
        backgroundColor: "#7F7F7F",
        width: 374,
        
    }
});