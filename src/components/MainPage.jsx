import React from "react";
import HeaderMain from "./C-HeaderMain.jsx";
import MainFooter from "./MainFooter.jsx";
import BotonMisiones from "./BotonMisiones.jsx";
import BotonTienda from "./BotonTienda.jsx";
import Sobre3D from "./sobre3D"
import CloadingBarWithLogo from "./C-LoadingBarWithLogo.jsx"

export default function MainPage() {
  return (
    <>
      <div className="grid min-h-screen bg-gradient-to-t from-blue-50 via-white to-white">
        <div className="z-10 content-start">
          <HeaderMain />
        </div>

        <div className="flex flex-col justify-center items-center">
          <div className="-mt-20">
            <Sobre3D />
          </div>
          <div className="absolute bottom-[280px]">
            <CloadingBarWithLogo />
          </div>


          <div className="flex justify-between items-center gap-12 mb-4 mt-10">
            <BotonMisiones />
            <BotonTienda />
          </div>
        </div>
        <div className="content-end">
          <MainFooter />
        </div>
      </div>
    </>
  )
}