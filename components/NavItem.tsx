import Link from "next/link";
import { usePathname } from "next/navigation";
const NavItem = ({
  item,
}: {
  item: {
    i: number;
    name: string;
    href: string;
  };
}) => {
  const pathname = usePathname();
  const isActive =
    item.href !== "/" ? pathname.startsWith(item.href) : pathname === item.href;

  return (
    <Link href={item.href} className="py-2">
      <p
        className={`${
          isActive
            ? "text-primary border-b-2 cool-link transition-all duration-200"
            : "text-gray-500 dark:text-zinc-100"
        } text-lg lg:text-lg font-semibold cursor-pointer`}
      >
        {item.name}
      </p>
    </Link>
  );
};

export default NavItem;
