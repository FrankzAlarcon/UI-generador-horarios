import Image from "next/image";

export default function NavBar() {
  return (
    <header className="h-12 bg-purple-800 flex justify-center items-center">
      <div className="mr-32"><Image  width={30} height={30} src="/img/logo.png" alt="Logo Club de Software EPN" /></div>
      <h1 className="text-2xl text-center text-white font-bold">Generador de Horarios</h1>
    </header>
  )
}
