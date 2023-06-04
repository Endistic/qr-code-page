"use client";
import Image from "next/image";
import Layout from "./layout";

import React, { useEffect, useRef } from "react";
import { MyImage } from "./component/image_component";

export default function Home() {
  return (
    <Layout>
      <div className="bg-cyan-500 h-screen w-screen">
		<div className="grid justify-items-center">
		<MyImage src={"/asset/Promotion-1.jpg"} alt="image-1" width={0} height={0}/>
		<MyImage src={"/asset/Promotion-2.jpg"} alt="image-2" width={0} height={0}/>
		<MyImage src={"/asset/Promotion-3.jpg"} alt="image-3" width={0} height={0}/>
		<MyImage src={"/asset/Promotion-4.jpg"} alt="image-4" width={0} height={0}/>
		<MyImage src={"/asset/Promotion-5.jpg"} alt="image-5" width={0} height={0}/>
		<MyImage src={"/asset/Promotion-6.jpg"} alt="image-6" width={0} height={0}/>
		<MyImage src={"/asset/Promotion-7.jpg"} alt="image-7" width={0} height={0}/>
		<MyImage src={"/asset/Promotion-8.jpg"} alt="image-8" width={0} height={0}/>
		<MyImage src={"/asset/Promotion-9.jpg"} alt="image-9" width={0} height={0}/>
		<MyImage src={"/asset/Promotion-10.jpg"} alt="image-10" width={0} height={0}/>
		<MyImage src={"/asset/Promotion-11.jpg"} alt="image-11" width={0} height={0}/>
		</div>
	  </div>
    </Layout>
  );
}
