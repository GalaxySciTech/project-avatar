import Image from "next/image";
import { Inter } from "next/font/google";
import WriteButton from "@/components/WriteButton";
import { useAccount } from "wagmi";

export default function Home() {
  const address = useAccount();

  return (
    <>
      <div className="mt-8 text-center text-5xl font-black">
        
      </div>
    </>
  );
}
