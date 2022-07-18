import { useState } from 'react';
import GlobalStyle from './styles/global';
import { AiFillStar } from 'react-icons/ai';

export default function App(): JSX.Element {
  return (
    <div className="App">
      <GlobalStyle />
      <div className="flex justify-center items-center min-w-screen min-h-screen bg-verydarkblue">
        <div className="flex-col justify-center items-center min-w-[25em] min-h-[25em] bg-darkblue rounded-[40px]">
          <div className='flex-col justify-center align-center p-8 max-w-[25em]'>
            <div className="flex min-w-full">
              <div className='flex justify-center items-center rounded-full min-w-[40px] min-h-[40px] bg-gray-700'>
                <AiFillStar size={17} style={{ fill: 'orange' }} />
              </div>
            </div>
            <div className="flex min-w-full pt-7 text-2xl text-white"><b>How did we do?</b></div>
            <div className="flex min-w-full pt-2 text-md text-gray-400"><p>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p></div>
            <div className="flex-col">
              <div className="flex min-w-full justify-between rounded-full pt-8">
                <button className="flex rounded-full bg-gray-500 min-h-[55px] w-[55px] items-center justify-center opacity-40 text-white hover:opacity-100 active:bg-orange active:opacity-100"><b>1</b></button>
                <button className="flex rounded-full bg-gray-500 min-h-[55px] w-[55px] items-center justify-center opacity-40 text-white hover:opacity-100 active:bg-orange active:opacity-100"><b>2</b></button>
                <button className="flex rounded-full bg-gray-500 min-h-[55px] w-[55px] items-center justify-center opacity-40 text-white hover:opacity-100 active:bg-orange active:opacity-100"><b>3</b></button>
                <button className="flex rounded-full bg-gray-500 min-h-[55px] w-[55px] items-center justify-center opacity-40 text-white hover:opacity-100 active:bg-orange active:opacity-100"><b>4</b></button>
                <button className="flex rounded-full bg-gray-500 min-h-[55px] w-[55px] items-center justify-center opacity-40 text-white hover:opacity-100 active:bg-orange active:opacity-100"><b>5</b></button>
              </div>
            </div>
            <button className="min-w-full bg-orange rounded-full justify-center items-center mt-7 min-h-[40px] hover:bg-yellow-800 text-white active:bg-white active:text-orange"><b>SUBMIT</b></button>
          </div>
        </div>
      </div>
    </div>
  )
}
