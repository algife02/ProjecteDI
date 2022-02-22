import React from "react";
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { Button, Card, Title, Paragraph } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import {llista} from "../utils/utils"


export default function Llista(){
    const navigation = useNavigation()
    return(
        <View style={styles.layout}>
            <Button
                color='white'
                onPress={() => navigation.goBack()}
                style={styles.button2}
            >Tornar</Button>
            <Title style={styles.title}>Creativitat</Title>
            <ScrollView>
            {llista.map((objecte,index)=>{

                return <Card key={index} style={styles.card} onPress={()=> navigation.navigate("Projecte", {projecte: objecte})}>
                <Card.Title title={objecte.nom + " [" +objecte.modul+"]"}/>

                <Card.Content>
                  <Paragraph style={styles.paragraph}>{objecte.descripcio}</Paragraph>
                </Card.Content>
                <Card.Cover source={objecte.imatge} style={styles.image}/>
                {/* <Card.Actions>
                  <Button>Cancel</Button>
                  <Button>Ok</Button>
                </Card.Actions> */}
              </Card>
            })}
            </ScrollView>
            {/* <Image source={require("./assets/bike.png")} style={styles.image} /> */}
            {/* {console.log(llista[0].imatge)} */}
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
        color: "white"
    },
    image: {
        height: 160,
        marginTop: 15,
    },
    button: {
        backgroundColor: '#7F7F7F',
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
    }
});