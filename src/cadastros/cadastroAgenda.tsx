import React, { useState } from "react";
import { Button, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, ViewComponent } from "react-native";


function CadastroAgenda(): JSX.Element {
    
    const [profissional_id, setProfissional_id] = useState("");
    const [cliente_id, setCliente_id] = useState("");
    const [servico_id, setServico_id] = useState("");
    const [data_hora, setData_hora] = useState("");
    const [tipoPagamento, setTipoPagamento] = useState("");
    const [valor, setValor] = useState("");

    



    function cadastroAgenda(){
        const dados = {
            profissional_id:profissional_id,
            cliente_id:cliente_id,
            servico_id:servico_id,
            data_hora:data_hora,
            tipoPagamento: tipoPagamento,
            valor:valor
        
        }

        console.log(dados);
    }
    
    
    return (
       
        <View style={{...styles.container, marginTop: 20}}>
            <Image
            style={styles.logo}
            resizeMode="contain" 
            source={require('../assets/images/capivara1.png')}/>

            <View style={styles.card} >
                <Text style={styles.title} >Criar Servico </Text>

                <TextInput 
                style={styles.input}
                placeholder="Profissional" 
                placeholderTextColor={"#141414"}
                onChangeText={(textProfissional_id) => setProfissional_id(textProfissional_id)}
                />
                
                <TextInput 
                style={styles.input}
                placeholder="Cliente" 
                placeholderTextColor={"#141414"}
                onChangeText={(textCliente_id) => setCliente_id(textCliente_id)}
                />
                
                <TextInput 
                style={styles.input}
                placeholder="Servico" 
                placeholderTextColor={"#141414"}
                onChangeText={(textServico_id) => setServico_id(textServico_id)}
                />
                
                
                <TextInput 
                style={styles.input}
                placeholder="Horario" 
                placeholderTextColor={"#141414"}
                onChangeText={(textData_hora) => setData_hora(textData_hora)}
                />

                <TextInput 
                style={styles.input}
                placeholder="FormaPagamento" 
                placeholderTextColor={"#141414"}
                onChangeText={(textTipoPagamento) => setTipoPagamento(textTipoPagamento)}
                />
                
                <TextInput 
                style={styles.input}
                placeholder="Valor" 
                placeholderTextColor={"#141414"}
                onChangeText={(textValor) => setValor(textValor)}
                />

                <TouchableOpacity style={styles.buttom}
                onPress={()=>{CadastroAgenda()}}>
                    
                    <Text style={styles.buttonText}> Criar </Text>
                </TouchableOpacity>

            </View>
        </View>
      

    );

}

const styles =  StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2B59C3'
    },
    card: {
        backgroundColor: "#EEEEFF",
        width: 300,
        borderRadius: 10,
        padding: 20,
        elevation: 4,
        shadowColor: 'rgba(0,0,0,0.3)',
        shadowOffset: {width:0, height: 2},
        shadowOpacity: 0,
        shadowRadius: 2
    },

    logo: {
        width:120,
        height:120,
        marginBottom: 20,
        marginTop: -150,
    },

    title: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#141414',
        marginBottom:20,
        textAlign: 'center',
        fontFamily: 'Cochin'
        
    },
    
    input: {
        backgroundColor: '#FCF7F8',
        height: 40,
        marginBottom: 20,
        paddingHorizontal: 10,
        borderRadius: 23,
        borderWidth: 1,
        borderColor: '#141414'

    },

    buttom: {
        backgroundColor:'#8093F1',
        borderRadius: 23,
        height: 40
    },

    buttonText: {
        color: '#0C120C',
        textAlign: 'center',
        fontSize: 16,
        lineHeight: 40
    },
    


});

export default CadastroAgenda;