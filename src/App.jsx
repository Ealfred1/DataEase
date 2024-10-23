import { Routes, Route } from 'react-router-dom';
import { Layout, RequireAuth, AuthLayout } from './components';
import { LandingPage, LoginPage, RegisterPage, NotFound, DashboardPage, SettingsPage, ReferralsPage, AirtimePage, ElectricityPage, CablePage, DataPage, PricingPage, FaqsPage, ContactPage, AdminPage, TransactionsPaymentPage, TransactionsPurchase, BillsPage, FundAccoutPage, BonusPage, APIPage } from './pages';

const App = () => {
  return (
    <div className="w-full h-screen overflow-x-hidden">
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Layout />}>
          <Route index element={<LandingPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/*" element={<NotFound />} />
        </Route>

        {/* Protected Routes */}
        <Route element={<RequireAuth />}>
          <Route element={<AuthLayout />}>
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/settings" element={<SettingsPage />} />
            <Route path="/profile/referrals" element={<ReferralsPage />} />
            <Route path="/fund" element={<FundAccoutPage />} />
            <Route path="/data-sub" element={<DataPage />} />
            <Route path="/airtime-sub" element={<AirtimePage />} />
            <Route path="/bills" element={<BillsPage />} />
            <Route path="/bills/electricity-sub" element={<ElectricityPage />} />
            <Route path="/cable-  sub" element={<CablePage />} />
            <Route path="/admin" element={<AdminPage />} />
            <Route path="/transactions/payment" element={<TransactionsPaymentPage />} />
            <Route path="/transactions/purchase-history" element={<TransactionsPurchase />} />
            <Route path="/profile/bonus" element={<BonusPage />} />
            <Route path="/profile/referrals" element={<ReferralsPage />} />
            <Route path="/settings" element={<SettingsPage />} />
            <Route path="/profile/api" element={<APIPage />} />
            <Route path="/support/faqs" element={<FaqsPage />} />
            <Route path="/support/contact" element={<ContactPage />} />
            <Route path="/support/pricing" element={<PricingPage />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
};

export default App;
