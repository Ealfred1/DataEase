import React, { useContext, useState } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { TabView, TabPanel } from 'primereact/tabview';
import { DashboardContext } from '../context/DashboardContext';
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
    <div className="p-5 max-w-[77rem] mx-auto bg-vibrantGreen bg-opacity-[0.05] border border-vibrantGreen border-opacity-50 rounded-md">
      <h2 className="text-3xl leading-32 tracking-wide font-semibold mb-5 text-gray-800">Settings</h2>
      
      <TabView className="tab-view-custom w-full">
        {/* General Tab */}
        <TabPanel header="General" leftIcon="pi pi-user flex">
          <form onSubmit={handleGeneralSubmit} className="space-y-5">
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="first_name" className="small-1 text-gray font-semibold text-[16px]">First Name</Label>
                <input
                  id="first_name"
                  type="text"
                  className="task-input"
                  placeholder="Billy"
                  value={generalInfo.first_name}
                  onChange={(e) => setGeneralInfo({ ...generalInfo, first_name: e.target.value })} 
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="last_name" className="small-1 text-gray font-semibold text-[16px]">Last Name</Label>
                <input
                  id="last_name"
                  type="text"
                  className="task-input"
                  placeholder="Doe"
                  value={generalInfo.last_name}
                  onChange={(e) => setGeneralInfo({ ...generalInfo, last_name: e.target.value })} 
                  required
                />
              </div>
            </div>
            <div className="flex justify-end">
              <Button label="Save Changes" icon="pi pi-save" className="btn-main" type="submit" />
            </div>
          </form>
        </TabPanel>

        {/* Change Password Tab */}
        <TabPanel header="Change Password" leftIcon="pi pi-lock" className="flex">
          <form onSubmit={handlePasswordSubmit} className="space-y-5 w-full">
          <div className="grid gap-4 w-full">
            <div className="grid gap-2">
              <Label htmlFor="old_password" className="small-1 text-gray font-semibold text-[16px]">Old Password</Label>
              <input 
                id="old_password" 
                className="task-input"
                value={passwordData.old_password} 
                onChange={(e) => setPasswordData({ ...passwordData, old_password: e.target.value })} 
                toggleMask 
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="new_password" className="small-1 text-gray font-semibold text-[16px]">New Password</Label>
              <input 
                id="new_password" 
                className="task-input"
                value={passwordData.new_password} 
                onChange={(e) => setPasswordData({ ...passwordData, new_password: e.target.value })} 
                toggleMask 
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="confirm_password" className="small-1 text-gray font-semibold text-[16px]">Confirm New Password</Label>
              <input 
                id="confirm_password" 
                className="task-input"
                value={passwordData.confirm_password} 
                onChange={(e) => setPasswordData({ ...passwordData, confirm_password: e.target.value })} 
                toggleMask 
              />
            </div>
            <div className="flex justify-end">
              <Button label="Change Password" icon="pi pi-save" className="btn-main" type="submit" />
            </div>
          </div>
          </form>
        </TabPanel>

        {/* Change PIN Tab */}
        <TabPanel header="Change PIN" leftIcon="pi pi-key">
          <form onSubmit={handlePinSubmit} className="space-y-5">
          <div className="grid gap-4 w-full">
            <div className="grid gap-2">
              <Label htmlFor="old_pin" className="small-1 text-gray font-semibold text-[16px]">Old PIN</Label>
              <input 
                id="old_pin" 
                className="task-input"
                value={pinData.old_pin} 
                onChange={(e) => setPinData({ ...pinData, old_pin: e.target.value })} 
                toggleMask 
                feedback={false} 
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="new_pin" className="small-1 text-gray font-semibold text-[16px]">New PIN</Label>
              <input 
                id="new_pin" 
                className="task-input"
                value={pinData.new_pin} 
                onChange={(e) => setPinData({ ...pinData, new_pin: e.target.value })} 
                toggleMask 
                feedback={false} 
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="confirm_pin" className="small-1 text-gray font-semibold text-[16px]">Confirm New PIN</Label>
              <input 
                id="confirm_pin" 
                className="task-input"
                value={pinData.confirm_pin} 
                onChange={(e) => setPinData({ ...pinData, confirm_pin: e.target.value })} 
                toggleMask 
                feedback={false} 
              />
            </div>
            <div className="flex justify-end">
              <Button label="Change PIN" icon="pi pi-save" className="btn-main" type="submit" />
            </div>
          </div>
          </form>
        </TabPanel>
      </TabView>
    </div>
  );
};

export default SettingsPage;
