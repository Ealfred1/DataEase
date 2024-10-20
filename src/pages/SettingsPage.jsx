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
    <div className="p-5">
      <h2 className="text-2xl text-vibrantGreen font-semibold mb-5">Settings</h2>
      
      <TabView>
        {/* General Tab */}
        <TabPanel header="General" leftIcon="pi pi-user">
          <form onSubmit={handleGeneralSubmit}>
            <div className="mb-3">
              <label htmlFor="first_name" className="block text-gray-600 mb-1">First Name</label>
              <InputText id="first_name" value={generalInfo.first_name} onChange={(e) => setGeneralInfo({ ...generalInfo, first_name: e.target.value })} />
            </div>
            <div className="mb-3">
              <label htmlFor="last_name" className="block text-gray-600 mb-1">Last Name</label>
              <InputText id="last_name" value={generalInfo.last_name} onChange={(e) => setGeneralInfo({ ...generalInfo, last_name: e.target.value })} />
            </div>
            <Button label="Save Changes" icon="pi pi-save" className="p-button-success" type="submit" />
          </form>
        </TabPanel>

        {/* Change Password Tab */}
        <TabPanel header="Change Password" leftIcon="pi pi-lock">
          <form onSubmit={handlePasswordSubmit}>
            <div className="mb-3">
              <label htmlFor="old_password" className="block text-gray-600 mb-1">Old Password</label>
              <Password id="old_password" value={passwordData.old_password} onChange={(e) => setPasswordData({ ...passwordData, old_password: e.target.value })} toggleMask />
            </div>
            <div className="mb-3">
              <label htmlFor="new_password" className="block text-gray-600 mb-1">New Password</label>
              <Password id="new_password" value={passwordData.new_password} onChange={(e) => setPasswordData({ ...passwordData, new_password: e.target.value })} toggleMask />
            </div>
            <div className="mb-3">
              <label htmlFor="confirm_password" className="block text-gray-600 mb-1">Confirm New Password</label>
              <Password id="confirm_password" value={passwordData.confirm_password} onChange={(e) => setPasswordData({ ...passwordData, confirm_password: e.target.value })} toggleMask />
            </div>
            <Button label="Change Password" icon="pi pi-save" className="p-button-success" type="submit" />
          </form>
        </TabPanel>

        {/* Change PIN Tab */}
        <TabPanel header="Change PIN" leftIcon="pi pi-key">
          <form onSubmit={handlePinSubmit}>
            <div className="mb-3">
              <label htmlFor="old_pin" className="block text-gray-600 mb-1">Old PIN</label>
              <Password id="old_pin" value={pinData.old_pin} onChange={(e) => setPinData({ ...pinData, old_pin: e.target.value })} toggleMask feedback={false} />
            </div>
            <div className="mb-3">
              <label htmlFor="new_pin" className="block text-gray-600 mb-1">New PIN</label>
              <Password id="new_pin" value={pinData.new_pin} onChange={(e) => setPinData({ ...pinData, new_pin: e.target.value })} toggleMask feedback={false} />
            </div>
            <div className="mb-3">
              <label htmlFor="confirm_pin" className="block text-gray-600 mb-1">Confirm New PIN</label>
              <Password id="confirm_pin" value={pinData.confirm_pin} onChange={(e) => setPinData({ ...pinData, confirm_pin: e.target.value })} toggleMask feedback={false} />
            </div>
            <Button label="Change PIN" icon="pi pi-save" className="p-button-success" type="submit" />
          </form>
        </TabPanel>
      </TabView>
    </div>
  );
};

export default SettingsPage;
