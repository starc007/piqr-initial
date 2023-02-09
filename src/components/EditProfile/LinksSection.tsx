import React, { useState } from "react";
import { EditButton } from "./EditButton";
import { AddLinksModal } from "./AddLinkModal";
import { Socials, SocialsResponse } from "@store/action/actions.types";
import { useAuthStore } from "@store/index";
import { TbBrandBehance, TbBrandDribbble, TbBrandFacebook, TbBrandInstagram, TbBrandLinkedin, TbBrandTwitter, TbBrandYoutube, TbNetwork } from "react-icons/tb";
import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";
import { link } from "fs";
type Props = {
  initialValue?: Socials;
};

type LinkItemProps = {
  title: string;
  href: string;
  icon: React.ReactNode;
};

export const LinkItem = ({ title, href, icon }: LinkItemProps) => {
  if (!href) return <></>;
  return (
    <Link href={""} target="_blank" rel="noreferrer">
      <div className="border p-4 flex group items-center gap-4 text-gray-600 rounded-md hover:border-secondary hover:text-secondary hover:bg-secondary/10 duration-100">
        {icon}
        <div className="flex-1">
          <p className="text-sm font-semibold">{title}</p>
          <p className="text-sm group-hover:underline underline-offset-4">
            {href}
          </p>
        </div>
        <FaExternalLinkAlt className="hidden group-hover:block" />
      </div>
    </Link>
  );
};

const LinksSection = (props: Props) => {
  const [linksModal, setLinksModal] = useState<boolean>(false);
  const socials = useAuthStore(
    (state) => state.user?.socials || ({} as SocialsResponse)
  );
  const links: LinkItemProps[] = [
    {
      title: "Twitter",
      href: socials?.twitter,
      icon: <TbBrandTwitter className="h-6 w-6" />,
    },
    {
      title: "LinkedIn",
      href: socials?.linkedin,
      icon: <TbBrandLinkedin className="h-6 w-6" />,
    },
    {
      title: "Facebook",
      href: socials?.facebook,
      icon: <TbBrandFacebook className="h-6 w-6" />,
    },
    {
      title: "Instagram",
      href: socials?.instagram,
      icon: <TbBrandInstagram className="h-6 w-6" />,
    },
    {
      title: "Behance",
      href: socials?.behance,
      icon: <TbBrandBehance className="h-6 w-6" />,
    },
    {
      title: "Dribble",
      href: socials?.dribble,
      icon: <TbBrandDribbble className="h-6 w-6" />,
    },
    {
      title: "Youtube",
      href: socials?.youtube,
      icon: <TbBrandYoutube className="h-6 w-6" />,
    },
    {
      title: "Website",
      href: socials?.website,
      icon: <TbNetwork className="h-6 w-6" />,
    },
  ];
  return (
    <>
      <div className="md:col-span-2">
        <p className="text-xl flex items-center justify-between text-gray-600 col-span-2 font-semibold">
          Links <EditButton onClick={() => setLinksModal(true)} />
        </p>
        <p className="text-sm text-gray-400">
          Show off your website, social media profiles, or other links.
        </p>
        <div className="grid gap-4 mt-4">
    {links.map((item)=>(<LinkItem href={item.href} key={item?.title} title={item?.title} icon={item?.icon} />))}
        </div>
      </div>

      <AddLinksModal
        open={linksModal}
        closeModal={() => setLinksModal(false)}
      />
    </>
  );
};

export default LinksSection;
