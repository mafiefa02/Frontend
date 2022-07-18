import React from 'react';
import GlobalStyle from './styles/global';
import qr from "./assets/images/image-qr-code.png";

export default function App(): JSX.Element {
  return (
    <div className="App">
      <GlobalStyle />
      <div className="flex min-w-screen min-h-screen bg-lightGray justify-center items-center">
        <div className="flex-col rounded-[13px] bg-white min-h-[21em] min-w-[15em] justify-center items-start">
          <div className="flex rounded-[13px] max-h-[15em] max-w-[15em] p-3 overflow-hidden">
            <img className='rounded-[13px] overflow-hidden' src={qr} alt="qr-code" />
          </div>
          <div className="flex-col max-w-[15em] justify-center items-center">
            <div className="flex text-[15px] text-center pl-6 pr-6 font-[700]">Improve your front-end skills by building projects.</div>
            <div className="flex text-[10px] text-center pl-6 pr-6 pt-3 pb-6 font-light text-gray-500">Scan the QR code to visit Frontend Mentor and take your coding skills to the next level.</div>
          </div>
        </div>
      </div>
    </div>
  );
};
