import { createContext, useState, useEffect } from 'react';
import firebase from '../firebase';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStorage() {
      const storageUser = await AsyncStorage.getItem('Auth_user');

      if (storageUser) {
        setUser(JSON.parse(storageUser));
        setLoading(false);
      }
      setLoading(false);
    }
    loadStorage();
  }, []);

  async function signIn(email, password) {
    await firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(async (value) => {
        let uid = value.user.uid;
        await firebase
          .database()
          .ref('users')
          .child(uid)
          .once('value', (snapshot) => {
            let data = {
              uid: uid,
              email: value.user.email,
              name: snapshot.val().name,
              birthDate: snapshot.val().birthDate,
              cpf: snapshot.val().cpf,
            };
            setUser(data);
            storageUser(data);
          });
      })
      .catch((error) => {
        alert(error.code);
      });
  }

  async function signUp(email, password, name, cpf, birthDate) {
    await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(async (value) => {
        let uid = value.user.uid;
        await firebase
          .database()
          .ref('users')
          .child(uid)
          .set({
            balance: 0,
            name: name,
            cpf: cpf,
            birthDate: birthDate,
          })
          .then(() => {
            let data = {
              uid: uid,
              name: name,
              email: value.user.email,
              cpf: cpf,
              birthDate: birthDate,
            };
            setUser(data);
            storageUser(data);
          });
      });
  }

  async function signOut() {
    await firebase.auth().signOut();
    await AsyncStorage.clear().then(() => {
      setUser(null);
    });
  }

  async function storageUser(data) {
    await AsyncStorage.setItem('Auth_user', JSON.stringify(data));
  }

  return (
    <AuthContext.Provider
      value={{ signed: !!user, user, loading, signUp, signIn, signOut, storageUser }}
    >
      {children}
    </AuthContext.Provider>
  );
}
