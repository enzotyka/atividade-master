import React from "react";
import { SafeAreaView } from "react-native";
import { Button, StyleSheet, Text, TextInput, View } from 'react-native'

const Home = (props) => {
    const buttonColor='green'
    return(
        <SafeAreaView>
         <Text style={Style.title}>Imobiliária On-line</Text>
            <View style={Style.button}>
                <Button title='Cadastrar Imóvel' color={buttonColor} onPress={() => {
                    props.navigation.navigate("FormularioImovel");
                }}/>
            </View>
            <View style={Style.button}>
                <Button title='Cadastrar Locatário' color={buttonColor} onPress={() => {
                    props.navigation.navigate("FormularioLocatario");
                }}/>
            </View>
        </SafeAreaView>
    );
}
const Style = StyleSheet.create({
    safeAreaView: {
        marginHorizontal: 10,
        marginTop: 50
    },
    title: {
        fontSize: 22,
        fontWeight: '800',
        textAlign: 'center'
    },
    button: {
        margin: 10
    }
})
export default Home;