import { ApiEndPoints } from "../../../api/urlConstants";
import { HelperService } from "../../../utils/HelperService";

import {
  productLoading,
  productSuccess,
  productFailure,
} from '../../reducers/productReducer/productReducer';

export const getProductRequest = (params) => {

  return async ( dispatch ) => {
    
    dispatch(productLoading());
    try {
      const response = await fetch(ApiEndPoints.GET_PRODUCT, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(),
      });
      // console.log("ALLPRODUCT===1", response);
      
      if (!response.ok) {
        throw new Error('Failed to login: Invalid User-ID.');
      }
      
      const productData = await response.json();
      
      // console.log("ALLPRODUCT===2",productData);
      
      if (productData.response && productData.response.error === 1) {
        throw new Error(productData.response.error_message);
      }

      dispatch(productSuccess(productData));
      callback();
    } catch (error) {
      dispatch(productFailure(error.message));
      HelperService.showToast({ message: error.message, duration: 2000 });
      throw error;
    }
  }
};

