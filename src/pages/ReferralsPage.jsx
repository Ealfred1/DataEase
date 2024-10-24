import React, { useRef, useState, useContext, useEffect } from 'react';
import frens from '../assets/frens.jpg';
import { DashboardContext } from '@/context/DashboardContext';
import 'boxicons/css/boxicons.min.css';
import { toast } from 'react-toastify';
import authAxios from '@/api/authAxios';

const ReferralsPage = () => {
    const { user } = useContext(DashboardContext);
    const url_value = `https://www.dataease.com.ng/register?r=${user?.username}`;
    const inputRef = useRef(null);
    const [copySuccess, setCopySuccess] = useState('');

    const copyToClipboard = () => {
        const text = inputRef.current.value;
        navigator.clipboard.writeText(text).then(() => {
            // setCopySuccess('Copied!');
            toast.success('Copied!')
        }).catch(() => {
            setCopySuccess('Failed to copy!');
        });
    };

    const [data, setData] = useState(null)

    useEffect(() => {
        authAxios.get('/pin/')
        .then(res => setData(res.data), console.log(data))
        .catch(console.error)
    }, [])

    return (
        <div>
            {/* {data ? JSON.stringify(data) : 'Loading...'} */}
            <div className='flex justify-center items-center'>
                <img src={frens} className='w-640' alt="" />
            </div>
            <div className='mb-5'>
                <h1 className='text-center text-2xl font-bold'>Refer a friend, Earn a reward</h1>
                <p className='text-center text-gray font-normal'>Invite a friend to signup and make a purchase</p>
                <p className='text-center text-gray font-normal'>Earn ₦10 on every purchase</p>
            </div>
            <div className='justify-center flex items-center w-full max-w-3xl mx-auto'>
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
            <div className="flex justify-around items-center w-full p-6 bg-gray-100 max-w-3xl mx-auto">
                <div className="bg-green-500 h-14 w-14 p-4 rounded-full flex items-center justify-center">
                    <i className='bx bxl-facebook text-white text-3xl'></i>
                </div>
                <div className="bg-green-500 h-14 w-14 p-4 rounded-full flex items-center justify-center">
                    <i className='bx bxl-twitter text-white text-3xl'></i>
                </div>
                <div className="bg-green-500 h-14 w-14 p-4 rounded-full flex items-center justify-center">
                    <i className='bx bxl-instagram text-white text-3xl'></i>
                </div>
                <div className="bg-green-500 h-14 w-14 p-4 rounded-full flex items-center justify-center">
                    <i className='bx bxl-linkedin text-white text-3xl'></i>
                </div>
            </div>
            <p className='text-center text-gray font-normal'>Share to social platforms</p>
        </div>

    );
};

export default ReferralsPage;