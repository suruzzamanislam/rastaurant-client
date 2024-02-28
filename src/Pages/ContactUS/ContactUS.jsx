import contactImg from '../../../public/contactUs.jpg';
import Cover from '../../Components/Cover/Cover';
import SectionTitle from '../../Components/SectionTitle/SectionTitle';
import { MdPhoneInTalk } from 'react-icons/md';
import { GrSend } from 'react-icons/gr';

const ContactUS = () => {
  return (
    <>
      <Cover img={contactImg} title="CONTACT US"></Cover>
      <div className="p-2">
        <div className="my-10">
          <SectionTitle subTitle="Visit Us" title="OUR LOCATION"></SectionTitle>
        </div>

        <div className="max-w-5xl mx-auto p-2 flex flex-col md:flex-row gap-2 md:gap-0 justify-between items-center">
          <div className=" text-center border">
            <div className="bg-[#D1A054] flex justify-center py-2">
              <MdPhoneInTalk className="text-3xl font-medium text-white"></MdPhoneInTalk>
            </div>
            <div className=" px-4 pb-4">
              <div className="bg-[#F3F3F3] px-16 py-6">
                <div>
                  <p className="text-xl font-medium mb-2">PHONE</p>
                  <p className="text-[#444444]">+8801880992236</p>
                </div>
              </div>
            </div>
          </div>
          <div className=" text-center border">
            <div className="bg-[#D1A054] flex justify-center py-2">
              <MdPhoneInTalk className="text-3xl font-medium text-white"></MdPhoneInTalk>
            </div>
            <div className=" px-4 pb-4">
              <div className="bg-[#F3F3F3] px-16 py-6">
                <div>
                  <p className="text-xl font-medium mb-2">ADDRESS</p>
                  <p className="text-[#444444]">Kaligonj, Lalmonithat</p>
                </div>
              </div>
            </div>
          </div>
          <div className=" text-center border">
            <div className="bg-[#D1A054] flex justify-center py-2">
              <MdPhoneInTalk className="text-3xl font-medium text-white"></MdPhoneInTalk>
            </div>
            <div className=" px-4 pb-4">
              <div className="bg-[#F3F3F3] px-16 py-6">
                <div>
                  <p className="text-xl font-medium mb-2">WORKING HOURS</p>
                  <p className="text-[#444444]">Sat - Thu: 10:00 - 23:00</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 max-w-5xl mx-auto">
          <SectionTitle
            subTitle="Send Us a Message"
            title="CONTACT FORM"
          ></SectionTitle>

          <form className=" px-5 py-6 md:p-20 bg-[#F3F3F3] mt-14 mb-7">
            <div className="flex flex-col md:flex-row justify-between gap-3">
              <div className="md:w-1/2">
                <p className="text-xl font-semibold pb-2">Name*</p>
                <input
                  type="text"
                  placeholder="Name"
                  className="input focus:outline-0 w-full "
                />
              </div>
              <div className="md:w-1/2">
                <p className="text-xl font-semibold pb-2">Email*</p>
                <input
                  type="text"
                  placeholder="Email"
                  className="input focus:outline-0 w-full "
                />
              </div>
            </div>

            <div className="w-full mt-5">
              <p className="text-xl font-semibold pb-2">Phone*</p>
              <input
                type="text"
                placeholder="Phone"
                className="input focus:outline-0 w-full "
              />
            </div>

            <div className="w-full mt-5">
              <p className="text-xl font-semibold pb-2">Message*</p>
              <textarea
                name=""
                placeholder="Enter your message here"
                id=""
                rows="7"
                className="p-2 w-full resize-none focus:outline-0"
              ></textarea>
            </div>
            <div className="mt-6 flex justify-center">
              <button className="flex items-center gap-2 bg-gradient-to-r from-violet-500 to-fuchsia-500 px-4 py-2 text-xl font-medium text-white hover:to-violet-500 transition-all ease-in-out duration-1000 hover:from-fuchsia-500 bg-[200%_auto] hover:bg-[right_center]">
                Send Message <GrSend></GrSend>
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactUS;
