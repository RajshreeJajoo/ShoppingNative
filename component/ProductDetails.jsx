import { Text, View, StyleSheet, Dimensions } from "react-native";
import { Card, Title, Paragraph } from 'react-native-paper';
import { ScrollView } from 'react-native-virtualized-view'
const { width } = Dimensions.get('window')

const ProductDetails = ({ navigation }) => {
    let productdetails = navigation.state.params.paramKey;
    let details = productdetails.item;

    return (
        <ScrollView>
            <View style={{ backgroundColor: 'pink' }}>
                <Text style={styles.heading}>DETAIL OF PRODUCT</Text>
                <Card style={{ marginTop: 20, backgroundColor: 'green'}}>
                    <View style={{flexDirection:'row',justifyContent:'center',marginTop:10,marginBottom:10}}>
                        <Paragraph style={{fontSize: 15,fontWeight: "bold",textAlign:'center',marginTop:10,margin:10}}>{details.category.name} </Paragraph>
                        <Card.Cover style={{ width: 40, height: 40 ,borderRadius:5}} source={{ uri: details.category.image }} />
                    </View>
                    <Paragraph style={styles.titleName}>{details.title} </Paragraph>
                    <Card.Cover style={styles.img} source={{ uri: details.images[0]}} />
                    <Card.Content>
                        <Title><Text>Price :- ${details.price} 💵</Text></Title>
                        <Paragraph style={styles.desc}>{details.description}</Paragraph>
                    </Card.Content>

                </Card>
            </View>
        </ScrollView>


// item.category.image 
// item.category.name

// item.description
// item.images[]
// item.price
// item.title


    )
}

const styles = StyleSheet.create({
    img: {
        margin: 2,
        marginTop: 30,
        margin:5,
        // marginLeft:30,
        // marginRight:40,
       // width: width,
        //maxwidth: 400,
        height: 300,
        //resizeMode:'center',
        //resizeMethod:'auto',

    },
    titleName: {
        textAlign: 'center',
        padding: 10,
        fontSize: 15,
        fontWeight: "bold",
        backgroundColor: 'seashell'
    },
    heading: {
        marginTop: 20,
        fontSize: 20,
        fontWeight: "bold",
        textAlign: 'center'
    },
    desc: {
        textAlign: 'center',
        padding: 10,
        backgroundColor: 'lavenderblush',
        marginTop: 10
    }
})

export default ProductDetails;





