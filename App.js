import React,{useEffect} from 'react'
import { SafeAreaView } from 'react-native'
import FormularioImovel from './src/components/FormularioImovel'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import FormularioLocatario from './src/components/FormularioLocatario'
import Home from './src/components/Home'
import { createTableImovel, findAllImovel } from './src/database/Imovel'

export default (props) => {
    const Stack = createNativeStackNavigator();

    async function queries(){
        await createTableImovel();
        await findAllImovel();
    }

    useEffect(
        () => {
            queries();
        }, []
    );
    return (
    <SafeAreaView style={{flex: 1}}>
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Home'>
                <Stack.Screen component={Home} name='Home'></Stack.Screen>
                <Stack.Screen component={FormularioImovel} name='FormularioImovel'></Stack.Screen>
                <Stack.Screen component={FormularioLocatario} name='FormularioLocatario'></Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    </SafeAreaView>
    );
}
