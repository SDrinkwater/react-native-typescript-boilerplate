import {
  GOOGLE_CLIENT_ID,
  GOOGLE_IOS_CLIENT_ID,
  GOOGLE_ANDROID_CLIENT_ID,
} from 'react-native-dotenv';

const facebook = Object.freeze({
  clientId: GOOGLE_CLIENT_ID as string || '',
  iosClientId: GOOGLE_IOS_CLIENT_ID as string || '',
  androidClientId: GOOGLE_ANDROID_CLIENT_ID as string || '',
});

export default facebook;