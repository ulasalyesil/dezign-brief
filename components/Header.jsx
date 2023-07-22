import Link from "next/link"
import { Button } from "./ui/button"
import GithubIcon from "@/public/icons/GithubIcon"

export default function Header() {
  return (
    <nav className="h-20 flex items-center justify-between">
      <Link href={"/"} className="font-semibold text-gray-900">
        dezign.brief
      </Link>
      <Link href={'https://github.com/ulasalyesil/dezign-brief'}>
        <Button variant="outline" size="icon">
          <GithubIcon color={"#111827"} />
        </Button>
      </Link>
    </nav>
  );
}
