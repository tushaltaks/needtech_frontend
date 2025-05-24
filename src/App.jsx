import React, { lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Authlayout from "./Component/layouts/Authlayout";
import { Toaster } from "react-hot-toast";
import Resetpassword from "./Pages/Resetpassword";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ThankyouForSigningDoc from "./Pages/ThankyouForSigningDoc";

const Home = lazy(() => import("./Pages/Home"));
const Layout = lazy(() => import("./Component/Layouts/Layout"));
const Marketplace = lazy(() => import("./Pages/Marketplace"));
const MarketDetail = lazy(() => import("./Pages/MarketDetail"));
const AboutUs = lazy(() => import("./Pages/AboutUs"));
const Articles = lazy(() => import("./Pages/Articles"));
const ArticleDetail = lazy(() => import("./Pages/ArticleDetail"));
const Login = lazy(() => import("./Pages/Login"));
const SignUp = lazy(() => import("./Pages/SignUp"));
const ForgotPassword = lazy(() => import("./Pages/ForgotPassword"));
const SendEmail = lazy(() => import("./Component/Modals/SendEmail"));
const OfferBid = lazy(() => import("./Component/Modals/OfferBid"));
const OfferBidPayment = lazy(() => import("./Pages/OfferBidPayment"));
const BidSubmitted = lazy(() => import("./Component/Modals/BidSubmitted"));
const Payment = lazy(() => import("./Pages/Payment"));
const LayoutLogin = lazy(() => import("./Component/Layouts/LayoutLogin"));
const MarketplaceLogin = lazy(() => import("./Pages/MarketplaceLogin"));
const MyBusiness = lazy(() => import("./Pages/MyBusiness"));
const BusinessDetail = lazy(() => import("./Pages/BusinessDetail"));
const MyBids = lazy(() => import("./Pages/MyBids"));
const BidsDetail = lazy(() => import("./Pages/BidsDetail"));
const MyWishlist = lazy(() => import("./Pages/MyWishlist"));
const MyProfile = lazy(() => import("./Pages/MyProfile"));
const EditProfile = lazy(() => import("./Pages/EditProfile"));
const ChangePassword = lazy(() => import("./Pages/ChangePassword"));
const LockedMarketplaceDetail = lazy(() =>
  import("./Pages/LockedMarketplaceDetail")
);
const ServiceProvider = lazy(() => import("./Pages/ServiceProvider"));
const ServiceProviderDetail = lazy(() =>
  import("./Pages/ServiceProviderDetail")
);
const CompleteProfile = lazy(() => import("./Pages/CompleteProfile"));
const StepPayment = lazy(() => import("./Pages/StepPayment"));
const HelpSupport = lazy(() => import("./Pages/HelpSupport"));
const PrivacyPolicy = lazy(() => import("./Pages/PrivacyPolicy"));
const TermsConditions = lazy(() => import("./Pages/TermsConditions"));
const TheCompany = lazy(() => import("./Pages/TheCompany"));
const FAQs = lazy(() => import("./Pages/FAQs"));
const PaymentSuccess = lazy(() => import("./Pages/PaymentSuccess"));
const Unsubscribe = lazy(() => import("./Pages/Unsubscribe"));
const PaymentFailed = lazy(() => import("./Pages/PaymentFailed"));
const Home2 = lazy(() => import("./Pages/Home2"));
// const Marketplace = lazy(() => import('./Pages/Marketplace'));

const LoginRoute = lazy(() =>
  import("./Component/Protected_routing/LoginRoute")
);
const Proteted = lazy(() => import("./Component/Protected_routing/Proteted"));
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
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/reset-password" element={<Resetpassword />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
                <Route path="/complete-profile" element={<CompleteProfile />} />
                <Route path="/signNowUrl" element={<ThankyouForSigningDoc />} />
              </Route>
            </Route>

            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/index2" element={<Home2 />} />
              <Route path="/marketplace" element={<Marketplace />} />
              <Route path="/market-detail/:id" element={<MarketDetail />} />
              <Route
                path="/locked-market-detail"
                element={<LockedMarketplaceDetail />}
              />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/the-company" element={<TheCompany />} />
              <Route path="/articles" element={<Articles />} />
              <Route path="/article-detail/:id" element={<ArticleDetail />} />
              <Route path="/send-email" element={<SendEmail />} />
              <Route path="/offer-bid" element={<OfferBid />} />
              <Route path="/offer-bid-payment" element={<OfferBidPayment />} />
              <Route path="/bid-submitted" element={<BidSubmitted />} />
              <Route path="/payment/:id" element={<Payment />} />
              <Route path="/payment-success" element={<PaymentSuccess />} />
              <Route path="/payment-failed" element={<PaymentFailed />} />
              <Route path="/service-providers" element={<ServiceProvider />} />
              <Route
                path="/service-providers-detail/:id"
                element={<ServiceProviderDetail />}
              />
              <Route path="/help-support" element={<HelpSupport />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms-conditions" element={<TermsConditions />} />
              <Route path="/faqs" element={<FAQs />} />
            </Route>
            <Route element={<Proteted />}>
              <Route element={<LayoutLogin />}>
                <Route path="/buy-plan" element={<StepPayment />} />
                <Route
                  path="/marketplace-login"
                  element={<MarketplaceLogin />}
                />
                <Route path="/my-business" element={<MyBusiness />} />
                <Route path="/business-detail" element={<BusinessDetail />} />
                <Route path="/my-bids" element={<MyBids />} />
                <Route path="/bids-detail" element={<BidsDetail />} />
                <Route path="/my-wishlist" element={<MyWishlist />} />
                <Route path="/my-profile" element={<MyProfile />} />
                <Route path="/change-password" element={<ChangePassword />} />
                <Route path="/edit-profile" element={<EditProfile />} />
              </Route>
            </Route>
            <Route path="/unsubscribe" element={<Unsubscribe />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </>
  );
}

export default App;
