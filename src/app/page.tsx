import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          src="/avatar.jpg"
          alt="My photo"
          width={280}
          height={138}
          priority
          className="rounded-full border-2 border-red-500"
        />
        <ul className="list-inside text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2">
            <h1>Olá! Eu sou o Kaic,</h1>
          </li>
          <li className="mb-2">
            <h1>e eu desenvolvo software para o séc XXI.</h1>
          </li>
          <li className="mb-2">
            <h1>💼 Software Engineer @ Nubank</h1>
          </li>
          <li className="mb-2">
            <h1>🌎 São Paulo, Brasil</h1>
          </li>
        </ul>
      </main>
      <footer className="">
      </footer>
    </div>
  );
}
