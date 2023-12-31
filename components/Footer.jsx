import Link from "next/link"

export default function Footer() {
  return (
    <footer className="h-20 flex items-center bg-gray-100 w-full justify-center px-4">
      <Link href="https://ulasalyesil.com" className="text-gray-500 text-center">
        designed and developed by <span className="font-semibold hover:text-blue-600">Ulaş Alyeşil</span> with the help of ChatGPT
      </Link>
    </footer>
  )
}
