import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../../../redux/reducers/productReducer/productReducer';
import { HelperService } from '../../../utils/HelperService';

export default function ProductListItem({data}) {
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.product.cart);

    const handleAddToCart = (product) => {
      // console.log("ITREM", product.id);
        dispatch(addToCart({ id: product?.id }));
      };
    
      const handleRemoveFromCart = (product) => {
        dispatch(removeFromCart({ id: product?.id }));
      };
      
    

    const renderListItems = (items) => {     
      
      const item = items.item;
         
        return(
           <View style={styles.container}>
           <View style={styles.innerContainer}>
                <Image source={{ uri: item.image }} style={styles.image} />
                <Text style={styles.title}>{item.title}</Text>
                <Text numberOfLines={3} style={styles.description}>{item.description}</Text>
                <Text style={styles.price}>Rs. {item.price}</Text>
                </View>
                <TouchableOpacity style={styles.button} onPress={() => handleAddToCart(item)}>
                    <Text style={styles.buttonText}>Add to Cart</Text>
                        </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => handleRemoveFromCart(item)}>
                    <Text style={styles.buttonText}>Remove from Cart</Text>
                </TouchableOpacity>
        </View>
        )
    }


  return (
    <View style={{
        marginTop: 25
    }}>
            <FlatList
                data={data}
                renderItem={renderListItems}
            />
     </View>
  )
}

const styles = StyleSheet.create({
    container: {
      marginBottom: 20,
      padding: 8,
      borderWidth: 1,
      borderColor: '#ddd',
      borderRadius: 5,
      shadowColor: "#000000",
      // shadowOffset: {
      //   width: 0,
      //   height: 3,
      // },
      // shadowOpacity:  0.18,
      // shadowRadius: 4.59,
      elevation: 5
    },
    innerContainer: {
      marginBottom: 20,
      padding: 10,
      borderWidth: 1,
      borderColor: '#ddd',
      borderRadius: 5,
    },
    image: {
        width: '100%',
        height: 200,
        borderRadius: 12,
        // backgroundColor: 'red'
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 8,
    },
    description: {
        fontSize: 14,
        color: '#666',
        marginTop: 8,
    },
    price: {
      fontSize: 16,
      fontWeight: 'bold',
      marginVertical: 10,
      color: '#000000'
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000000',
        padding: 12,
        borderRadius: 6,
        marginBottom: 6
    },
    buttonText: {
        color: '#ffffff',
        textTransform: 'uppercase',
        fontWeight: '700'
    },
    cart: {
        backgroundColor: 'red'
    }
  });