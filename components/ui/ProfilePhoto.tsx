"use client";
import { memo } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import Image from "next/image";
import profileImg from "../../public/myImg.png";
const Button = dynamic(
  () => import("./MovingBorder").then((mod) => mod.Button),
  { ssr: false }
);

const ProfileImg = memo(() => {
  return (
    <Button>
      <Image
        src={"/myImg.png"}
        alt="Aruna Priyadarshana"
        width={300}
        height={300}
        className="pt-2 md:pt-5"
      />
    </Button>
  );
});

ProfileImg.displayName = "ProfileImg";

export { ProfileImg };

const ProfilePhoto = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <ProfileImg />
    </motion.div>
  );
};

export default ProfilePhoto;
