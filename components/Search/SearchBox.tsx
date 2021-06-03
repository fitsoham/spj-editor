import Image from 'next/image';
import React from 'react';
import styled, { keyframes } from 'styled-components';

const entry = keyframes`
	from { 
		opacity: 0;
	}
	to {
    opacity: 1;
    transform: translateY(0px);
	}
`;

const AnimateBox = styled.div`
  opacity: 0;
  animation: ${entry} 0.8s forwards;
  transform: translateY(20px);
  &.details {
    animation-delay: 550ms;
  }
  &.banner {
    animation-delay: 300ms;
  }
`;

const SearchBox = () => {
  return (
    <div className="relative h-screen bg-gray-100">
      <div className="container max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <AnimateBox>
          <form action="#" method="POST">
            <div className="relative">
              <input
                type="text"
                name="first_name"
                id="first_name"
                autoComplete="none"
                placeholder="search"
                className="py-5 pl-5 pr-20 outline-none block w-full shadow-sm focus:shadow-lg focus:ring-transparent border border-gray-100 focus:border-gray-100 rounded-xl"
              />
              <div className="absolute right-0 top-0 bottom-0 w-16 bg-gray-50 flex justify-center text-center items-center border border-gray-100 rounded-xl">
                <span className="text-xs text-yellow-500">clear</span>
              </div>
            </div>
            <div className="w-full p-5 bg-white border border-gray-100 mt-2 shadow-sm rounded-xl">
              <div className="flex items-center space-x-2 lg:space-x-4">
                <Image
                  src="https://res.cloudinary.com/spacejoy/image/upload/fl_lossy,q_auto/v1610707589/server/designs/render/60017284039102001c1e3dc9.jpg"
                  className="rounded-md"
                  alt=""
                  height={'60'}
                  width={'60'}
                />
                <div className="leading-6 space-y-1">
                  <h4>Leslie Alexander</h4>
                  <p className="text-gray-500 text-sm">Boho in designs</p>
                </div>
              </div>
            </div>
          </form>
        </AnimateBox>
      </div>
    </div>
  );
};

export default SearchBox;
