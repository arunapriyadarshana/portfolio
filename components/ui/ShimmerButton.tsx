import Image from "next/image";

const ShimmerButton = ({ name, image }: { name: string; image: string }) => {
  return (
    <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none ">
      <Image src={image} alt={name} width={24} height={24} />
    </button>
  );
};

export default ShimmerButton;
