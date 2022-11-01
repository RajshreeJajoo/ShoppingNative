import { Text, View, SafeAreaView, Button, TextInput, ActivityIndicator, Platform, Image } from 'react-native';
import React, {useState } from 'react';
import axios from "axios"

const CreateCategory = ({ navigation }) => {
  const [categoryName, setCategoryName] = useState();
  const [image, setImage] = useState(null);
  const [categoryId, setCategoryId] = useState();
  const [editcategoryName, setEditCategoryName] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();
    axios({
      method: 'post',
      url: 'https://api.escuelajs.co/api/v1/categories/',
      data: {
        name: categoryName,
        image: 'https://thumbs.dreamstime.com/z/abstract-open-book-flying-as-knowledge-wisdom-going-to-future-93665548.jpg'
      },
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      }
    }).then((response) => {
      console.log("response", JSON.stringify(response.data))
      navigation.navigate('Shopping')

    }).catch((error) => {
      console.log("error", error);
      navigation.navigate('Error')

    })
  }

  const editcategory=()=>{
    axios({
      method: 'put',
      url: `https://api.escuelajs.co/api/v1/categories/${categoryId}`,
      data: {
        name: editcategoryName,
      },
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      }
    }).then((response) => {
      console.log("response", JSON.stringify(response.data))
      navigation.navigate('Shopping')

    }).catch((error) => {
      console.log("error", error);
    })
  }
  return (
    <SafeAreaView>
      <View style={{height:700,backgroundColor: 'springgreen'}}>
        <Text style={{ marginTop: 60, textAlign: 'center' }}>Create Category</Text>
        <TextInput style={{ margin:30, borderWidth: 2 ,textAlign:'center'}}
          placeholder="Add New Category"
          value={categoryName}
          onChangeText={(text) => setCategoryName(text)}
        />
        <View style={{ flexDirection: 'row', marginLeft: 100 }}>
          <Button title="Submit" onPress={handleSubmit} />
          <View style={{ margin: 10 }} />
          <Button title="Add Products" onPress={() => navigation.navigate('AddProducts', { paramKey: { categoryName } })} />
        </View>

        <TextInput style={{ margin:15,marginTop:50, borderWidth: 2,textAlign:'center' }}
          placeholder="Edit Category Name"
          value={editcategoryName}
          onChangeText={(text) => setEditCategoryName(text)}
        />
        
        <TextInput style={{ margin:15, borderWidth: 2 ,textAlign:'center'}}
          placeholder="Category Id"
          value={categoryId}
          onChangeText={(text) => setCategoryId(text)}
        />
        <View style={{ margin:10,flexDirection: 'row', marginLeft: 120 }}>
          <Button title="Edit Category Name" onPress={editcategory} />
        </View>

      </View>

    </SafeAreaView>
  )
}

export default CreateCategory;