import Pagination from '@components/Shared/Pagination';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styled, { keyframes } from 'styled-components';

const entry = keyframes`
	from { 
		opacity: 0;
        transform: scale(0.7);
	}
	to {
        opacity: 1;
        transform: scale(1);
	}
`;

const AnimateBox = styled.ul`
  & > li {
    opacity: 0;
    transform: scale(0.7);
    animation: ${entry} 0.4s forwards;
    &:nth-child(1) {
      animation-delay: 100ms;
    }
    &:nth-child(2) {
      animation-delay: 150ms;
    }
    &:nth-child(3) {
      animation-delay: 200ms;
    }
    &:nth-child(4) {
      animation-delay: 250ms;
    }
    &:nth-child(5) {
      animation-delay: 300ms;
    }
    &:nth-child(6) {
      animation-delay: 350ms;
    }
    &:nth-child(7) {
      animation-delay: 400ms;
    }
    &:nth-child(8) {
      animation-delay: 450ms;
    }
    &:nth-child(9) {
      animation-delay: 500ms;
    }
    &:nth-child(10) {
      animation-delay: 550ms;
    }
    &:nth-child(11) {
      animation-delay: 600ms;
    }
    &:nth-child(12) {
      animation-delay: 650ms;
    }
  }
`;

const CollectionList: React.FC = () => {
  return (
    <section className="interior-design-section">
      <div>
        <div className="container mx-auto px-4">
          <div className="flex items-end py-20">
            <div className="flex-1">
              <p className="text-gray-500">Largest collection of 3D rendered images</p>
              <h1 className="my-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Hand Picked Collections
              </h1>
              <p className="text-gray-800 max-w-3xl">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto id possimus, sit assumenda sequi
                qui tempora placeat veritatis. Similique amet aperiam sequi assumenda. Quos ad, asperiores laboriosam
                nihil sint provident.
              </p>
            </div>
          </div>
          <div className="relative bg-white">
            <AnimateBox className="grid grid-cols-6 gap-x-8 gap-y-10">
              <li>
                <Link href="/collection/bedroom">
                  <a>
                    <div className="relative">
                      <div className="next-image-fix transition-all transform duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1 border border-gray-200">
                        <Image
                          className="rounded-sm object-cover"
                          alt="tmp"
                          src="https://images.unsplash.com/photo-1562663474-6cbb3eaa4d14?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80"
                          height="300"
                          width="225"
                        />
                      </div>
                      <div className="pt-4">
                        <p>Bedroom</p>
                        <p className="text-gray-500 text-sm">2000+ 3D Renders</p>
                      </div>
                    </div>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/collection/bedroom">
                  <a>
                    <div className="relative">
                      <div className="next-image-fix transition-all transform duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1 border border-gray-200">
                        <Image
                          className="rounded-sm object-cover"
                          alt="tmp"
                          src="https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=934&q=80"
                          height="300"
                          width="225"
                        />
                      </div>
                      <div className="pt-4">
                        <p>Bedroom</p>
                        <p className="text-gray-500 text-sm">2000+ 3D Renders</p>
                      </div>
                    </div>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/collection/bedroom">
                  <a>
                    <div className="relative">
                      <div className="next-image-fix transition-all transform duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1 border border-gray-200">
                        <Image
                          className="rounded-sm object-cover"
                          alt="tmp"
                          src="https://images.unsplash.com/photo-1605351720698-6cfec9eb9b5e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80"
                          height="300"
                          width="225"
                        />
                      </div>
                      <div className="pt-4">
                        <p>Bedroom</p>
                        <p className="text-gray-500 text-sm">2000+ 3D Renders</p>
                      </div>
                    </div>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/collection/bedroom">
                  <a>
                    <div className="relative">
                      <div className="next-image-fix transition-all transform duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1 border border-gray-200">
                        <Image
                          className="rounded-sm object-cover"
                          alt="tmp"
                          src="https://images.unsplash.com/photo-1607522783211-cb0d1ffdab8a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80"
                          height="300"
                          width="225"
                        />
                      </div>
                      <div className="pt-4">
                        <p>Bedroom</p>
                        <p className="text-gray-500 text-sm">2000+ 3D Renders</p>
                      </div>
                    </div>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/collection/bedroom">
                  <a>
                    <div className="relative">
                      <div className="next-image-fix transition-all transform duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1 border border-gray-200">
                        <Image
                          className="rounded-sm object-cover"
                          alt="tmp"
                          src="https://images.unsplash.com/photo-1519974719765-e6559eac2575?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                          height="300"
                          width="225"
                        />
                      </div>
                      <div className="pt-4">
                        <p>Bedroom</p>
                        <p className="text-gray-500 text-sm">2000+ 3D Renders</p>
                      </div>
                    </div>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/collection/bedroom">
                  <a>
                    <div className="relative">
                      <div className="next-image-fix transition-all transform duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1 border border-gray-200">
                        <Image
                          className="rounded-sm object-cover"
                          alt="tmp"
                          src="https://images.unsplash.com/photo-1594113768745-aa11bdc68b47?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=975&q=80"
                          height="300"
                          width="225"
                        />
                      </div>
                      <div className="pt-4">
                        <p>Bedroom</p>
                        <p className="text-gray-500 text-sm">2000+ 3D Renders</p>
                      </div>
                    </div>
                  </a>
                </Link>
              </li>

              {[1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6].map((i) => (
                <li key={`${i}`}>
                  <Link href="/collection/bedroom">
                    <a>
                      <div className="relative">
                        <div className="next-image-fix transition-all transform duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1 border border-gray-200">
                          <Image
                            className="rounded-sm object-cover"
                            alt="tmp"
                            src="https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=934&q=80"
                            height="300"
                            width="225"
                          />
                        </div>
                        <div className="pt-4">
                          <p>Bedroom</p>
                          <p className="text-gray-500 text-sm">2000+ 3D Renders</p>
                        </div>
                      </div>
                    </a>
                  </Link>
                </li>
              ))}
            </AnimateBox>
            <Pagination />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollectionList;
