import React from "react";
import Head from "../Head/Head";
import Text from "../Components/Text/Text";
import Button from "../Components/Button/Button";

import { SiMonkeytype } from "react-icons/si";
import { FaSteam, FaYoutube, FaItchIo } from "react-icons/fa6";

const Stuff = () => {
  return (
    <div className="main">
      <Head title="Outros" />
      <Text h1="Outros" />
      <Text
        h2="Sites & Rede Sociais"
        p="Alguns sites/redes sociais que utilizo"
      />

      <div className="flexRow">
        <Button href="https://coelhomarcus.itch.io/" title="My Itch.io Profile">
          <FaItchIo />
        </Button>
        <Button
          href="https://monkeytype.com/profile/coelhomarcus"
          title="MonkeyType"
        >
          <SiMonkeytype />
        </Button>
      </div>
    </div>
  );
};

export default Stuff;
