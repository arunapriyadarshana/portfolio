import { Button } from "./MovingBorder";
import { motion } from "framer-motion";
import Image from "next/image";
const ProfilePhoto = ({
  profileImg,
}: {
  profileImg: string;
}) => {
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
          height={0}
          className="drop-shadow-primary "
          style={{
            width: "auto",
            height:"auto",
          }}
          loading="eager"
          priority
        />
      </Button>
    </motion.div>
  );
};

export default ProfilePhoto;
