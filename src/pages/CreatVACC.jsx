import React, { useState } from 'react'; 
import authAxios from '@/api/authAxios';

const CreatVACC = () => {
  const [amount, setAmount] = useState('');
  const [bank, setBank] = useState('SafeHaven'); // Default to SafeHaven
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [bvn, setBvn] = useState('');
  const [nin, setNin] = useState('');
  const [loading, setLoading] = useState(false); // New state for loading

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true); // Start loader when form is submitted
    const formData = {
      amount,
      bank,
      firstName,
      lastName,
      bvn,
      nin: bank === 'GTBank' ? nin : '', // Include NIN only if GTBank is selected
    };
    authAxios.post('/virtual_account/', formData)
      .then(res => {
        console.log('Success:', res.data);
        setLoading(false); // Stop loader on success
      })
      .catch(err => {
        console.error(err);
        setLoading(false); // Stop loader on error
      });
  };

  return (
    <div className="max-w-xl mx-auto p-4 bg-gray-100 rounded-lg shadow-lg">
      <h1 className="text-2xl font-semibold mb-4">Create virtual account</h1>
      <form onSubmit={handleSubmit} className="space-y-4">

        {/* Select Bank Dropdown */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">Select Bank</label>
          <select
            value={bank}
            onChange={(e) => setBank(e.target.value)}
            className="w-full p-2 border rounded-md shadow-sm"
          >
            <option value="SafeHaven">SafeHaven</option>
            <option value="GTBank">GTBank</option>
          </select>
        </div>

        {/* First Name Input */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">First Name</label>
          <input
            type="text"
            value={firstName}
            required
            onChange={(e) => setFirstName(e.target.value)}
            className="w-full p-2 border rounded-md shadow-sm"
            placeholder="Enter your first name"
          />
        </div>

        {/* Last Name Input */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">Last Name</label>
          <input
            type="text"
            value={lastName}
            required
            onChange={(e) => setLastName(e.target.value)}
            className="w-full p-2 border rounded-md shadow-sm"
            placeholder="Enter your last name"
          />
        </div>

        {/* BVN Input with maxLength */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">BVN</label>
          <input
            type="text"
            value={bvn}
            required
            onChange={(e) => setBvn(e.target.value)}
            maxLength="11"  // Set maximum length to 11
            className="w-full p-2 border rounded-md shadow-sm"
            placeholder="Enter your BVN"
          />
        </div>

        {/* NIN Input (only shows if GTBank is selected) */}
        {bank === 'GTBank' && (
          <div>
            <label className="block text-gray-700 font-medium mb-2">NIN</label>
            <p className='text-sm -mt-3 mb-3 text-red-700'>*required for GTBank</p>
            <input
              type="text"
              value={nin}
              required
              onChange={(e) => setNin(e.target.value)}
              maxLength="11"
              className="w-full p-2 border rounded-md shadow-sm"
              placeholder="Enter your NIN"
            />
          </div>
        )}

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            disabled={loading} // Disable button when loading
            className={`w-full bg-vibrantGreen text-white p-2 rounded-md hover:bg-green-600 transition duration-200 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            {loading ? 'Submitting...' : 'Submit'} {/* Show loader text */}
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreatVACC;