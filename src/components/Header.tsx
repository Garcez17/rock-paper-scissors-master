import Image from "next/image";

export function Header() {
  return (
    <div className="border-2 max-w-2xl w-full mt-10 flex border-gray-500 rounded-2xl p-6 justify-between">
      <Image src="/logo.svg" alt="Logo" width={150} height={100} />

      <div className="bg-white rounded-lg flex flex-col items-center justify-center px-12 py-2 cursor-default">
        <span className="tracking-widest text-blue-500">SCORE</span>
        <strong className="text-6xl text-gray-900">13</strong>
      </div>
    </div>
  )
}