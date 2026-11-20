// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-app.js";
import { getAuth, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-firestore.js";
 const firebaseConfig = {
    apiKey: "AIzaSyBKSNRT4xkD3wMdfmQeKtMSGW60Zij8nCQ",
    authDomain: "learning-game-f316e.firebaseapp.com",
    projectId: "learning-game-f316e",
    storageBucket: "learning-game-f316e.firebasestorage.app",
    messagingSenderId: "92923635444",
    appId: "1:92923635444:web:40b0f5dd5816ea919aa0a1"
  };
// 初始化 Firebase 與 Auth，並匯出 auth 供其他檔案使用
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app); // 新增匯出 Firestore 資料庫