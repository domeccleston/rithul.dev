import React from "react";
import { signIn } from "@astro-auth/client";

type Props = {};

const Loginbutton = (props: Props) => {
  (() => {
    console.log("Loggnig in");
    signIn({
      provider: "discord",
      callbackURL: "/",
    });
  })();
  return (
    <button
    //   onClick={}
    >
      <img
        src="https://discord.com/assets/28174a34e77bb5e5310ced9f95cb480b.png"
        alt="Discord"
      />
      Login with Discord
    </button>
  );
};

export default Loginbutton;
