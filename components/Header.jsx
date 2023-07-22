import Link from "next/link"
import { Button } from "./ui/button"
import GithubIcon from "@/public/icons/GithubIcon"

export default function Header() {
  return (
    <nav className="w-full  h-20 flex items-center justify-between px-6">
        <div className="flex-1"/>
      <Link href={"/"} className="font-semibold text-gray-900">
        dezign.brief
      </Link>
      <div className="flex-1"/>
      <Link href={'https://github.com/ulasalyesil/dezign-brief'}>
        <Button variant="outline" size="icon">
          <GithubIcon color={"#111827"} />
        </Button>
      </Link>
    </nav>
  );
}
