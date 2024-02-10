'use client';
import React, { useState, FormEvent, useRef } from 'react';
import { db, auth } from '../provider';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'; // Import Firestore methods from firebase

interface SendMessageProps {
    scroll: React.RefObject<HTMLDivElement>;
}

function SendMessage({ scroll }: SendMessageProps): JSX.Element {
    const [msg, setMsg] = useState<string>('');

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
        <div>
            <form onSubmit={sendMessage}>
                <div className="sendMsg">
                    <input
                        style={{ width: '78%', fontSize: '15px', fontWeight: '550', marginLeft: '5px', marginBottom: '-3px' }}
                        placeholder='Message...'
                        type="text"
                        value={msg}
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
    );
}

export default SendMessage;
