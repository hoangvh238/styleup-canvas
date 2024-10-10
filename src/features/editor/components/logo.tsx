import Link from "next/link";
import Image from "next/image";

export const Logo = () => {
  return (
    <Link href="/">
      <div className="h-8 w-auto relative shrink-0 mb-2">
        <Image
          src="/logo.png"
          alt="Image AI"
          className="shrink-0 hover:opacity-75 transition"
          width={120}
          height={32}
        />
      </div>
    </Link>
  );
};
