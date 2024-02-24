import { FaFacebookF, FaTwitter } from 'react-icons/fa';
import { FaSquareInstagram } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="mt-7">
      <div className="flex text-white">
        <div className="w-1/2 flex flex-col items-center text-center justify-center bg-[#1F2937]  py-8">
          <h1 className="text-xl font-medium mb-2">CONTACT US</h1>
          <address className="">
            123 ABS Street, Uni 21, Bangladesh <br />
            +88 123456789 <br /> Mon - Fri: 08:00 - 22:00 <br /> Sat - Sun:
            10:00 - 23:00
          </address>
        </div>
        <div className="w-1/2 flex flex-col items-center text-center justify-center bg-[#111827]  py-8">
          <h1 className=" text-3xl font-medium mb-2">Follow US</h1>
          <div className="flex gap-x-7 mt-4">
            <FaFacebookF className="text-2xl"></FaFacebookF>
            <FaSquareInstagram className="text-2xl"></FaSquareInstagram>
            <FaTwitter className="text-2xl"></FaTwitter>
          </div>
        </div>
      </div>
      <div className="bg-[#151515] py-2 text-white text-center">
        <p className="text-center italic">
          Copyright © MD.Suruzzaman All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
