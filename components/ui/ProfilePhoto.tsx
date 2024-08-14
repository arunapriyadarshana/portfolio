"use client";
import { Button } from "./MovingBorder";
import { motion } from "framer-motion";
import Image from "next/image";
import profileImg from "../../public/myImg.webp";
const ProfilePhoto = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <Button>
        <Image
          src={profileImg}
          alt="Aruna Priyadarshana"
          width={300}
          height={324}
          className="drop-shadow-primary"
          loading="eager"
          priority
        />
      </Button>
    </motion.div>
  );
};

export default ProfilePhoto;
