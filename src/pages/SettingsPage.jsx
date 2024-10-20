import React, { useContext, useState } from 'react';
import { TabView, TabPanel } from 'primereact/tabview';
import { DashboardContext } from '../context/DashboardContext';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';

const SettingsPage = () => {
  const { user, updateGeneralInfo, updatePassword, updatePin } = useContext(DashboardContext);

  // States for form inputs
  const [generalInfo, setGeneralInfo] = useState({ first_name: user?.first_name || '', last_name: user?.last_name || '' });
  const [passwordData, setPasswordData] = useState({ old_password: '', new_password: '', confirm_password: '' });
  const [pinData, setPinData] = useState({ old_pin: '', new_pin: '', confirm_pin: '' });

  // Handle form submissions
  const handleGeneralSubmit = (e) => {
    e.preventDefault();
    updateGeneralInfo(generalInfo);
  };

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (passwordData.new_password === passwordData.confirm_password) {
      updatePassword(passwordData);
    } else {
      toast.error('Passwords do not match.');
    }
  };

  const handlePinSubmit = (e) => {
    e.preventDefault();
    if (pinData.new_pin === pinData.confirm_pin) {
      updatePin(pinData);
    } else {
      toast.error('PINs do not match.');
    }
  };

  return (
    <div className="p-5 max-w-6xl mx-auto bg-vibrantGreen bg-opacity-10 border border-vibrantGreen border-opacity-50 rounded-md">
      <h2 className="text-2xl font-semibold mb-5 text-gray-800">Settings</h2>
      
      <TabView className="shadow-sm rounded-lg">
        {/* General Tab */}
        <TabPanel header="General" leftIcon="pi pi-user">
          <form onSubmit={handleGeneralSubmit} className="space-y-5">
            <div className="mb-3">
              <label htmlFor="first_name" className="block text-gray-600 font-medium">First Name</label>
              <InputText 
                id="first_name" 
                className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 shadow-sm"
                value={generalInfo.first_name} 
                onChange={(e) => setGeneralInfo({ ...generalInfo, first_name: e.target.value })} 
              />
            </div>
            <div className="mb-3">
              <label htmlFor="last_name" className="block text-gray-600 font-medium">Last Name</label>
              <InputText 
                id="last_name" 
                className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 shadow-sm"
                value={generalInfo.last_name} 
                onChange={(e) => setGeneralInfo({ ...generalInfo, last_name: e.target.value })} 
              />
            </div>
            <div className="flex justify-end">
              <Button label="Save Changes" icon="pi pi-save" className="p-button-success px-5 py-2 text-sm" type="submit" />
            </div>
          </form>
        </TabPanel>

        {/* Change Password Tab */}
        <TabPanel header="Change Password" leftIcon="pi pi-lock">
          <form onSubmit={handlePasswordSubmit} className="space-y-5">
            <div className="mb-3">
              <label htmlFor="old_password" className="block text-gray-600 font-medium">Old Password</label>
              <Password 
                id="old_password" 
                className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 shadow-sm"
                value={passwordData.old_password} 
                onChange={(e) => setPasswordData({ ...passwordData, old_password: e.target.value })} 
                toggleMask 
              />
            </div>
            <div className="mb-3">
              <label htmlFor="new_password" className="block text-gray-600 font-medium">New Password</label>
              <Password 
                id="new_password" 
                className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 shadow-sm"
                value={passwordData.new_password} 
                onChange={(e) => setPasswordData({ ...passwordData, new_password: e.target.value })} 
                toggleMask 
              />
            </div>
            <div className="mb-3">
              <label htmlFor="confirm_password" className="block text-gray-600 font-medium">Confirm New Password</label>
              <Password 
                id="confirm_password" 
                className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 shadow-sm"
                value={passwordData.confirm_password} 
                onChange={(e) => setPasswordData({ ...passwordData, confirm_password: e.target.value })} 
                toggleMask 
              />
            </div>
            <div className="flex justify-end">
              <Button label="Change Password" icon="pi pi-save" className="p-button-success px-5 py-2 text-sm" type="submit" />
            </div>
          </form>
        </TabPanel>

        {/* Change PIN Tab */}
        <TabPanel header="Change PIN" leftIcon="pi pi-key">
          <form onSubmit={handlePinSubmit} className="space-y-5">
            <div className="mb-3">
              <label htmlFor="old_pin" className="block text-gray-600 font-medium">Old PIN</label>
              <Password 
                id="old_pin" 
                className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 shadow-sm"
                value={pinData.old_pin} 
                onChange={(e) => setPinData({ ...pinData, old_pin: e.target.value })} 
                toggleMask 
                feedback={false} 
              />
            </div>
            <div className="mb-3">
              <label htmlFor="new_pin" className="block text-gray-600 font-medium">New PIN</label>
              <Password 
                id="new_pin" 
                className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 shadow-sm"
                value={pinData.new_pin} 
                onChange={(e) => setPinData({ ...pinData, new_pin: e.target.value })} 
                toggleMask 
                feedback={false} 
              />
            </div>
            <div className="mb-3">
              <label htmlFor="confirm_pin" className="block text-gray-600 font-medium">Confirm New PIN</label>
              <Password 
                id="confirm_pin" 
                className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 shadow-sm"
                value={pinData.confirm_pin} 
                onChange={(e) => setPinData({ ...pinData, confirm_pin: e.target.value })} 
                toggleMask 
                feedback={false} 
              />
            </div>
            <div className="flex justify-end">
              <Button label="Change PIN" icon="pi pi-save" className="p-button-success px-5 py-2 text-sm" type="submit" />
            </div>
          </form>
        </TabPanel>
      </TabView>
    </div>
  );
};

export default SettingsPage;
