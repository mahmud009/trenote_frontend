import React, { useEffect } from "react";
import Image from "next/dist/client/image";
import loginImage from "../public/images/login_image.svg";

export default function auth() {
  return (
    <div>
      <button>Click Me</button>
      <div>
        <Image src={loginImage} width={500} />
      </div>
    </div>
  );
}
