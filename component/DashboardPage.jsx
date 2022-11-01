import { Button, Text, View, SafeAreaView, ActivityIndicator, FlatList, StyleSheet, Image } from "react-native"
import axios from 'axios';
import { Card, Paragraph, Appbar } from 'react-native-paper';
import { useState, useEffect } from "react";
import { ScrollView } from 'react-native-virtualized-view'

const DashboardPage = ({ navigation }) => {
    let data = navigation.state.params.paramKey;
    let detail = data.userProfile;

    const [categoryList, setCategoryList] = useState([]);
    const [category, setCategory] = useState();
    const [productList, setProductList] = useState([]);
    const [product, setProduct] = useState([]);
    // const [headercolor, setHeaderColor] = useState(false)
    const [likecolor, setLikeColor] = useState(false);

    useEffect(() => {
        axios.get(`https://api.escuelajs.co/api/v1/categories`).then((res) => {
            console.log("categories", res.data)
            setCategoryList(res.data);
        })
    }, [])

    useEffect(() => {
        axios.get(`https://api.escuelajs.co/api/v1/products`).then((res) => {
            setProductList(res.data);
            let productsInfo = [];
            productList.forEach((productDetail) => {
                if (productDetail.category.name === category) {
                    productsInfo.push(productDetail)
                }
            })
            setProduct(productsInfo)
            // console.log("productsInfo",productsInfo)
        })
    }, [category])

    return (
        <SafeAreaView>
            <ScrollView>
                <View>
                    <Text style={styles.username}> Hello {data.name}!</Text>
                    <FlatList horizontal={true} data={categoryList}
                        renderItem={({ item }) =>
                            <Appbar.Header style={styles.colorchange}>
                                {/* // <Appbar.Header style={headercolor ? styles.colorchange : styles.withoutcolor}> */}
                                <Appbar.Content title={item.name}
                                    onPress={() => {
                                        setCategory(item.name);
                                    }} />
                                <Image source={{ uri: item.image }} style={{ width: 50, height: 50, borderRadius: 40 }} />
                            </Appbar.Header>} />

                    <Text style={styles.categoryName}>{category}</Text>
                    {!category ? <ActivityIndicator size="large" /> : ''}

                    <FlatList
                        data={product}
                        renderItem={({ item }) => {
                            return (
                                <View key={item.id}  >
                                    <Card style={styles.card} onPress={() => navigation.navigate('ProductDetails',
                                        { paramKey: { item } })}>
                                        <Card.Content>
                                            <Paragraph style={{ fontSize: 16, fontWeight: "bold", marginBottom: 15, textAlign: 'center' }}>{item.title}</Paragraph>
                                            <Card.Cover style={{ height: 300, marginBottom: 10, borderRadius: 40 }} source={{ uri: item.images[0] }} />
                                            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                                                <Text style={styles.text}>Price :- ${item.price} 💵</Text>
                                                <Appbar.Action color={likecolor ? 'red' : 'grey'} icon="heart" onPress={() => setLikeColor(!likecolor)} />
                                            </View>
                                        </Card.Content>
                                    </Card>
                                </View>
                            )
                        }}
                        keyExtractor={item => item.id} />

                    <View style={{ marginTop: 520, position: 'relative' }}>
                        <Button color='limegreen' title='profile' onPress={() => navigation.navigate('Profile', { paramKey: { detail } })} />
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    colorchange: {
        backgroundColor: 'springgreen',
        // flexDirection: 'row',
        // margin: 3,
        height: 22,
        marginBottom: 15,
        marginTop: 15,
    },
    username: {
        margin: 10,
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold'

    },
    card: {
        marginTop: 10,
        marginBottom: 10,
        // backgroundColor: '#eec4dc',
        borderRadius: 100,
        flexDirection: 'row'

    }, text: {
        fontSize: 20,
        fontWeight: 'normal',
        margin: 8,
        textAlign: 'center'
    },
    categoryName: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 20
    },
    withoutcolor: {
        height: 20,
        marginBottom: 15,
        marginTop: 15,
        // flexDirection: 'row',
        // margin: 3,
        //backgroundColor: 'red',

    },

})


export default DashboardPage;


// item.category.image 
// item.category.name

// item.description
// item.images[]
// item.price
// item.title
