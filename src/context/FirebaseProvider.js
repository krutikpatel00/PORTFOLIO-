import { createContext } from "react";
import { addDoc, collection } from 'firebase/firestore'
import { auth, fireStore, storage } from "../Firebase/Firebase";
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { getDownloadURL, ref } from "firebase/storage";
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth'

const provider = new GoogleAuthProvider()
export const firebaseContext = createContext()

const FirebaseProvider = ({ children }) => {

      const GoogleCreactAccount = () => {
            signInWithPopup(auth, provider).then((res) => {

            }).catch((error) => {

            })
      }

      const Logout = () => {

      }

      const DataSubmit = async (fromData) => {
            addDoc(collection(fireStore, 'contacts'), fromData)
                  .then((res) => {
                        toast.success('Submitted Successfully')
                  }).catch((err) => {
                        toast.error('submitting again')
                  })

      }
      const getUplodeImage = (parth) => {
            return getDownloadURL(ref(storage, parth))
      }
      return (
            <firebaseContext.Provider value={{ DataSubmit, getUplodeImage, GoogleCreactAccount, Logout }}>
                  {children}
            </firebaseContext.Provider>
      )
}
export default FirebaseProvider