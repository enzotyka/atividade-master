import React, { useState } from 'react'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native'

const FormularioLocatario = () => {

    const [nome, setNome] = useState("")
    const [cpf, setCpf] = useState("")
    const [nascimento, setnascimento] = useState(null)
    const [renda, setrenda] = useState(null)
    const [vencimento, setvencimento] = useState(null)
    const [inicioContrato, setinicioContrato] = useState(null)
    const [fimContrato, setfimContrato] = useState(null)
    const [imovel, setimovel] = useState([])

    // function limpar() {
        
    // }
    const limpar = () => {
        setNome("")
        setCpf("")
        setnascimento(null)
        setrenda(null)
        setvencimento(null)
        setinicioContrato(null)
        setfimContrato(null)
    }

    const salvar = () => {
        const imovelSalvar = {
            nome: nome,
            cpf: cpf,
            nascimento: nascimento,
            renda: renda,
            vencimento: vencimento,
            inicioContrato: inicioContrato,
            fimContrato: fimContrato
        }
        imovel.push(imovelSalvar)
        limpar()
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
            <Text>Nome:</Text>
            <TextInput value={nome} 
                onChangeText={setNome} 
                style={style.input} />
            <Text>CPF:</Text>
            <TextInput value={cpf}
                onChangeText={setCpf} 
                style={style.input} />
            <Text>nascimento:</Text>
            <TextInput value={nascimento}
                onChangeText={setnascimento}
                style={style.input} 
                keyboardType='numeric' />
             <Text>Renda Mensal:</Text>
            <TextInput value={renda}
                onChangeText={setrenda}
                style={style.input} 
                keyboardType='numeric' />
             <Text>Vencimento:</Text>
            <TextInput value={vencimento}
                onChangeText={setvencimento}
                style={style.input} 
                keyboardType='numeric' />  
             <Text>Início contrato:</Text>
            <TextInput value={inicioContrato}
                onChangeText={setinicioContrato}
                style={style.input} 
                keyboardType='numeric' /> 
                <Text>final do contrato:</Text>
            <TextInput value={fimContrato}
                onChangeText={setfimContrato}
                style={style.input} 
                keyboardType='numeric' /> 
            <Button title='Limpar' onPress={limpar} />
            <Button title='Salvar' onPress={salvar} />
            {
                imovel.length > 0 && listarimovel()
            }
            {
                imovel.length === 0 && 
                <Text>Nenhum imóvel cadastrado!</Text>
            }
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

export default FormularioLocatario;