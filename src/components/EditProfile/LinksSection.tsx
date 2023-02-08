import React, { useState } from "react";
import { EditButton } from "./EditButton";
import { AddLinksModal } from "./AddLinkModal";

type Props = {};

const LinksSection = (props: Props) => {
  const [linksModal, setLinksModal] = useState<boolean>(false);
  
  return (
    <>
      <div className="md:col-span-2">
        <p className="text-xl flex items-center justify-between text-gray-600 col-span-2 font-semibold">
          Links <EditButton onClick={() => setLinksModal(true)} />
        </p>
        <p className="text-sm text-gray-400">
          Show off your website, social media profiles, or other links.
        </p>
      </div>
      <AddLinksModal
        open={linksModal}
        closeModal={() => setLinksModal(false)}
      />
    </>
  );
};

export default LinksSection;
