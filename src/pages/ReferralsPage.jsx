import React, { useRef, useState, useContext } from 'react';
import frens from '../assets/frens.jpg';
import { DashboardContext } from '@/context/DashboardContext';

const ReferralsPage = () => {
    const { user } = useContext(DashboardContext);
    const url_value = `https://www.dataease.com.ng/register?r=${user?.username}`;
    const inputRef = useRef(null);
    const [copySuccess, setCopySuccess] = useState('');

    const copyToClipboard = () => {
        const text = inputRef.current.value;
        navigator.clipboard.writeText(text).then(() => {
            setCopySuccess('Copied!');
        }).catch(() => {
            setCopySuccess('Failed to copy!');
        });
    };

    return (
        <div>
            <div className='flex justify-center items-center'>
                <img src={frens} className='w-640' alt="" />
            </div>
            <div className='mb-5'>
                <h1 className='text-center text-2xl font-bold'>Refer a friend, Earn a reward</h1>
                <p className='text-center text-gray font-normal'>Invite a friend to signup and make a purchase</p>
                <p className='text-center text-gray font-normal'>Earn ₦10 on every purchase</p>
            </div>
            <div className='justify-center flex items-center w-full'>
                <div className='sm:w-full w-96 flex'>
                    <input
                        ref={inputRef}
                        type="text"
                        value={url_value}
                        readOnly
                        className='h-16 rounded-l-xl w-full border-2 px-3 border-vibrantGreen'
                    />
                    <button
                        onClick={copyToClipboard}
                        className='bg-vibrantGreen rounded-r-xl w-36 text-white font-medium'
                    >
                        Copy Link
                    </button>
                </div>
            </div>
            {copySuccess && <p className='text-center text-green-500'>{copySuccess}</p>}
        </div>
    );
};

export default ReferralsPage;