// import { Toast } from 'native-base';
import {
  Platform,
  ToastAndroid,
} from 'react-native';
import Toast from 'react-native-toast-message';


function showToast({
    message = '',
    buttonText = 'Okay',
    duration = 1000,
    position = 'bottom',
    style = '',
  }) {
    if (Platform.OS == 'android') {
      ToastAndroid.show(message, ToastAndroid.LONG, ToastAndroid.BOTTOM);
    } else {
      Toast.show({
        text: message,
        buttonText: buttonText,
        duration: duration,
        position: position,
        style: style,
      });
    }
  }

  function showToastNew (type, text1, text2) {
    Toast.show({
      type: type || 'success',
      text1: text1,
      text2: text2,
      position: 'top', 
      visibilityTime: 3000,
      autoHide: true, 
      topOffset: 30, 
      bottomOffset: 40,
    });
  };
  

export const HelperService = {
 showToast,
 showToastNew,
};
