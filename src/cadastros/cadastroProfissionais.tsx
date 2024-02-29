import React, { useState } from "react";
import { Button, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, ViewComponent } from "react-native";


function CadastroProfisisonais(): JSX.Element {
    
    const [nome, setNome] = useState("");
    const [celular, setCelular] = useState("");
    const [email, setEmail] = useState("");
    const [cpf, setCpf] = useState("");
    const [dataNascimento, setDataNascimento] = useState("");
    const [cidade, setcidade] = useState("");
    const [estado, setestado] = useState("");
    const [pais, setPais] = useState("");
    const [rua, setRua] = useState("");
    const [numero, setNumero] = useState("");
    const [bairro, setBairro] = useState("");
    const [cep, setCep] = useState("");
    const [complemento, setComplemento] = useState("");
    const [password, setPassword] = useState("");
    const [salario, setSalario] = useState("");




    function CadastroProfisisonais(){
        const dados = {
            nome:nome,
            celular:celular,
            email:email,
            cpf:cpf,
            dataNascimento:dataNascimento,
            cidade:cidade,
            estado:estado,
            pais: pais,
            rua: rua,
            numero: numero,
            bairro: bairro,
            cep : cep,
            complemento: complemento,
            password: password,
            salario: salario


        }

        console.log(dados);
    }
    
    
    return (
        <ScrollView style={{height: '100%', width: "auto"}}>
        <View style={styles.container}>
            <Image
            style={{...styles.logo, marginTop: 20}}
            resizeMode="contain" 
            source={require('../assets/images/capivara1.png')}/>

            <View style={styles.card} >
                <Text style={styles.title} >Criar Profissionais</Text>

                <TextInput 
                style={styles.input}
                placeholder="Nome" 
                placeholderTextColor={"#141414"}
                onChangeText={(textNome) => setNome(textNome)}
                />
                
                <TextInput 
                style={styles.input}
                placeholder="Celular" 
                placeholderTextColor={"#141414"}
                keyboardType="phone-pad"
                onChangeText={(textCelular) => setCelular(textCelular)}
                />
                
                <TextInput 
                style={styles.input}
                placeholder="E-mail" 
                placeholderTextColor={"#141414"}
                keyboardType = "email-address"
                onChangeText={(textEmail) => setEmail(textEmail)}
                />
                
                
                <TextInput 
                style={styles.input}
                placeholder="Cpf" 
                placeholderTextColor={"#141414"}
                keyboardType= "numeric"
                onChangeText={(textCpf) => setCpf(textCpf)}
                />

                <TextInput 
                style={styles.input}
                placeholder="DataNascimento" 
                placeholderTextColor={"#141414"}
                onChangeText={(textDataNascimento) => setDataNascimento(textDataNascimento)}
                />

                <TextInput 
                style={styles.input}
                placeholder="Cidade" 
                placeholderTextColor={"#141414"}
                onChangeText={(textCidade) => setcidade(textCidade)}
                />

                <TextInput 
                style={styles.input}
                placeholder="Estado" 
                placeholderTextColor={"#141414"}
                onChangeText={(textEstado) => setestado(textEstado)}
                /> 

                <TextInput 
                style={styles.input}
                placeholder="Pais" 
                placeholderTextColor={"#141414"}
                onChangeText={(textPais) => setPais(textPais)}
                />

                <TextInput 
                style={styles.input}
                placeholder="Rua" 
                placeholderTextColor={"#141414"}
                onChangeText={(textRua) => setRua(textRua)}
                />

                <TextInput 
                style={styles.input}
                placeholder="Numero" 
                placeholderTextColor={"#141414"}
                keyboardType="numeric"
                onChangeText={(textNumero) => setNumero(textNumero)}
                />

                <TextInput 
                style={styles.input}
                placeholder="Bairro" 
                placeholderTextColor={"#141414"}
                onChangeText={(textBairro) => setBairro(textBairro)}
                />
                
                <TextInput 
                style={styles.input}
                placeholder="Cep" 
                placeholderTextColor={"#141414"}
                onChangeText={(textCep) => setCep(textCep)}
                />

                
                <TextInput 
                style={styles.input}
                placeholder="Complemento" 
                placeholderTextColor={"#141414"}
                onChangeText={(textComplemento) => setComplemento(textComplemento)}
                />
                
                <TextInput 
                style={styles.input}
                placeholder="Senha" 
                placeholderTextColor={"#141414"}
                onChangeText={(textPassword) => setPassword(textPassword)}
                secureTextEntry
                />

                <TextInput 
                style={styles.input}
                placeholder="Salario" 
                placeholderTextColor={"#141414"}
                onChangeText={(textSalario) => setSalario(textSalario)}
                secureTextEntry
                />

                <TouchableOpacity style={styles.buttom}
                onPress={()=>{CadastroProfisisonais()}}>
                    
                    <Text style={styles.buttonText}> Criar </Text>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Text style={styles.forgotPassword}> Já possui cadastro? Faça Login</Text>
                </TouchableOpacity>

                

            </View>
        </View>
 
        </ScrollView>
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
    
    forgotPassword: {
        color: '#F76900',
        textAlign: 'center',
        marginTop: 10
    }


});

export default CadastroProfisisonais;