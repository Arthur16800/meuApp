import React, {useState} from "react";
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet, Button } from "react-native";
import api from '../axios/axios'
import { useNavigation } from '@react-navigation/native'

export default function Cadastro(){

    const navigation = useNavigation();
    
    const [user, setUser] = useState({
        name:'',
        email:'',
        cpf:'',
        password:'',
        data_nascimento:''

    })

    async function handleCadastro() {
        await api.postCadastro(user).then(
           (response)=>{
                console.log(response.data.message)
                Alert.alert(response.data.message)
           },(error)=>{
                console.log( error)
                Alert.alert('Erro', error.response.data.error)
           }
        )
    }



    return(
        <View style={styles.container}>
        <Text style={styles.title}>Faça Cadastro</Text>

        <TextInput style={styles.input}
        placeholder="Nome"
        value={user.name}
        onChangeText={(value)=> {setUser({...user,name: value})} }/>

        <TextInput style={styles.input}
        placeholder="Email"
        value={user.email}
        onChangeText={(value)=> {setUser({...user,email: value})} }
        keyboardType="email-address"
        />

        <TextInput style={styles.input}
        placeholder="CPF"
        value={user.cpf}
        onChangeText={(value)=> {setUser({...user,cpf: value})}}
        keyboardType="numeric"
        />

        <TextInput style={styles.input}
        placeholder="Data de nascimento"
        value={user.data_nascimento}
        onChangeText={(value)=> {setUser({...user,data_nascimento: value})} }
        keyboardType="numeric"
        />

        <TextInput style={styles.input}
        placeholder="Senha"
        value={user.password}
        onChangeText={(value)=> {setUser({...user,password: value})}}/>


        <TouchableOpacity onPress={handleCadastro} style={styles.button}>
            <Text>Cadastrar</Text>
        </TouchableOpacity>
        <Button title="Já tem uma conta? Faça login" onPress={()=>navigation.navigate("Login")}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    title:{
        fontSize:28,
        fontWeight:'bold'
    },
    input:{
        borderColor:'gray',
        width:'100%',
        height:40,
        borderBottomWidth:1,
        marginBottom:20,
        paddingHorizontal:10
    },
    button:{
        margin:5,
        backgroundColor:"#00A6FF",
        padding:10,
        boderRadius:5
    }
})