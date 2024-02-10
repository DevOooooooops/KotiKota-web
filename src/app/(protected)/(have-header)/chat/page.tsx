
'use client';
import Image from 'next/image';
import LOGO from '@/assets/kotikota-logo.png';
import React, { useState, FormEvent, useRef, useEffect } from 'react';
import { db, auth, userProvider, authProvider, TGetAllUsers } from '@/provider';
import { collection, addDoc, serverTimestamp, query, orderBy, limit, onSnapshot, where, getDocs } from 'firebase/firestore'; // Import Firestore methods from firebase
import { useFetch } from '@/common/hooks';
import { User } from '@/provider/client';
import { v4 } from 'uuid';
import { enqueueSnackbar } from 'notistack';
import { apiBaseUrl } from 'next-auth/client/_utils';


interface SendMessageProps {
  scroll: React.RefObject<HTMLDivElement>;
}

interface Message {
  id: string;
  text: string;
  photoURL: string;
  uid: string;
}

const ChatPage = () => {
  const [msg, setMsg] = useState<string>('');
  const { fetch: fetchUsers, data: users, isLoading } = useFetch<User[], TGetAllUsers>(userProvider.getAll);

  useEffect(() => {
    fetchUsers();
    {console.log(users)}
  }, [])

  useEffect(() => {
    if (users) {
      console.log(users);
    }
  }, [users]);
  

    const scroll = useRef<HTMLDivElement>(null);
    const [messages, setMessages] = useState<Message[]>([]);

    useEffect(() => {
        const q = query(collection(db, 'kotikota'), orderBy('createdAt'), limit(50));
        const unsubscribe = onSnapshot(q, (snapshot) => {
            setMessages(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }) as Message));
        });
        return () => unsubscribe();
    }, []);

    const sendMessage = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault();
        if (!auth.currentUser) return;

        const { uid, photoURL } = auth.currentUser;

        try {
            await addDoc(collection(db, 'kotikota'), {
                text: msg,
                photoURL,
                uid,
                createdAt: serverTimestamp()
            });

            setMsg('');
            if (scroll.current) {
                scroll.current.scrollIntoView({ behavior: 'smooth' });
            }
        } catch (error) {
            console.error('Error adding document: ', error);
        }
    };

  return (
      <div >
        {/*  */}
        <div className="flex flex-row justify-between bg-white">
          <div className="flex flex-col w-2/5 border-r-2 overflow-y-auto">
            <div className="border-b-2 py-4 px-2">
              <input
                type="text"
                placeholder="search chatting"
                className="py-2 px-2 border-2 border-gray-200 rounded-2xl w-full"
              />
            </div>
            {users?.map( user => (
                <div key={user.id}
                  className="flex flex-row py-4 px-2 justify-center items-center border-b-2"
                >
                  <div className="w-1/4">
                    <img
                      src="https://source.unsplash.com/_7LbC5J-jw4/600x600"
                      className="object-cover h-12 w-12 rounded-full"
                      alt=""
                    />
                  </div>
                  <div className="w-full">
                    <div className="text-lg font-semibold">{user?.profile?.email}</div>
                  </div>
                </div>
              ))}
           
            <div className="flex flex-row py-4 px-2 items-center border-b-2">
              <div className="w-1/4">
                <img
                  src="https://source.unsplash.com/otT2199XwI8/600x600"
                  className="object-cover h-12 w-12 rounded-full"
                  alt=""
                />
              </div>
              <div className="w-full">
                <div className="text-lg font-semibold">Everest Trip 2021</div>
                <span className="text-gray-500">Hi Sam, Welcome</span>
              </div>
            </div>
            <div
              className="flex flex-row py-4 px-2 items-center border-b-2 border-l-4 border-blue-400"
            >
              <div className="w-1/4">
                <img
                  src="https://source.unsplash.com/L2cxSuKWbpo/600x600"
                  className="object-cover h-12 w-12 rounded-full"
                  alt=""
                />
              </div>
              <div className="w-full">
                <div className="text-lg font-semibold">Projects to sustain</div>
                <span className="text-gray-500">Lusi : Thanks Everyone</span>
              </div>
            </div>
            <div className="flex flex-row py-4 px-2 items-center border-b-2">
              <div className="w-1/4">
                <img
                  src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
                  className="object-cover h-12 w-12 rounded-full"
                  alt=""
                />
              </div>
              <div className="w-full">
                <div className="text-lg font-semibold">Javascript Indonesia</div>
                <span className="text-gray-500">Evan : some one can fix this</span>
              </div>
            </div>

            <div className="flex flex-row py-4 px-2 items-center border-b-2">
              <div className="w-1/4">
                <img
                  src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
                  className="object-cover h-12 w-12 rounded-full"
                  alt=""
                />
              </div>
              <div className="w-full">
                <div className="text-lg font-semibold">Javascript Indonesia</div>
                <span className="text-gray-500">Evan : some one can fix this</span>
              </div>
            </div>
          </div>
      {/*  */}

      {/*  */}
          <div className="w-full px-5 flex flex-col justify-between">
          <div className="flex flex-col mt-5">
              {messages.map(({ id, text, photoURL, uid }) => (
                  <div key={id} className={`msg ${uid === auth.currentUser?.uid ? 'sent' : 'received'} flex items-start mb-4`}>
                      {/* Afficher l'image de profil */}
                      <img src="https://source.unsplash.com/vpOeXr5wmR4/600x600" alt="Profile" className="object-cover h-8 w-8 rounded-full mr-2" />

                      {/* Afficher le contenu du message */}
                      <div className="flex flex-col">
                          {/* <span className="text-sm font-semibold">{auth.currentUser?.email}</span> */}
                          <p className={`py-2 px-4 rounded-br-3xl rounded-tr-3xl rounded-tl-xl text-white ${uid === auth.currentUser?.uid ? 'bg-blue-400' : 'bg-gray-400'}`}>
                              {text}
                          </p>
                      </div>
                  </div>
              ))}
          </div>


            <div className="py-5">
            <form onSubmit={sendMessage}>
                <div className="sendMsg flex">
                    <input
                        placeholder='Message...'
                        type="text"
                        value={msg}
                        className="w-full bg-gray-300 py-5 px-3 rounded-xl"
                        onChange={(e) => setMsg(e.target.value)}
                    />
                    <button
                        style={{ width: '18%', fontSize: '15px', fontWeight: '550', margin: '4px 5% -13px 5%', maxWidth: '200px' }}
                        type="submit"
                    >
                        Send
                    </button>
                </div>
            </form>
            </div>

            {/*  */}
          </div>
          <div className="w-2/5 border-l-2 px-5">
            <div className="flex flex-col">
              <div className="font-semibold text-xl py-4">Projects to sustain</div>
              <img
                src="https://source.unsplash.com/L2cxSuKWbpo/600x600"
                className="object-cover rounded-xl h-64"
                alt=""
              />
              <div className="font-semibold py-4">Created 22 Sep 2021</div>
              <img
                src="https://source.unsplash.com/L2cxSuKWbpo/600x600"
                className="object-cover rounded-xl h-64"
                alt=""
              />
              <div className="font-semibold py-4">Created 22 Sep 2021</div>
              </div>
            </div>
          </div>
        </div>
  );
};

export default ChatPage;
