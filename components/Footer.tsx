"use client";
import Image from "next/image";

export default function Footer() {
  return (
    <footer>
      <div className="w-full flex flex-col md:flex-row justify-center items-center md:items-start space-y-6 md:space-y-0 md:space-x-16 p-6 bg-gray-100 px-4">
        <div className="w-full md:w-1/5 flex flex-col items-center md:items-start text-center md:text-left">
          <Image
            src="/icons/mountain.svg"
            alt="Guide Landing"
            width={45}
            height={45}
          />
          <p className="text-lg text-gray-500 whitespace-normal break-words mt-4">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint elit officia consequat.
          </p>
        </div>
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <p className="text-xl font-bold">Heading</p>
          <p className="text-lg text-gray-500">Link here</p>
          <p className="text-lg text-gray-500">Link here</p>
          <p className="text-lg text-gray-500">Link here</p>
        </div>
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <p className="text-xl font-bold">Heading</p>
          <p className="text-lg text-gray-500">Link here</p>
          <p className="text-lg text-gray-500">Link here</p>
          <p className="text-lg text-gray-500">Link here</p>
        </div>
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <p className="text-xl font-bold">Heading</p>
          <p className="text-lg text-gray-500">Link here</p>
          <p className="text-lg text-gray-500">Link here</p>
          <p className="text-lg text-gray-500">Link here</p>
        </div>
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <p className="text-xl font-bold">Connect with us</p>
          <div className="flex justify-center md:justify-start items-center space-x-4 mt-2">
            <Image
              src="/icons/noIcon.svg"
              alt="no icon"
              width={35}
              height={35}
            />
            <Image
              src="/icons/noIcon.svg"
              alt="no icon"
              width={35}
              height={35}
            />
            <Image
              src="/icons/noIcon.svg"
              alt="no icon"
              width={35}
              height={35}
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
