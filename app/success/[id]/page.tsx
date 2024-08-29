// app/success/[id]/page.tsx
'use client';

import React, { useEffect, useState } from 'react';
import { db } from '@/firebase.config';
import { doc, getDoc } from 'firebase/firestore';

const SuccessPage = ({ params }: { params: { id: string } }) => {
    const [userData, setUserData] = useState<{ name: string } | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            if (params.id) {
                const docRef = doc(db, "contacts", params.id);
                const docSnap = await getDoc(docRef);

                if (docSnap.exists()) {
                    const data = docSnap.data();
                    setUserData({ name: data.name });
                }
            }
        };

        fetchData();
    }, [params.id]);

    return (
        <div className='text-center text-2xl font-bold'>
            {userData ? (
                <div>
                    ✋ Hey {userData.name}, your data was delivered successfully!
                </div>
            ) : (
                <div>Loading...</div>
            )}
        </div>
    );
};

export default SuccessPage;
