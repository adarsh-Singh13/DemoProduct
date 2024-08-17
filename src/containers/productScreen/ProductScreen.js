import React, { useEffect } from 'react'
import { StyleSheet, Image, View, Text } from 'react-native'
import { useSelector, useDispatch } from 'react-redux';
import { getProductRequest } from '../../redux/action/product/productAction'
import ProductListItem from './productListItem/ProductListItem'
import { HelperService } from '../../utils/HelperService';

export function ProductScreen() {
    const dispatch = useDispatch();

    const cart = useSelector((state) => state.product.cart);
    const itemData = useSelector((state) => state.product.data)
    const isInCart = cart?.some((item) => item.id === itemData.id);

    console.log("CARTTTT", cart.length);
    
    useEffect(() => {
        // Dispatch the getProductRequest action to get list items
        dispatch(getProductRequest());
      }, [dispatch]); 
    //  console.log("ITEMDATA=", itemData);
     
  return (
    <View style={styles.mainContainer}>
    <View style={styles.container}>
      <View style={{ marginRight: 12, alignSelf: 'flex-end' }}>
        <Image
          source={require('./../../assets/image/cart.jpg')}
          style={{ width: 50, height: 50 }} // Optionally, add style to set the image size
        />
        {cart.length > 0 && (
                        <View style={styles.cartNumber}>
                            <Text style={styles.cartNumberText}>{cart.length}</Text>
                        </View>
                    )}
      </View>
      <View style={styles.heading}>
        <Text style={styles.headingText}>Product List</Text>
      </View>
      <ProductListItem data={itemData} />
    </View>
  </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
    },
    container: {
        paddingVertical: '12%',
        backgroundColor: '#ffffff'
    },
    heading: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    headingText: {
      color: '#000000',
      fontWeight: '800',
      fontSize: 16,
      textTransform: 'uppercase'
    },
    cartNumber: {
      position: 'absolute',
      top: -5, // Adjust this value to position the badge
      right: -5, // Adjust this value to position the badge
      backgroundColor: 'red',
      borderRadius: 10,
      paddingHorizontal: 6,
      paddingVertical: 2,
  },
  cartNumberText: {
      color: '#ffffff',
      fontWeight: 'bold',
      fontSize: 12,
  },
})