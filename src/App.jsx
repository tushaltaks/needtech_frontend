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
import MarketDetailLogin from "./Pages/MarketDetailLogin"
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
 



function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Authlayout />}>
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path='/forgot-password' element={<ForgotPassword />} />
            <Route path='/change-password' element={<ChangePassword />} />
          </Route>
          <Route  element={<Layout/>}>
            <Route path='/' element={<Home />} />
            <Route path='/marketplace' element={<Marketplace />} />
            <Route path='/market-detail' element={<MarketDetail />} />
            <Route path='/locked-market-detail' element={<LockedMarketplaceDetail />} />
            <Route path='/about-us' element={<AboutUs />} />
            <Route path='/articles' element={<Articles />} />   
            <Route path='/article-detail' element={<ArticleDetail />} />  
            <Route path='/send-email' element={<SendEmail />} />    
            <Route path='/offer-bid' element={<OfferBid />} />       
            <Route path='/offer-bid-payment' element={<OfferBidPayment />} /> 
            <Route path='/bid-submitted' element={<BidSubmitted />} /> 
            <Route path='/payment' element={<Payment />} />
            <Route path='/service-provider' element={<ServiceProvider />} />
            <Route path='/service-provider-detail' element={<ServiceProviderDetail />} />
          </Route>        
          <Route  element={<LayoutLogin/>}>
            <Route path='/marketplace-login' element={<MarketplaceLogin />} />
            <Route path='/market-detail-login' element={<MarketDetailLogin />} />
            <Route path='/my-business' element={<MyBusiness />} />
            <Route path='/business-detail' element={<BusinessDetail />} />
            <Route path='/my-bids' element={<MyBids />} />
            <Route path='/bids-detail' element={<BidsDetail />} />
            <Route path='/my-wishlist' element={<MyWishlist />} />
            <Route path='/my-profile' element={<MyProfile />} />
            <Route path='/edit-profile' element={<EditProfile />} />            
            <Route path='/service-provider-login' element={<ServiceProviderLogin />} />
            <Route path='/service-provider-detail-login' element={<ServiceProviderDetailLogin />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
