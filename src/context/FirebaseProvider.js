import { createContext } from "react";
import { addDoc, collection } from 'firebase/firestore'
import { fireStore, storage } from "../Firebase/Firebase";
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { getDownloadURL, ref } from "firebase/storage";
export const firebaseContext = createContext()

const FirebaseProvider = ({ children }) => {
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
            <firebaseContext.Provider value={{ DataSubmit, getUplodeImage }}>
                  {children}
            </firebaseContext.Provider>
      )
}
export default FirebaseProvider