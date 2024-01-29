import Image from "next/image";
import React from "react";
import image from "@/app/images/home-bg.jpg";
import logo from "@/app/images/digi-blog-logo.png";
import { Poppins, Raleway } from "next/font/google";

const fontPoppins = Poppins({weight:"400", subsets:["latin"]})

const fontRaleway = Raleway({weight:"400", subsets:["latin"]})

export default function page() {

  return (
    <div className="w-full flex justify-center my-8 ">
      <div className="md:w-6/12 w-10/12 flex flex-col justify-center">
        <h1 className=" font-extrabold text-5xl">
          How to activate cheat in gta 6 in playstation
        </h1>
        <div className="my-8 flex">
          <Image
            src={logo}
            className="rounded-full w-14 h-14 object-cover"
            alt="logo"
          ></Image>
          <div className="h-14 flex flex-col justify-around pl-6">
            <p className="m-0 p-0">MohanRaj.G</p>
            <p className="m-0 p-0 text-xs">10 min read</p>
          </div>
          <p className="text-green-400 text-sm pt-[6px] pl-4 cursor-pointer">
            Follow
          </p>
        </div>
        <hr></hr>
        <Image
          src={image}
          className="w-full h-64 object-cover border border-black"
          alt="Banner image"
        ></Image>
        <hr></hr>
        <div className={`flex text-lg flex-col ${fontRaleway.className}`}>
          <p>
          In Grand Theft Auto VI for PlayStation, players can unlock various cheats to enhance their gaming experience. To activate cheats, players can enter specific button combinations using their PlayStation controller.
          </p>
          <p>
          Navigate to the game pause menu, then access the cheat code input section, where you can enter the desired combination. Once correctly inputted, the cheat will be activated, providing players with various advantages such as unlimited ammo, invincibility, or special vehicles. Keep in mind that using cheats may affect your ability to unlock achievements or trophies, so use them wisely and at your own discretion.
          </p>
          <p>
          If GTA 6 has been released and cheat codes are available, you would typically activate them using the game controller on the PlayStation console. Cheat codes can vary widely in their activation methods and effects, and they are usually provided by the game developers or discovered by players over time.
          </p>
          <Image
          src={image}
          className="w-full h-36 my-5 object-cover border border-black"
          alt="Banner image"
        ></Image>
            <p>
          In Grand Theft Auto VI for PlayStation, players can unlock various cheats to enhance their gaming experience. To activate cheats, players can enter specific button combinations using their PlayStation controller.
          </p>
          <p>
          Navigate to the game pause menu, then access the cheat code input section, where you can enter the desired combination. Once correctly inputted, the cheat will be activated, providing players with various advantages such as unlimited ammo, invincibility, or special vehicles. Keep in mind that using cheats may affect your ability to unlock achievements or trophies, so use them wisely and at your own discretion.
          </p>
          <p>
          If GTA 6 has been released and cheat codes are available, you would typically activate them using the game controller on the PlayStation console. Cheat codes can vary widely in their activation methods and effects, and they are usually provided by the game developers or discovered by players over time.
          </p>
        </div>
      </div>
    </div>
  );
}
