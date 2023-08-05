import Image from "next/image";
import { Inter } from "next/font/google";
import WriteButton from "@/components/WriteButton";
import { useAccount } from "wagmi";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const address = useAccount();
  const bt = {
    buttonName: "add",
    data: {
      address: address,
      abi: [],
      functionName: "createGPAD",
      args: [],
    },
  };
  return (
    <>
      <WriteButton {...bt} />
    </>
  );
}
