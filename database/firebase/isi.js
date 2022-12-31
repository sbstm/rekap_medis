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

function Isi() {
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
   <Navbar />

   <section className="">
    <div class="py-12 bg-white md:py-24">
     <div class="max-w-lg px-4 mx-auto lg:px-8">
      <form class="grid grid-cols-6 gap-4">
       <div class="col-span-6">
        <label
         for="Name"
         class="block text-xs font-medium text-gray-700"
        >
         Gejala
        </label>

        <input
         type="text"
         id="FirstName"
         class="w-full mt-1 border-gray-200 rounded-md shadow-sm sm:text-sm"
         onChange={(event) => {
          setGejala(event.target.value);
         }}
        />
       </div>

       <div class="col-span-6">
        <label for="time" class="block text-xs font-medium text-gray-700">
         Time
        </label>

        <input
         type="date"
         id="time"
         class="w-full mt-1 border-gray-200 rounded-md shadow-sm sm:text-sm"
         onChange={(event) => {
          setTime(event.target.value);
         }}
        />
       </div>


       <fieldset class="col-span-6">
        <legend class="block text-sm font-medium text-gray-700">
         Located
        </legend>

        <div class="mt-1 -space-y-px bg-white rounded-md shadow-sm">
         <div>
          <label for="Country" class="sr-only">Located</label>

          <select
           id="Country"
           class="relative w-full border-gray-200 rounded-t-md focus:z-10 sm:text-sm"
           onChange={(event) => setLocate(event.target.value)}
          >
           <option>RS Serta Mulia</option>
           <option>RS Hasan Sadikin</option>
           <option>RS Advent Bandung</option>
           <option>RS Sari Asih</option>
           <option>RS Santosa</option>
           <option>Mandiri</option>
          </select>
         </div>
        </div>
       </fieldset>

       <div class="col-span-6">
        <label for="Phone" class="block text-xs font-medium text-gray-700">
         Dokter
        </label>

        <input
         type="tel"
         id="Dokter"
         class="w-full mt-1 border-gray-200 rounded-md shadow-sm sm:text-sm"
         onChange={(event) => {
          setDokter(event.target.value);
         }}
        />
       </div>
       <a href="/cek">

        <div class="col-span-6">

        <button
                class="block w-full rounded-md bg-black p-2.5 text-sm text-white transition hover:shadow-lg"
                onClick={createUser}
              >
                Kirim
              </button>
        </div>

       </a>
      </form>
     </div>
    </div>
   </section>
   <Footer />
  </>
 );
}

export default Isi;

