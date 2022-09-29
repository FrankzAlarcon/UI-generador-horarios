import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-purple-800 h-40 mt-10">
      <div className="h-5/6 flex justify-between p-4 items-center">
        <div className="w-1/5">
          <p className="text-white py-2">Con el apoyo de:</p>
          <div className="flex items-center">
            <div className="mr-1">
              <Image width={30} height={30} src="/img/logo.png" alt="Logo EPN" />
            </div>
            <div className="mr-2">
              <Image width={30} height={20} src="/img/letras_club_sf.png" alt="Logo EPN" />
            </div>
            <div className="mr-2">
              <Image width={30} height={30} src="/img/epn_logo.png" alt="Logo EPN" />
            </div>
            <div className="mr-2">
              <Image width={30} height={30} src="/img/fis_logo.png" alt="Logo FIS" />
            </div>
          </div>
        </div>
        <div></div>
      </div>
      <div className="bg-gray-900 h-1/6">
      <p className="text-white text-center">® 2021 Copytight: ClubSoftwareEPN</p>
      </div>
    </footer>
  )
}
