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
      <div className="grid min-h-screen">
        <div className="z-10 content-start">
          <HeaderMain />
        </div>

        <div className="flex flex-col justify-center items-center">
          <div >
            <Sobre3D />
          </div>
          <div className="my-7">
            <CloadingBarWithLogo />
          </div>


          <div className="flex justify-between items-center gap-12 mb-6">
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