import { Card, Title } from 'react-native-paper';
import { Text, View, SafeAreaView, StyleSheet} from 'react-native';

const ErrorPage = () => {
    return (
        <SafeAreaView>
            <View style={{ backgroundColor: '#ffcbd1', height: 730 }}>
                <Card style={styles.container}>
                    <Card.Content>
                        <Title style={styles.heading}>Error Form</Title>
                    </Card.Content>
                    <Card.Content>
                        <Text style={styles.text}>404 Error</Text>
                        <Text style={styles.text}>Data Not Found</Text>
                    </Card.Content>
                </Card>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 250,
        alignItems: 'center',
        margin: 20,
        padding: 40,
        backgroundColor: 'lightpink'

    }, text: {
        textAlign: 'center',
        fontSize: 30,
        color: 'red'
    },
    heading: {
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 30,
        color: 'red'
    }


})
export default ErrorPage