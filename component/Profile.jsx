import { Text, View, StyleSheet } from "react-native"
import { Card, TextInput } from 'react-native-paper';
import { Avatar } from "react-native-paper";
import Icon from 'react-native-vector-icons/FontAwesome';

const Profile = ({ navigation }) => {
    let data = navigation.state.params.paramKey;
    let showprofile = false;

    const handleSubmit = () => {
        showprofile = true;
    }
    return (
        <View style={{ backgroundColor: 'chartreuse' }}>
            <Card style={{ marginTop: 2, height: 400, backgroundColor: 'light slate blue' }}>
                <Avatar.Image style={{ margin: 20 }} size={100} source={{ uri: data.detail.avatar }} />
                <Text style={styles.text}>Name :- {data.detail.name}</Text>
                <Text style={styles.text}>Email :- {data.detail.email}</Text>
                <Text style={styles.text}>Role :- {data.detail.role}</Text>
                <Text style={styles.text}>Password :- {data.detail.password}</Text>
                <View style={{ width: 140, margin: 20, marginLeft: 150, flexDirection: 'row' }}>
                    <Icon.Button
                        name="edit"
                        size={20}
                        backgroundColor="limegreen"
                        onPress={handleSubmit}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Edit Profile</Text>
                    </Icon.Button>
                </View>
                {showprofile ? <TextInput placeholder="edit name" /> : ''}
            </Card>
        </View>
    )
}
const styles = StyleSheet.create({
    text: {
        borderWidth: 2,
        marginTop: 10,
        margin: 5,
        padding: 5,
    }
})
export default Profile;