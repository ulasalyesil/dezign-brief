import Header from "@/components/Header"

export default function Home() {
  return (
    <main className="flex flex-col gap-24 items-center justify-center m-auto">
      <div className="w-full flex flex-col gap-16 bg-gray-100 items-center justify-center">
        <Header />
      </div> 
    </main>
  );
}
