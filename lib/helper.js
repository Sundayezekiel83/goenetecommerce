import Link from "next/link";

export const Errors = () => {
  return (
    <div className="flex justify-center item-center mx-auto w-full text-center flex-col gap-10 mt-4">
      <span className="text-lg font-bold mb-10">Page Unavailable</span>
      <div className="mt-10">
        <Link href="/">
          <button className="btn btn-warning btn-lg">Home </button>
        </Link>
      </div>
    </div>
  );
};
