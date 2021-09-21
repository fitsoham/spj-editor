import Link from 'next/link';
import React from 'react';

interface HeaderInterface {
  roomTypeId?: string;
  roomTypeTitle?: string;
}

const Header: React.FC<HeaderInterface> = ({ roomTypeId, roomTypeTitle }) => {
  return (
    <div className="h-16 bg-white flex items-center">
      <Link href="/">
        <a>
          <div className="w-16 h-16 bg-red-500 flex items-center justify-center">
            <svg width="25" height="25">
              <path
                d="M23.778 7.085L14.028.472a2.713 2.713 0 00-3.057 0L1.22 7.085A2.794 2.794 0 000 9.402v12.81C0 23.752 1.226 24.999 2.738 25h8.683c.38 0 .689-.314.689-.7 0-.388-.309-.702-.69-.702H2.739c-.75 0-1.36-.62-1.36-1.384V9.397c0-.463.227-.895.606-1.151l9.751-6.61a1.352 1.352 0 011.53 0l9.75 6.61c.379.256.606.688.607 1.151V22.14c0 .39-.16.761-.443 1.024a1.345 1.345 0 01-1.043.355 17.496 17.496 0 01-9.464-3.755c-2.529-2.093-3.921-4.685-3.966-7.345a1.622 1.622 0 011.433-1.701c.43-.034.854.117 1.17.415.317.299.496.718.495 1.157a.707.707 0 00.2.498c.13.133.306.207.49.207.38 0 .688-.313.688-.7 0-.871.694-1.577 1.55-1.577.857 0 1.551.706 1.551 1.577a8.856 8.856 0 01-1.75 5.137.709.709 0 00.172.947.681.681 0 00.94-.122 10.22 10.22 0 002.02-5.957 2.974 2.974 0 00-1.922-2.802 2.895 2.895 0 00-3.246.884 2.876 2.876 0 00-2.45-1.057c-1.576.144-2.767 1.516-2.712 3.124.102 6.23 6.551 11.709 14.681 12.474a2.71 2.71 0 002.094-.719c.568-.528.89-1.274.89-2.057V9.402c0-.932-.459-1.801-1.222-2.317z"
                fill="#FFF"
                fillRule="nonzero"
              />
            </svg>
          </div>
        </a>
      </Link>
      <div className="p-4" id={roomTypeId}>
        <p className="font-bold text-gray-700">{roomTypeTitle} - Design canvas </p>
      </div>
      {/* <div className="flex-1 mx-4 flex items-center justify-end">
        <p className="text-gray-800 text-sm mr-1">Admin</p>
        <ChevronDownIcon className="w-3 h-3 mr-3" />
        <Image
          className="rounded-full"
          src="https://res.cloudinary.com/spacejoy/image/upload/v1621832684/maria_castillero_zzcgvs.png"
          alt="Avatar"
          height="35"
          width="35"
        />
      </div> */}
    </div>
  );
};

export default Header;
