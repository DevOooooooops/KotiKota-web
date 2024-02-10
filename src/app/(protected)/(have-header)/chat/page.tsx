'use client';
import React, { useState, FormEvent, useRef, useEffect } from 'react';
import { db, auth, userProvider, authProvider, TGetAllUsers } from '@/provider';
import {
  collection,
  addDoc,
  serverTimestamp,
  query,
  orderBy,
  limit,
  onSnapshot,
} from 'firebase/firestore'; // Import Firestore methods from firebase
import { useFetch } from '@/common/hooks';
import { User } from '@/provider/client';

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
    {
      console.log(users);
    }
  }, []);

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
        createdAt: serverTimestamp(),
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
    <div>
      {/*  */}
      <div className='flex flex-row justify-between bg-white'>
        <div className='flex flex-col w-2/5 border-r-2 overflow-y-auto'>
          <div className='border-b-2 py-4 px-2'>
            <input
              type='text'
              placeholder='search chatting'
              className='py-2 px-2 border-2 border-gray-200 rounded-2xl w-full'
            />
          </div>
          {users?.map(user => (
            <div key={user.id}
                 className='flex flex-row py-4 px-2 justify-center items-center border-b-2'
            >
              <div className='w-1/4'>
                <img
                  src={`data:image/png;base64,${user.profile?.profile_picture}`}
                  className='object-cover h-12 w-12 rounded-full'
                  alt=''
                />
              </div>
              <div className='w-full'>
                <div className='text-lg font-semibold'>{user?.profile?.email}</div>
              </div>
            </div>
          ))}

        </div>

        <div className='w-full px-5 flex flex-col justify-between'>
          {messages.map(({ id, text, photoURL, uid }) => (
            <div key={id} className='mb-4'>
              <div className={`flex flex-row ${uid === auth.currentUser?.uid && 'justify-end'}`}>
                <img src='https://source.unsplash.com/vpOeXr5wmR4/600x600' alt='Profile'
                     className='object-cover h-8 w-8 rounded-full mr-2' />

                <div className='flex flex-col'>
                  <p
                    className={`py-2 px-4 rounded-br-3xl rounded-tr-3xl rounded-tl-xl text-white ${uid === auth.currentUser?.uid ? 'bg-blue-400' : 'bg-gray-400'}`}>
                    {text}
                  </p>
                </div>
              </div>
            </div>
          ))}


          <div className='py-5'>
            <form onSubmit={sendMessage}>
              <div className='sendMsg flex'>
                <input
                  placeholder='Message...'
                  type='text'
                  value={msg}
                  className='w-full bg-gray-300 py-5 px-3 rounded-xl'
                  onChange={(e) => setMsg(e.target.value)}
                />
                <button
                  style={{ width: '18%', fontSize: '15px', fontWeight: '550', margin: '4px 5% -13px 5%', maxWidth: '200px' }}
                  type='submit'
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className='w-2/5 border-l-2 px-5'>
          <div className='flex flex-col'>
            <div className='font-semibold text-xl py-4'>Projects to sustain</div>
            <img
              src='https://source.unsplash.com/L2cxSuKWbpo/600x600'
              className='object-cover rounded-xl h-64'
              alt=''
            />
            <div className='font-semibold py-4'>Created 22 Sep 2021</div>
            <img
              src='https://source.unsplash.com/L2cxSuKWbpo/600x600'
              className='object-cover rounded-xl h-64'
              alt=''
            />
            <div className='font-semibold py-4'>Created 22 Sep 2021</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
