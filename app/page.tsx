import { Header } from "@/components/header";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#1a1a1a]">
      <Header />

      {/* Placeholder content to show the header in context */}
      <main className="container mx-auto px-6 py-20">
        <h1 className="text-4xl font-bold text-white">Welcome</h1>
        <p className="text-[#a3a3a3] mt-4">Portfolio content goes here...</p>
      </main>
    </div>
  );
}
