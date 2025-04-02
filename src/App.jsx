import React, { Suspense, lazy, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom"

import Authlayout from "./Component/layouts/Authlayout"
import Home from "./Pages/Home"
import Layout from "./Component/layouts/Layout"
import Marketplace from "./Pages/Marketplace"
import MarketDetail from "./Pages/MarketDetail"
import LockedMarketplace from "./Pages/LockedMarketplace"
import AboutUs from "./Pages/AboutUs"
import Articles from "./Pages/Articles"
import ArticleDetail from "./Pages/ArticleDetail"
import Login from "./Pages/Login"
import SignUp from "./Pages/SignUp"
import ForgotPassword from "./Pages/ForgotPassword"
import SendEmail from "./Component/Modals/SendEmail"
import OfferBid from "./Component/Modals/OfferBid"
import OfferBidPayment from "./Pages/OfferBidPayment"
import BidSubmitted from "./Component/Modals/BidSubmitted"
import Payment from "./Pages/Payment"
import LayoutLogin from "./Component/Layouts/LayoutLogin"
import MarketplaceLogin from "./Pages/MarketplaceLogin"

import MyBusiness from "./Pages/MyBusiness"
import BusinessDetail from "./Pages/BusinessDetail"
import MyBids from "./Pages/MyBids"
import BidsDetail from "./Pages/BidsDetail"
import MyWishlist from "./Pages/MyWishlist"
import MyProfile from "./Pages/MyProfile"
import EditProfile from "./Pages/EditProfile"
import ChangePassword from "./Pages/ChangePassword"
import LockedMarketplaceDetail from "./Pages/LockedMarketplaceDetail"
import ServiceProvider from "./Pages/ServiceProvider"
import ServiceProviderLogin from "./Pages/ServiceProviderLogin"
import ServiceProviderDetail from "./Pages/ServiceProviderDetail"
import ServiceProviderDetailLogin from "./Pages/ServiceProviderDetailLogin"
import CompleteProfile from "./Pages/CompleteProfile"
import StepPayment from "./Pages/StepPayment"
import HelpSupport from "./Pages/HelpSupport"
import PrivacyPolicy from "./Pages/PrivacyPolicy"
import TermsConditions from "./Pages/TermsConditions"
import TheCompany from "./Pages/TheCompany"
import FAQs from "./Pages/FAQs"
import { Toaster } from "react-hot-toast"
import Resetpassword from './Pages/Resetpassword';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import PaymentSuccess from './Pages/PaymentSuccess';
import PaymentFailed from './Pages/PaymentFailed';
import MarketDetailLogin from './Pages/BusinessDetail';

const LoginRoute = lazy(() => import('./Component/Protected_routing/LoginRoute'));
const Proteted = lazy(() => import('./Component/Protected_routing/Proteted'));
const queryClient = new QueryClient();


function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>

        <BrowserRouter>
          <Toaster />
          <Routes>

            <Route element={<Authlayout />}>
              <Route element={<LoginRoute />}>
                <Route path='/login' element={<Login />} />
                <Route path='/signup' element={<SignUp />} />
                <Route path='/reset-password' element={<Resetpassword />} />
                <Route path='/forgot-password' element={<ForgotPassword />} />
                <Route path='/complete-profile' element={<CompleteProfile />} />
              </Route>
            </Route>

            <Route element={<Layout />}>
              <Route path='/' element={<Home />} />
              <Route path='/MarketDetailLogin' element={<MarketDetailLogin />} />
              <Route path='/marketplace' element={<Marketplace />} />
              <Route path='/market-detail/:id' element={<MarketDetail />} />
              <Route path='/locked-market-detail' element={<LockedMarketplaceDetail />} />
              <Route path='/about-us' element={<AboutUs />} />
              <Route path='/the-company' element={<TheCompany />} />
              <Route path='/articles' element={<Articles />} />
              <Route path='/article-detail/:id' element={<ArticleDetail />} />
              <Route path='/send-email' element={<SendEmail />} />
              <Route path='/offer-bid' element={<OfferBid />} />
              <Route path='/offer-bid-payment' element={<OfferBidPayment />} />
              <Route path='/bid-submitted' element={<BidSubmitted />} />
              <Route path='/payment/:id' element={<Payment />} />
              <Route path='/payment-success' element={<PaymentSuccess />} />
              <Route path='/payment-failed' element={<PaymentFailed />} />
              <Route path='/service-provider' element={<ServiceProvider />} />
              <Route path='/service-provider-detail/:id' element={<ServiceProviderDetail />} />
              <Route path='/help-support' element={<HelpSupport />} />
              <Route path='/privacy-policy' element={<PrivacyPolicy />} />
              <Route path='/terms-conditions' element={<TermsConditions />} />
              <Route path='/faqs' element={<FAQs />} />
            </Route>
            <Route element={<Proteted />}>
              <Route element={<LayoutLogin />}>
                <Route path='/buy-plan' element={<StepPayment />} />
                <Route path='/marketplace-login' element={<MarketplaceLogin />} />
                <Route path='/my-business' element={<MyBusiness />} />
                <Route path='/business-detail' element={<BusinessDetail />} />
                <Route path='/my-bids' element={<MyBids />} />
                <Route path='/bids-detail' element={<BidsDetail />} />
                <Route path='/my-wishlist' element={<MyWishlist />} />
                <Route path='/my-profile' element={<MyProfile />} />
                <Route path='/change-password' element={<ChangePassword />} />
                <Route path='/edit-profile' element={<EditProfile />} />
                <Route path='/service-provider-login' element={<ServiceProviderLogin />} />
                <Route path='/service-provider-detail-login' element={<ServiceProviderDetailLogin />} />
              </Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </>
  )
}

export default App
