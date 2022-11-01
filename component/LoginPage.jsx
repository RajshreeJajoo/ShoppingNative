import { TextInput, Text, SafeAreaView, View, Image, StyleSheet } from "react-native"
import Icon from 'react-native-vector-icons/FontAwesome';
import { useState } from "react";
import axios from 'axios';
import Reactotron from 'reactotron-react-native'

const LoginPage = ({ navigation }) => {
    const [name, setName] = useState();
    const [password, setPassword] = useState();

    const onSumbit = () => {
        axios.get(`https://api.escuelajs.co/api/v1/users`).then((res) => {
            // console.log("users",res.data)
            let userdetails = res.data;
            //  Reactotron.log('hello rendering world')

            let userProfile;
            for (let i = 0; i < userdetails.length; i++) {
                if (name == userdetails[i].name && password == userdetails[i].password) {
                    userProfile = userdetails[i];
                    navigation.navigate('Shopping', {
                        paramKey: { name, userProfile }
                    })
                    break;
                }
                else {
                    navigation.navigate('Error')
                }
            }
        })
    }

    const onSignUp=()=>{
        navigation.navigate('SignUp', {
        })
    }
    return (
        <SafeAreaView style={{ flex: 1, marginTop: 60 }}>
            <View style={{ backgroundColor: 'chartreuse', height: 800 }}>

                <Text style={styles.text}>Login Page </Text>

                <View style={styles.iconText}>
                    <Icon style={styles.icon} size={20} name="user" />
                    <TextInput style={styles.textInput} placeholder="Enter Username" value={name} onChangeText={(value) => setName(value)} />
                </View>

                <View style={styles.iconText}>
                    <Icon style={styles.icon} size={20} name="key" />
                    <TextInput style={styles.textInput} secureTextEntry={true} placeholder="Enter Password" value={password} onChangeText={(value) => setPassword(value)} />
                </View>

                <View style={{ width: 90, margin: 20, marginLeft: 80, flexDirection: 'row' }}>
                    <Icon.Button
                        name="lock"
                        size={20}
                        backgroundColor="limegreen"
                        disabled={!name || !password}
                        onPress={onSumbit} >
                        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Login</Text>
                    </Icon.Button>
                    <View style={{ margin: 20 }} />
                    <Icon.Button
                        name="unlock"
                        size={20}
                        backgroundColor="limegreen"
                        onPress={onSignUp}
                    >
                        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>SignUp</Text>
                    </Icon.Button>
                </View>
                <Image source={{ uri: 'https://365psd.com/images/previews/744/green-shopping-bag-52161.png' }}
                    style={{ marginTop: 30, width: 400, height: 300, borderRadius: 30, marginRight: 12 }} />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    textInput: {
        borderWidth: 2,
        padding: 5,
        margin: 5,
        borderRadius: 10,
        width: 250

    },
    iconText: {
        flexDirection: 'row',
        padding: 15,
        marginLeft: 35,

    },
    icon: {
        marginLeft: 20,
        marginTop: 15
    },
    text: {
        textAlign: 'center',
        marginTop: 100,
        marginBottom: 20,
        fontWeight: 'bold',
        fontSize: 30

    }
})

export default LoginPage;


// name:"Jhon"
// password: "changeme"

// name: "Maria"
// password: "12345"


// name: "Admin"
// password: "admin123"

// name: "Jhon1"
// password: "changeme123"


// name: "James"
// password: "changeme3"

// name: "evil"
// password: "123"


// name: "asem"
// password: "12345"

// name: "Nicolas"
// password: "123"
