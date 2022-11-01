import { Text, View, SafeAreaView, StyleSheet, TextInput, Button } from 'react-native';
import { useState } from 'react';
import axios from 'axios';
const AddProducts = ({ navigation }) => {

    let data = navigation.state.params.paramKey;
    let categoryName = data.categoryName;
    const [title, setTitle] = useState();
    const [price, setPrice] = useState();
    const [description, setDescription] = useState();
    const [categoryId, setCategoryId] = useState();
    const addProducts = () => {
        axios({
            method: 'post',
            url: 'https://api.escuelajs.co/api/v1/products/',
            // data: {
            //     title: title,
            //     price: price,
            //     description: description,
            //     category: {
            //         id: categoryId,
            //         name: categoryName,
            //         image: 'https://thumbs.dreamstime.com/z/abstract-open-book-flying-as-knowledge-wisdom-going-to-future-93665548.jpg'
            //     },
            //     images: ["https://static.toiimg.com/photo/msid-80383465/80383465.jpg", "https://thumbs.dreamstime.com/b/open-book-library-23266127.jpg", "https://thumbs.dreamstime.com/z/abstract-open-book-flying-as-knowledge-wisdom-going-to-future-93665548.jpg"]
            // },
            data: {
                title: title,
                price: price,
                description: description,
                categoryId: categoryId,
                images: ["https://static.toiimg.com/photo/msid-80383465/80383465.jpg","https://thumbs.dreamstime.com/b/open-book-library-23266127.jpg", "https://thumbs.dreamstime.com/z/abstract-open-book-flying-as-knowledge-wisdom-going-to-future-93665548.jpg"]
        },
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
        }).then((response) => {
            console.log("response", JSON.stringify(response.data));
            navigation.navigate('Shopping')
        }).catch((error) => {
            console.log("error", error);
            navigation.navigate('Shopping')

        })
    }
    return (
        <SafeAreaView>
            <View>
                <Text style={{ marginTop: 30, textAlign: 'center',marginBottom:20 }}>Add Products</Text>

                <TextInput style={styles.text}
                    placeholder="Title"
                    value={title}
                    onChangeText={(text) => setTitle(text)}
                />
                <TextInput style={styles.text}
                    placeholder="Price"
                    value={price}
                    onChangeText={(text) => setPrice(text)}
                />
                <TextInput style={styles.text}
                    placeholder="Description"
                    value={description}
                    onChangeText={(text) => setDescription(text)}
                />
                <TextInput style={styles.text}
                    placeholder="Category Id"
                    value={categoryId}
                    onChangeText={(text) => setCategoryId(text)}
                />
                <TextInput style={styles.text}
                    placeholder="Category Name"
                    value={categoryName}
                />
                <View style={{ margin: 10 }}>
                    <Button title="Sumbit Products" onPress={addProducts} />
                </View>

            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
text:
{
    margin: 10, 
    borderWidth: 4,
    textAlign:'center',
}


})
export default AddProducts;