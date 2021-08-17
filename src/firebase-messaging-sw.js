import { initializeApp } from 'firebase/app';
import {
  getMessaging
} from 'firebase/messaging/sw'; 

const app = initializeApp({ /* firebase config */ });
const messaging = getMessaging(app);