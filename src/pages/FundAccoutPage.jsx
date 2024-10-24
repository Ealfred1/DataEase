import React, { useState, useEffect } from 'react';
import authAxios from '@/api/authAxios';
import 'boxicons/css/boxicons.min.css';
import { Link } from 'react-router-dom';

const FundAccoutPage = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    authAxios.get('/virtual_account/')
      .then(res => {setData(res.data),console.log(res.data)
      })
      .catch(console.error);
  }, []);

  return (
    <div className='p-4 lg:flex justify-center w-full items-center'>
      {/* Conditionally render the first div when data?.message is null */}
      {data?.message === null && (
        <Link to='/virtual_account' className='w-full'>
        <div className='bg-green-100 rounded-lg p-6 flex w-full cursor-pointer'>
          <div className='justify-center flex items-center w-14 bg-green-300 rounded-md'>
            <i className='bx bx-wallet-alt text-2xl text-white'></i>
          </div>
          <div className='ml-3'>
            <h1 className='text-xl font-semibold'>Create Wallet</h1>
            <p>Create your virtual wallet</p>
          </div>
        </div>
        </Link>
      )}

      {/* Default content */}
      <div className='bg-yellow-100 rounded-lg p-6 flex w-full cursor-pointer mt-5  lg:mt-0 lg:ml-3 ml-0'>
        <div className='justify-center flex items-center w-14 bg-yellow-300 rounded-md'>
          <i className='bx bxs-wallet-alt text-2xl text-white'></i>
        </div>
        <div className='ml-3'>
          <h1 className='text-xl font-semibold'>Manual Funding</h1>
          <p>Fund account via admin</p>
        </div>
      </div>
    </div>
  );
};

export default FundAccoutPage;