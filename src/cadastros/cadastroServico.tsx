import React, { useState } from "react";
import { Button, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, ViewComponent } from "react-native";


function CadastroServico(): JSX.Element {
    
    const [nome, setNome] = useState("");
    const [descricao, setDescricao] = useState("");
    const [duracao, setDuracao] = useState("");
    const [preco, setPreco] = useState("");
    



    function CadastroServico(){
        const dados = {
            nome:nome,
            descricao:descricao,
            duracao:duracao,
            preco:preco,
        
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
                placeholder="Nome" 
                placeholderTextColor={"#141414"}
                onChangeText={(textNome) => setNome(textNome)}
                />
                
                <TextInput 
                style={styles.input}
                placeholder="Descricao" 
                placeholderTextColor={"#141414"}
                onChangeText={(textDescricao) => setDescricao(textDescricao)}
                />
                
                <TextInput 
                style={styles.input}
                placeholder="Duracao" 
                placeholderTextColor={"#141414"}
                onChangeText={(textDuracao) => setDuracao(textDuracao)}
                />
                
                
                <TextInput 
                style={styles.input}
                placeholder="Preco" 
                placeholderTextColor={"#141414"}
                onChangeText={(textPreco) => setPreco(textPreco)}
                />
                
                <TouchableOpacity style={styles.buttom}
                onPress={()=>{CadastroServico()}}>
                    
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

export default CadastroServico;