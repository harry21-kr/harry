import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="fixed w-full border-b h-16 border-gray-600 flex items-center justify-between px-12">
      <div className="flex items-center gap-3">
        <Image
          src="/vercel.svg"
          alt="logo"
          width={30}
          height={30}
          className="border border-white p-1 rounded-full"
        />
        <h1 className="text-lg font-bold">박원빈</h1>
      </div>
      <div className="flex items-center gap-6">
        <div className="flex gap-3">
          <Link href="#" className="font-semibold">
            About
          </Link>
          <Link href="#" className="font-semibold">
            Projects
          </Link>
          <Link href="#" className="font-semibold">
            Contact
          </Link>
        </div>
        <div className="flex items-center gap-2">
          <Link
            className="bg-gray-600 p-1.5 rounded"
            href="https://github.com/harry21-kr"
            target="_blank"
          >
            <Image src="/github.svg" alt="github" width={26} height={26} />
          </Link>
          <Link
            href="https://velog.io/@harry21/posts"
            target="_blank"
            className="p-1.5 bg-gray-600 rounded"
          >
            <Image src="/velog.svg" alt="velog" width={26} height={26} />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
