import { Text, View, SafeAreaView, StyleSheet, TextInput } from 'react-native';
import { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import axios from 'axios';

const SignUpPage = ({ navigation }) => {
    const [username, setName] = useState();
    const [userpassword, setPassword] = useState();
    const [usermail, setMail] = useState();

    const handleSubmit = (event) => {
        event.preventDefault();
        axios({
            method: 'post',
            url: 'https://api.escuelajs.co/api/v1/users/',
            data: {
                name: username,
                email: usermail,
                password: userpassword,
                avatar: 'https://api.lorem.space/image/face?w=660&h=500',
                role: 'developer'
            },
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
        }).then((response) => {
            console.log("response", JSON.stringify(response.data))
            navigation.navigate('Login')
        }).catch((error) => {
            console.log("error", error);
            navigation.navigate('Login')

        })
    }
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ backgroundColor: 'chartreuse', height: 800 }}>

                <Text style={styles.text}>SignUp Page </Text>

                <View style={styles.iconText}>
                    <Icon style={styles.icon} size={20} name="user" />
                    <TextInput style={styles.textInput} placeholder="Enter Username" value={username} onChangeText={(value) => setName(value)} />
                </View>

                <View style={styles.iconText}>
                    <Icon style={styles.icon} size={20} name="key" />
                    <TextInput style={styles.textInput} secureTextEntry={true} placeholder="Enter Password" value={userpassword} onChangeText={(value) => setPassword(value)} />
                </View>

                <View style={styles.iconText}>
                    <Icon style={styles.icon} size={20} name="inbox"/>
                    <TextInput style={styles.textInput} keyboardType='email-address' placeholder="Enter E-mail" value={usermail} onChangeText={(value) => setMail(value)} />
                </View>

                <View style={{ width: 90, margin: 20, marginLeft: 150, flexDirection: 'row' }}>
                    <Icon.Button
                        name="lock"
                        size={20}
                        backgroundColor="limegreen"
                        disabled={!username || !userpassword || !usermail}
                        onPress={handleSubmit}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>SignUp</Text>
                    </Icon.Button>
                </View>
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
export default SignUpPage;






