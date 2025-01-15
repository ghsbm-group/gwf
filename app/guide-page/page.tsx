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
import Link from "next/link";

export default function GuidePage() {
  return (
    <div className="w-screen flex flex-col h-screen overflow-x-hidden">
      <header className="w-full flex justify-between border-b p-4">
        <div className="flex justify-center items-center ml-12">
          <Image
            src="/icons/mountain.svg"
            alt="Guide Landing"
            width={45}
            height={45}
          />
        </div>
        <div className="space-x-12 mr-12">
          <Link key="/login" href="/login">
            <Button variant="secondary" className="whitespace-nowrap">
              Login
            </Button>
          </Link>
          <Button>Get Started</Button>
        </div>
      </header>

      <div className="w-full h-auto flex flex-start justify-between bg-gray-100 mb-24">
        <div
          className="flex flex-col justify-center items-start text-start p-8"
          style={{ margin: "0 auto" }}
        >
          <h1 className="text-5xl font-bold mb-4">Earn more with</h1>
          <h1 className="text-5xl font-bold mb-6">GuideRepository</h1>
          <h5 className="text-lg mb-8 text-gray-500">
            Getting clients on GuideRepository is free and easy.
          </h5>
          <Button className="text-lg">Get Started</Button>
        </div>
        <div className="w-1/2 flex justify-center items-center p-8">
          <Image
            src="/images/giudelanding.png"
            alt="Guide Landing"
            width={800}
            height={800}
          />
        </div>
      </div>

      <div className="w-full h-auto flex flex-col justify-center items-center mt-12">
        <h1 className="text-5xl font-bold mb-8">GuideRepository</h1>
        <h5 className="text-lg  text-gray-500">
          Connect with travelers looking for the kind of adventures you offer by
          signing up today.
        </h5>
        <h5 className="text-lg mb-4 text-gray-500">
          You&apos;ll receive access to oue booking and payments system and in
          house market place.
        </h5>
      </div>

      <div className="w-full h-auto flex flex-start justify-center mb-12">
        <div className="w-1/2 flex justify-center items-center p-8">
          <Image
            src="/images/blancImg.jpg"
            alt="No image"
            width={600}
            height={600}
          />
        </div>
        <div className="flex flex-col justify-center items-start p-8 space-y-10">
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
        <h1 className="text-5xl font-bold mb-12 mt-12">
          Activities we welcome
        </h1>
        <h5 className="text-2xl text-gray-500 mb-12">
          Our customers can ask for anything
        </h5>
        <div className="flex justify-center items-center mt-12 mb-12">
          <h5 className="text-2xl font-bold">Day hikes</h5>
          <Separator orientation="vertical" className="mx-6 bg-gray-400" />
          <h5 className="text-2xl font-bold">Multi-day hikes</h5>
          <Separator orientation="vertical" className="mx-6 bg-gray-400" />
          <h5 className="text-2xl font-bold">Rock climbing</h5>
          <Separator orientation="vertical" className="mx-6 bg-gray-400" />
          <h5 className="text-2xl font-bold">Anything the client wants</h5>
        </div>
      </div>

      <div className="w-full h-auto flex justify-center items-center mt-12 mb-12">
        <h1 className="text-5xl font-bold mb-8">Start in 10 minutes</h1>
      </div>

      <div className="w-full flex justify-center items-center mt-12 mb-12">
        <div className="flex w-4/5 justify-between space-x-6">
          <div className="w-1/3 flex flex-col px-8 bg-gray-100 p-4">
            <h5 className="text-3xl font-bold">Register as a guide</h5>
            <h3 className="text-xl text-gray-500">Create your profile</h3>
          </div>
          <div className="w-1/3 flex flex-col px-8 bg-gray-100 p-4">
            <h5 className="text-3xl font-bold">Browse trip requests</h5>
            <h3 className="text-xl text-gray-500">Create your profile</h3>
          </div>
          <div className="w-1/3 flex flex-col px-8 bg-gray-100 p-4">
            <h5 className="text-3xl font-bold">Justify as a guide</h5>
            <h3 className="text-xl text-gray-500">Create your profile</h3>
          </div>
        </div>
      </div>

      <div className="w-full flex justify-center items-center mt-12 mb-12">
        <Button className="text-2xl">Get Started</Button>
      </div>

      <div className="w-full flex flex-col justify-center items-center mt-12 mb-12">
        <h1 className="text-5xl font-bold mb-12 mt-12">Our happy clients</h1>
        <div className="w-4/5 flex flex-start justify-between items-center mt-12 space-x-12">
          <div className="w-1/2 flex flex-col items-start bg-gray-100 p-6">
            <h5 className="text-xl text-gray-500">
              Lorem ipsum dolor sit amet consectetur. Condimentum eget vitae
              ligula sed urna sit sagittis interdum a. Blandit mattis mattis
              lobortis orci. Facilisis dui sagittis tempor egestas pellentesque
              eu maecenas. Risus lectus nisl.
            </h5>
            <div className="flex items-center justify-center mt-6">
              <Image
                src="/icons/person.svg"
                alt="check"
                width={50}
                height={50}
              />
              <div className="flex flex-col">
                <p className="text-lg ml-2 font-bold">Jacqueline Wright</p>
                <p className="text-gray-500 text-lg ml-2">Customer</p>
              </div>
            </div>
          </div>
          <div className="w-1/2 flex flex-col items-start bg-gray-100 p-6">
            <h5 className="text-xl text-gray-500">
              Lorem ipsum dolor sit amet consectetur. Condimentum eget vitae
              ligula sed urna sit sagittis interdum a. Blandit mattis mattis
              lobortis orci. Facilisis dui sagittis tempor egestas pellentesque
              eu maecenas. Risus lectus nisl.
            </h5>
            <div className="flex items-center justify-center mt-6">
              <Image
                src="/icons/person.svg"
                alt="check"
                width={50}
                height={50}
              />
              <div className="flex flex-col">
                <p className="text-lg ml-2 font-bold">Jacqueline Wright</p>
                <p className="text-gray-500 text-lg ml-2">Customer</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-auto flex flex-start justify-center mb-12 bg-gray-100 mt-12">
        <div className="w-1/2 flex justify-center items-center p-8">
          <Image
            src="/images/blancImg.jpg"
            alt="No image"
            width={600}
            height={600}
          />
        </div>
        <div className="w-1/2 flex flex-col justify-center items-start p-8">
          <h1 className="text-4xl font-bold mb-8">
            Frequently asked questions
          </h1>
          <Accordion type="single" collapsible className="w-3/4 space-y-6">
            <AccordionItem
              value="item-1"
              className="border-gray-300 bg-white p-2 rounded-lg"
            >
              <AccordionTrigger>Is it accessible?</AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-2"
              className="border-gray-300 bg-white p-2 rounded-lg"
            >
              <AccordionTrigger>Is it styled?</AccordionTrigger>
              <AccordionContent>
                Yes. It comes with default styles that matches the other
                components&apos; aesthetic.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-3"
              className="border-gray-300 bg-white p-2 rounded-lg"
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

      <div className="w-full flex justify-center items-center mt-12 mb-12">
        <div className="w-auto p-4 flex bg-black rounded-lg">
          <h5 className="text-3xl text-white">
            Ready to grow your travel business? Get started today.
          </h5>
          <Button className="ml-4 text-black bg-white"> Get started</Button>
        </div>
      </div>

      <footer>
        <div className="w-full flex justify-center items-start space-x-16 p-4 bg-gray-100">
          <div className="w-1/5 flex flex-col items-center">
            <Image
              src="/icons/mountain.svg"
              alt="Guide Landing"
              width={45}
              height={45}
            />
            <p className="text-lg text-gray-500 text-center whitespace-normal break-words">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sintelit officia consequat
            </p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-xl font-bold">Heading</p>
            <p className="text-lg text-gray-500">Link here</p>
            <p className="text-lg text-gray-500">Link here</p>
            <p className="text-lg text-gray-500">Link here</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-xl font-bold">Heading</p>
            <p className="text-lg text-gray-500">Link here</p>
            <p className="text-lg text-gray-500">Link here</p>
            <p className="text-lg text-gray-500">Link here</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-xl font-bold">Heading</p>
            <p className="text-lg text-gray-500">Link here</p>
            <p className="text-lg text-gray-500">Link here</p>
            <p className="text-lg text-gray-500">Link here</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-xl font-bold">Connect with us</p>
            <div className="flex justify-center items-center space-x-4">
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
    </div>
  );
}
