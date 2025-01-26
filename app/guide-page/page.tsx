"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

export default function GuidePage() {
  return (
    <div className="w-screen flex flex-col h-screen overflow-x-hidden">
      <div className="w-full h-auto flex flex-col md:flex-row items-center justify-between bg-gray-100 mb-24">
        <div
          className="flex flex-col justify-center items-center md:items-start text-center md:text-start p-4 md:p-8"
          style={{ margin: "0 auto" }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Earn more with
          </h1>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            GuideRepository
          </h1>
          <h5 className="text-md md:text-lg mb-6 md:mb-8 text-gray-500">
            Getting clients on GuideRepository is free and easy.
          </h5>
          <Button className="text-lg">Get Started</Button>
        </div>
        <div className="md:w-1/2 w-full flex justify-center items-center md:p-8 p-4">
          <Image
            src="/images/giudelanding.png"
            alt="Guide Landing"
            width={800}
            height={800}
          />
        </div>
      </div>

      <div className="w-full h-auto flex flex-col justify-center items-center mt-12 text-center p-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-8">GuideRepository</h1>
        <h5 className="text md:text-lg  text-gray-500 mb-4 md:2">
          Connect with travelers looking for the kind of adventures you offer by
          signing up today.
        </h5>
        <h5 className="text md:text-lg mb-8 md:mb-4 text-gray-500">
          You&apos;ll receive access to oue booking and payments system and in
          house market place.
        </h5>
      </div>

      <div className="w-full h-auto flex flex-col md:flex-row justify-center items-center md:items-start mb-12">
        <div className="w-1/2 flex justify-center items-center p-8">
          <Image
            src="/images/blancImg.jpg"
            alt="No image"
            width={600}
            height={600}
          />
        </div>
        <div className="flex flex-col justify-center items-start p-12 md:p-8 space-y-10">
          <div className="flex items-center justify-center">
            <Image src="/icons/check.svg" alt="check" width={40} height={40} />
            <p className="text-lg ml-2">Fast application review</p>
          </div>
          <div className="flex items-center justify-center">
            <Image src="/icons/check.svg" alt="check" width={40} height={40} />
            <p className="text-lg ml-2">Streamlined payments</p>
          </div>
          <div className="flex items-center justify-center">
            <Image src="/icons/check.svg" alt="check" width={40} height={40} />
            <p className="text-lg ml-2">100.000 + of monthly travelers</p>
          </div>
          <div className="flex items-center justify-center">
            <Image src="/icons/check.svg" alt="check" width={40} height={40} />
            <p className="text-lg ml-2">
              Supplier and customer support: we are here to help
            </p>
          </div>
          <Button className="text-lg">Get Started</Button>
        </div>
      </div>

      <div className="w-full h-auto flex flex-col justify-center items-center mt-12 mb-12 bg-gray-100">
        <h1 className="text-4xl md:text-5xl font-bold mb-12 mt-12">
          Activities we welcome
        </h1>
        <h5 className="text-xl md:text-2xl text-gray-500 mb-12 md:mb-6">
          Our customers can ask for anything
        </h5>
        <div className="flex justify-center items-center mt-12 mb-12 p-4">
          <h5 className="text md:text-2xl font-bold">Day hikes</h5>
          <Separator orientation="vertical" className="mx-6 bg-gray-400" />
          <h5 className="text md:text-2xl font-bold">Multi-day hikes</h5>
          <Separator orientation="vertical" className="mx-6 bg-gray-400" />
          <h5 className="text md:text-2xl font-bold">Rock climbing</h5>
          <Separator orientation="vertical" className="mx-6 bg-gray-400" />
          <h5 className="text md:text-2xl font-bold">
            Anything the client wants
          </h5>
        </div>
      </div>

      <div className="w-full h-auto flex justify-center items-center mt-12 mb-12">
        <h1 className="text-4xl md:text-5xl font-bold md:mb-8">
          Start in 10 minutes
        </h1>
      </div>

      <div className="w-full flex justify-center items-center mt-12 mb-12 px-4">
        <div className="flex flex-col md:flex-row w-full md:w-4/5 justify-center items-center md:justify-between space-y-6 md:space-y-0 md:space-x-6">
          <div className="w-full md:w-1/3 flex flex-col px-6 bg-gray-100 p-6 rounded-lg text-center md:text-left">
            <h5 className="text-2xl sm:text-3xl font-bold mb-2">
              Register as a guide
            </h5>
            <h3 className="text-lg sm:text-xl text-gray-500">
              Create your profile
            </h3>
          </div>
          <div className="w-full md:w-1/3 flex flex-col px-6 bg-gray-100 p-6 rounded-lg text-center md:text-left">
            <h5 className="text-2xl sm:text-3xl font-bold mb-2">
              Browse trip requests
            </h5>
            <h3 className="text-lg sm:text-xl text-gray-500">
              Create your profile
            </h3>
          </div>
          <div className="w-full md:w-1/3 flex flex-col px-6 bg-gray-100 p-6 rounded-lg text-center md:text-left">
            <h5 className="text-2xl sm:text-3xl font-bold mb-2">
              Justify as a guide
            </h5>
            <h3 className="text-lg sm:text-xl text-gray-500">
              Create your profile
            </h3>
          </div>
        </div>
      </div>

      <div className="w-full flex justify-center items-center mt-12 mb-12">
        <Button className="text-2xl">Get Started</Button>
      </div>

      <div className="w-full flex flex-col justify-center items-center mt-12 mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-12 mt-12">
          Our happy clients
        </h1>
        <div className="w-full md:w-4/5 flex flex-col md:flex-row justify-between items-center mt-12 space-y-6 md:space-y-0 md:space-x-12 px-4">
          <div className="w-full md:w-1/2 flex flex-col items-start bg-gray-100 p-6 rounded-lg shadow-lg">
            <h5 className="text-lg sm:text-xl text-gray-500">
              Lorem ipsum dolor sit amet consectetur. Condimentum eget vitae
              ligula sed urna sit sagittis interdum a. Blandit mattis mattis
              lobortis orci. Facilisis dui sagittis tempor egestas pellentesque
              eu maecenas. Risus lectus nisl.
            </h5>
            <div className="flex items-center justify-start mt-6 gap-4">
              <Image
                src="/icons/person.svg"
                alt="check"
                width={50}
                height={50}
              />
              <div className="flex flex-col">
                <p className="text-lg font-bold">Jacqueline Wright</p>
                <p className="text-gray-500 text-lg">Customer</p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex flex-col items-start bg-gray-100 p-6 rounded-lg shadow-lg">
            <h5 className="text-lg sm:text-xl text-gray-500">
              Lorem ipsum dolor sit amet consectetur. Condimentum eget vitae
              ligula sed urna sit sagittis interdum a. Blandit mattis mattis
              lobortis orci. Facilisis dui sagittis tempor egestas pellentesque
              eu maecenas. Risus lectus nisl.
            </h5>
            <div className="flex items-center justify-start mt-6 gap-4">
              <Image
                src="/icons/person.svg"
                alt="check"
                width={50}
                height={50}
              />
              <div className="flex flex-col">
                <p className="text-lg font-bold">Jacqueline Wright</p>
                <p className="text-gray-500 text-lg">Customer</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-auto flex flex-col md:flex-row justify-center items-center mb-12 bg-gray-100 mt-12 px-4">
        <div className="w-full md:w-1/2 flex justify-center items-center p-4">
          <Image
            src="/images/blancImg.jpg"
            alt="No image"
            width={600}
            height={600}
          />
        </div>
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start p-6">
          <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-center md:text-left">
            Frequently Asked Questions
          </h1>
          <Accordion
            type="single"
            collapsible
            className="w-full md:w-3/4 space-y-4"
          >
            <AccordionItem
              value="item-1"
              className="border-gray-300 bg-white p-3 rounded-lg"
            >
              <AccordionTrigger>Is it accessible?</AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-2"
              className="border-gray-300 bg-white p-3 rounded-lg"
            >
              <AccordionTrigger>Is it styled?</AccordionTrigger>
              <AccordionContent>
                Yes. It comes with default styles that match the other
                components&apos; aesthetic.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-3"
              className="border-gray-300 bg-white p-3 rounded-lg"
            >
              <AccordionTrigger>Is it animated?</AccordionTrigger>
              <AccordionContent>
                Yes. It&apos;s animated by default, but you can disable it if
                you prefer.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>

      <div className="w-full flex justify-center items-center mt-12 mb-12 px-4">
        <div className="w-full md:w-auto p-6 md:p-4 flex flex-col md:flex-row bg-black rounded-lg items-center md:items-start text-center md:text-left">
          <h5 className="text-xl sm:text-3xl text-white mb-4 md:mb-0">
            Ready to grow your travel business? Get started today.
          </h5>
          <Button className="w-full md:w-auto ml-0 md:ml-4 text-black bg-white px-6 py-2">
            Get started
          </Button>
        </div>
      </div>
    </div>
  );
}
