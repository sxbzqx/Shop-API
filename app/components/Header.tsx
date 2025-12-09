import Link from "next/link";

export default function Header() {
  return (
    <div>
      <div className="w-full bg-black h-18 flex gap-4 items-center justify-between p-8">
          <h1 className="text-2xl text-white">Products</h1>
          <Link href="/admin">
            <button className="p-2 bg-black rounded-2xl text-white cursor-pointer">
              Admin Page
            </button>
          </Link>
        </div>
      </div>
  );
}
