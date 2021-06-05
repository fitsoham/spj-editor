import { ArrowRightIcon } from '@heroicons/react/outline';
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

interface CollectionListInterface {
  count: number;
}

const CollectionList: React.FC<CollectionListInterface> = ({ count }) => {
  return (
    <section className="interior-design-section">
      <div className="py-4 bg-gray-100">
        <div className="container mx-auto px-4 pt-8">
          <div className="flex items-center">
            <div className="flex-1">
              <p className="text-gray-500">Largest collection of 3D rendered images</p>
              <h1 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Hand Picked Collections
              </h1>
            </div>
            {count !== 0 && (
              <div className="text-right flex-1">
                <Link href="/collection">
                  <a className="text-sm hover:text-red-500">
                    See All <ArrowRightIcon className="inline w-4 h-4" />
                  </a>
                </Link>
              </div>
            )}
          </div>
          <div className="relative">
            <AnimateBox className="grid grid-cols-6 gap-8 my-6">
              <li>
                <Link href="/collection/bedroom">
                  <a>
                    <div className="relative rounded-sm overflow-hidden transition-shadow transition-transform transform shadow-xl hover:shadow-sm hover:-translate-y-1 border border-gray-200">
                      <Image
                        className="rounded-sm object-cover"
                        alt="tmp"
                        src="https://images.unsplash.com/photo-1562663474-6cbb3eaa4d14?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80"
                        height="300"
                        width="225"
                      />
                      <div className="absolute bottom-0 right-0 left-0 bg-gradient-to-t from-gray-900 to-transparent pb-4 pt-10 px-4">
                        <p className="text-lg font-semibold text-white">
                          Bedroom <ArrowRightIcon className="inline w-4 h-4" />
                        </p>
                        <p className="text-indigo-400 text-sm">2000+ 3D Renders</p>
                      </div>
                    </div>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/collection/bedroom">
                  <a>
                    <div className="relative rounded-sm overflow-hidden transition-shadow transition-transform transform shadow-xl hover:shadow-sm hover:-translate-y-1 border border-gray-200">
                      <Image
                        className="rounded-sm object-cover"
                        alt="tmp"
                        src="https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=934&q=80"
                        height="300"
                        width="225"
                      />
                      <div className="absolute bottom-0 right-0 left-0 bg-gradient-to-t from-gray-900 to-transparent pb-4 pt-10 px-4">
                        <p className="text-lg font-semibold text-white">
                          Living Room <ArrowRightIcon className="inline w-4 h-4" />
                        </p>
                        <p className="text-red-400 text-sm">2000+ 3D Renders</p>
                      </div>
                    </div>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/collection/bedroom">
                  <a>
                    <div className="relative rounded-sm overflow-hidden transition-shadow transition-transform transform shadow-xl hover:shadow-sm hover:-translate-y-1 border border-gray-200">
                      <Image
                        className="rounded-sm object-cover"
                        alt="tmp"
                        src="https://images.unsplash.com/photo-1605351720698-6cfec9eb9b5e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80"
                        height="300"
                        width="225"
                      />
                      <div className="absolute bottom-0 right-0 left-0 bg-gradient-to-t from-gray-900 to-transparent pb-4 pt-10 px-4">
                        <p className="text-lg font-semibold text-white">
                          Entryway <ArrowRightIcon className="inline w-4 h-4" />
                        </p>
                        <p className="text-yellow-400 text-sm">2000+ 3D Renders</p>
                      </div>
                    </div>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/collection/bedroom">
                  <a>
                    <div className="relative rounded-sm overflow-hidden transition-shadow transition-transform transform shadow-xl hover:shadow-sm hover:-translate-y-1 border border-gray-200">
                      <Image
                        className="rounded-sm object-cover"
                        alt="tmp"
                        src="https://images.unsplash.com/photo-1607522783211-cb0d1ffdab8a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80"
                        height="300"
                        width="225"
                      />
                      <div className="absolute bottom-0 right-0 left-0 bg-gradient-to-t from-gray-900 to-transparent pb-4 pt-10 px-4">
                        <p className="text-lg font-semibold text-white">
                          Home Office <ArrowRightIcon className="inline w-4 h-4" />
                        </p>
                        <p className="text-green-400 text-sm">2000+ 3D Renders</p>
                      </div>
                    </div>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/collection/bedroom">
                  <a>
                    <div className="relative rounded-sm overflow-hidden transition-shadow transition-transform transform shadow-xl hover:shadow-sm hover:-translate-y-1 border border-gray-200">
                      <Image
                        className="rounded-sm object-cover"
                        alt="tmp"
                        src="https://images.unsplash.com/photo-1519974719765-e6559eac2575?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                        height="300"
                        width="225"
                      />
                      <div className="absolute bottom-0 right-0 left-0 bg-gradient-to-t from-gray-900 to-transparent pb-4 pt-10 px-4">
                        <p className="text-lg font-semibold text-white">
                          Work Station <ArrowRightIcon className="inline w-4 h-4" />
                        </p>
                        <p className="text-blue-400 text-sm">2000+ 3D Renders</p>
                      </div>
                    </div>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/collection/bedroom">
                  <a>
                    <div className="relative rounded-sm overflow-hidden transition-shadow transition-transform transform shadow-xl hover:shadow-sm hover:-translate-y-1 border border-gray-200">
                      <Image
                        className="rounded-sm object-cover"
                        alt="tmp"
                        src="https://images.unsplash.com/photo-1594113768745-aa11bdc68b47?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=975&q=80"
                        height="300"
                        width="225"
                      />
                      <div className="absolute bottom-0 right-0 left-0 bg-gradient-to-t from-gray-900 to-transparent pb-4 pt-10 px-4">
                        <p className="text-lg font-semibold text-white">
                          Kis&apos;s Room <ArrowRightIcon className="inline w-4 h-4" />
                        </p>
                        <p className="text-pink-400 text-sm">2000+ 3D Renders</p>
                      </div>
                    </div>
                  </a>
                </Link>
              </li>
              {count === 0 &&
                [1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6].map((i) => (
                  <li key={`${i}`}>
                    <Link href="/collection/bedroom">
                      <a>
                        <div className="relative rounded-sm overflow-hidden transition-shadow transition-transform transform shadow-xl hover:shadow-sm hover:-translate-y-1 border border-gray-200">
                          <Image
                            className="rounded-sm object-cover"
                            alt="tmp"
                            src="https://images.unsplash.com/photo-1562663474-6cbb3eaa4d14?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80"
                            height="300"
                            width="225"
                          />
                          <div className="absolute bottom-0 right-0 left-0 bg-gradient-to-t from-gray-900 to-transparent pb-4 pt-10 px-4">
                            <p className="text-lg font-semibold text-white">
                              Bedroom <ArrowRightIcon className="inline w-4 h-4" />
                            </p>
                            <p className="text-indigo-400 text-sm">2000+ 3D Renders</p>
                          </div>
                        </div>
                      </a>
                    </Link>
                  </li>
                ))}
            </AnimateBox>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollectionList;
