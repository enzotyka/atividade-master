import React, { useState } from 'react'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import { insertIntoImovel } from '../database/Imovel'


const FormularioImovel = (props) => {

    const [contrato, setContrato] = useState('')
    const [endereco, setEndereco] = useState('')
    const [moradia, setMoradia] = useState('')
    const [aluguel, setAluguel] = useState(0)
    const [valorVenda, setValorVenda] = useState('0')
    const [quartos, setQuartos] = useState(0)
    const [banheiros, setBanheiros] = useState(0)
    const [locado, setLocado] = useState("não")
    const [condominio, setCondominio] = useState(0)

    const limpar = () => {
        setContrato('')
        setEndereco('')
        setMoradia('')
        setAluguel(0)
        setValorVenda(0)
        setQuartos(0)
        setBanheiros(0)
        setLocado("não")
        setCondominio(0)
    }

    const salvar = () => {
        const imovelSalvar = {
            contrato: contrato,
            endereco: endereco,
            moradia: moradia,
            aluguel: aluguel,
            valorVenda: valorVenda,
            quartos: quartos,
            banheiros: banheiros,
            locado: locado,
            condominio: condominio
        }
        insertIntoImovel(imovelSalvar);
        limpar();
    }

    const listarimovel = () => {
        return imovel.map((pessoa) => 
            <Text key={imovel.cpf}>
                {imovel.nome} - {imovel.cpf} - {imovel.nascimento}- {imovel.vencimento}- {imovel.inicioContrato}- {imovel.fimContrato}
            </Text>
            )
    }

    return (
        <View style={style.formulario}>
            <Text>contrato:</Text>
            <TextInput value={contrato} 
                onChangeText={setContrato} 
                style={style.input} />
            <Text>endereco:</Text>
            <TextInput value={endereco}
                onChangeText={setEndereco} 
                style={style.input} />
            <Text>moradia:</Text>
            <TextInput value={moradia}
                onChangeText={setMoradia}
                style={style.input} 
                />
            <Text>aluguel:</Text>
            <TextInput value={aluguel}
                onChangeText={setAluguel}
                style={style.input}
                keyboardType='numeric' />
            <Text>valor Venda:</Text>
            <TextInput value={valorVenda}
                onChangeText={setValorVenda}
                style={style.input} 
                keyboardType='numeric' />  
            <Text>quartos:</Text>
            <TextInput value={quartos}
                onChangeText={setQuartos}
                style={style.input} 
                keyboardType='numeric' /> 
            <Text>banheiros:</Text>
            <TextInput value={banheiros}
                onChangeText={setBanheiros}
                style={style.input} 
                keyboardType='numeric' /> 
            <Text>locado:</Text>
            <TextInput value={locado}
                onChangeText={setLocado}
                style={style.input} 
                 />
            <Text>condominio:</Text>
            <TextInput value={condominio}
                onChangeText={setCondominio}
                style={style.input} 
                keyboardType='numeric' />
            <Button title='Limpar' onPress={limpar} />
            <Button title='Salvar' onPress={salvar} />
            {/* {
                imovel.length > 0 && listarimovel()
            }
            {
                imovel.length === 0 && 
                <Text>Nenhum imóvel cadastrado!</Text>
            } */}
        </View>
    )
}

const style = StyleSheet.create({
    formulario: {
        padding: 30
    },
    input: {
        borderWidth: 1,
        borderColor: 'gray'
    },
    labelApresentar: {
        fontSize: 22,
        fontWeight: 'bold'
    }
})

export default FormularioImovel;
