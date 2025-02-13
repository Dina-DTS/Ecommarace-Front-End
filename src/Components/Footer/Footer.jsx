
import amazon_image from "../../assets/amazon-pay.png"
import master from "../../assets/mastercard.webp"
import payPal from "../../assets/paypal.png"
import American from "../../assets/American-Express-Color.png"
import AppStore from "../../assets/get-apple-store.png"
import GooglePlay from "../../assets/get-google-play.png"
import { useLocation } from "react-router-dom";

  
export default function Footer() {
  const location = useLocation();
  const hideFooterRoutes = ["/login", "/register","/restpass","/codeverify","/forgetpass"];

  if (hideFooterRoutes.includes(location.pathname)) return null;

  return (
    <footer className="w-full bg-gray-100 shadow-md p-4 mt-32 ">
      <div className="container mx-auto ">
        <h2 className="text-lg font-semibold">Get the FreshCart app</h2>
        <p className="text-gray-600 text-sm">
          We will send you a link, open it on your phone to download the app.
        </p>

        <div className="flex flex-col md:flex-row justify-between items-center mt-2 mb-10">
          <input
            type="email"
            placeholder="Email .."
            className="border p-2 rounded focus:outline-none w-full"
          />
          <button className="bg-green-600 text-white rounded-lg w-44 p-3 m-2">
            Share App Link
          </button>
        </div>
 
        {/* Payment Partners */}
        <div className="flex flex-col md:flex-row justify-between items-center text-gray-500 border-t-2 border-b-2 border-gray-300 p-5">
          <div className="flex gap-3 mt-10">
            <span>Payment Partners:</span>
            <img src={American} alt="American Express" className="h-5" />
            <img src={amazon_image} alt="Amazon Pay" className="h-5" />
            <img src={master} alt="MasterCard" className="h-5" />
            <img src={payPal} alt="PayPal" className="h-5" />
          </div>

          {/* App Store Links */}
          <div className="flex gap-2 mt-10">
            <span>Get deliveries with FreshCart</span>
            <img src={AppStore} alt="App Store" className="h-8" />
            <img src={GooglePlay} alt="Google Play" className="h-8" />
          </div>
        </div>
      </div>
    </footer>
  );
}
