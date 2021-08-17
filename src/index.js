import { initializeApp } from 'firebase/app';
import {
  getMessaging
} from 'firebase/messaging'; 

const app = initializeApp({ /* firebase config */ });
const messaging = getMessaging(app);