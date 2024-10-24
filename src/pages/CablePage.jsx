import React, { useEffect, useState } from 'react';
import authAxios from '@/api/authAxios';
import { toast } from 'react-toastify';

const CablePage = () => {
  const [cables, setCables] = useState([]);
  const [selectedCable, setSelectedCable] = useState('');
  const [packages, setPackages] = useState([]);
  const [selectedPackage, setSelectedPackage] = useState('');
  const [packageDetails, setPackageDetails] = useState({});
  const [iucNumber, setIucNumber] = useState('');
  const [loading, setLoading] = useState(false); // To handle purchase loading state

  // Fetch available cables on component mount
  useEffect(() => {
    authAxios.post('/cable/', { action: 'get_cables' })
      .then(res => setCables(res.data.message))
      .catch(err => console.error(err.response?.data || err.message));
  }, []);

  // Fetch details of the selected cable
  const fetchCableDetails = (cableKey) => {
    authAxios.post('/cable/', { action: 'get_packages', vendor_id: cableKey })
      .then(res => setPackages(res.data.message.packages))
      .catch(err => console.error(err.response?.data || err.message));
  };

  // Handle cable selection
  const handleCableChange = (e) => {
    const selectedKey = e.target.value;
    setSelectedCable(selectedKey);
    fetchCableDetails(selectedKey); // Fetch packages for the selected cable
  };

  // Handle package selection
  const handlePackageChange = (e) => {
    const selectedPackageId = e.target.value;
    setSelectedPackage(selectedPackageId);

    // Find the selected package details
    const selectedPackageDetails = packages.find(pkg => pkg.package === selectedPackageId);
    if (selectedPackageDetails) {
      setPackageDetails({
        price: selectedPackageDetails.price,
        fee: (parseInt(selectedPackageDetails.Fee) + 200).toString() // Add 200 to the fee
      });
    }
  };

  // Handle purchase
  const handlePurchase = () => {
    if (!selectedCable || !selectedPackage || !iucNumber) {
      alert('Please select a cable, package, and enter your IUC number.');
      return;
    }

    setLoading(true); // Show loading state during purchase request

    authAxios.post('/cable/', {
      action: 'purchase',
      vendor_id: selectedCable,
      package_id: selectedPackage,
      account_number: iucNumber
    })
      .then(res => {
        // alert('Purchase successful!');
        if (res.data.status == 'error') {
          toast.error(res.data.message.message)
        }else {
          toast.success(res.data.message.message)
        }
        console.log(res.data.status, res.data.message.message);
      })
      .catch(err => {
        console.error(err.response?.data || err.message);
        alert('Purchase failed. Please try again.');
      })
      .finally(() => setLoading(false)); // Reset loading state after request
  };

  return (
    <div className="max-w-xl mx-auto p-4 bg-gray-100 rounded-lg shadow-lg">
      <h1 className="text-2xl font-semibold mb-4">Cable Subscription</h1>

      {/* Cable Select Dropdown */}
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2">Cable Type</label>
        <select
          value={selectedCable}
          onChange={handleCableChange}
          className="w-full p-2 border rounded-md shadow-sm"
        >
          <option value="" disabled>Select a Cable</option>
          {cables.map((cable, index) => (
            <option key={index} value={Object.keys(cable)[0]}>
              {Object.values(cable)[0]}
            </option>
          ))}
        </select>
      </div>

      {/* Package Select Dropdown */}
      {packages.length > 0 && (
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Select Package</label>
          <select
            value={selectedPackage}
            onChange={handlePackageChange}
            className="w-full p-2 border rounded-md shadow-sm"
          >
            <option value="" disabled>Select a Package</option>
            {packages.map(pkg => (
              <option key={pkg.package} value={pkg.package}>
                {pkg.package_name}
              </option>
            ))}
          </select>
        </div>
      )}

      {/* Display Package Details */}
      {selectedPackage && (
        <div className="bg-white p-4 rounded-md shadow-md mb-4">
          {/* <h2 className="text-lg font-semibold">Package Details</h2> */}
          <div className="mb-2">
            <label className="block text-gray-700 font-medium">Price</label>
            <input
              type="text"
              value={packageDetails.price}
              disabled
              className="w-full p-2 border rounded-md"
            />
          </div>
          <div className="mb-2">
            <label className="block text-gray-700 font-medium">Fee (including extra 200)</label>
            <input
              type="text"
              value={packageDetails.fee}
              disabled
              className="w-full p-2 border rounded-md"
            />
          </div>
        </div>
      )}

      {/* IUC Number Input */}
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2">IUC Number</label>
        <input
          type="text"
          value={iucNumber}
          onChange={(e) => setIucNumber(e.target.value)}
          className="w-full p-2 border rounded-md"
        />
      </div>

      {/* Purchase Button */}
      <button
        onClick={handlePurchase}
        className={`w-full p-3 text-white font-semibold rounded-md ${loading ? 'bg-gray-500' : 'bg-vibrantGreen'} hover:bg-green-600 transition`}
        disabled={loading} // Disable button while request is loading
      >
        {loading ? 'Processing...' : 'Purchase'}
      </button>
    </div>
  );
};

export default CablePage;