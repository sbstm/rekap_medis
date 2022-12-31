import { useState, useEffect } from "react";
import { db } from "./firebase";
import {
 collection,
 getDocs,
 addDoc,
 updateDoc,
 deleteDoc,
 doc,
} from "firebase/firestore";
import Footer from "./footer";
import Navbar from "./navbar";

function App() {
 const [Gejala, setGejala] = useState("");
 const [Dokter, setDokter] = useState(0);
 const [Time, setTime] = useState(0);
 const [Locate, setLocate] = useState(0);

 const [users, setUsers] = useState([]);
 const usersCollectionRef = collection(db, "users");

 const createUser = async () => {
  await addDoc(usersCollectionRef, { gejala: Gejala, dokter: (Dokter), time: Date(Time), Locate: (Locate) });
 };

 const updateUser = async (id, age) => {
  const userDoc = doc(db, "users", id);
  const newFields = { age: age };
  await updateDoc(userDoc, newFields);
 };

 const deleteUser = async (id) => {
  const userDoc = doc(db, "users", id);
  await deleteDoc(userDoc);
 };

 useEffect(() => {
  const getUsers = async () => {
   const data = await getDocs(usersCollectionRef);
   setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  getUsers();
 }, []);

 return (
  <>
   <Navbar/>


   <div className="">
    <div className="max-h-max h-screen flex items-center ">
     <div className=" object-none overflow-x-auto shadow-md justify-center object-center ">
     <div className="flex flex-row ">
      <button
       className='w-36 h-12  bg-slate-300 text-slate-900 focus:text-white focus:bg-gradient-to-br focus:from-indigo-900 focus:to-indigo-700 rounded-tl-lg '>
       Riwayat
      </button>
      <button
       className='w-36 h-12  bg-slate-300 text-slate-900 focus:text-white focus:bg-gradient-to-br focus:from-indigo-900 focus:to-indigo-700 rounded-tr-lg'>
       Alergi
      </button>
     </div>
      <table className="w-auto text-sm text-left text-gray-500 w-screen px-80">
       <thead
        className="text-xs text-indigo-900 uppercase bg-gray-50 dark:bg-indigo-900 dark:text-gray-400">
        <tr>
         <th scope="col" className="py-3 px-6">
          Gejala
         </th>
         <th scope="col" className="py-3 px-6">
         Dokter
         </th>
         <th scope="col" className="py-3 px-6">
         Time
         </th>
         <th scope="col" className="py-3 px-6">
          Rumah Sakit
         </th>
         <th scope="col" className="py-3 px-6">
          <span className="sr-only">Edit</span>
         </th>
        </tr>
       </thead>
       <tbody>
       {users.map((user) => {
        return (
         <tr
          className="bg-white border-b dark:bg-indigo-600 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
          <th
           scope="row"
           className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
           {user.gejala}
          </th>
          <td className="py-4 px-6  dark:text-white">
          {user.dokter}
          </td>
          <td className="py-4 px-6  dark:text-white">
          {user.time}
          </td>
          <td className="py-4 px-6  dark:text-white">
          {user.Locate}
          </td>
          <td className="py-4 px-6 text-right">
          </td>
         </tr>
        );
        })}
       </tbody>
      </table>
     </div>

    </div>

   </div>
   <Footer />


  </>
 );
}

export default App;
