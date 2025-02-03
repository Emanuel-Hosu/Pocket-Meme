import React from "react";
import HeaderMain from "./C-HeaderMain.jsx";
import MainFooter from "./MainFooter.jsx";
import BotonMisiones from "./BotonMisiones.jsx";
import BotonTienda from "./BotonTienda.jsx";
import Sobre3D from "./sobre3D"

export default function MainPage() {
    return (
        <>
            <div className="grid min-h-screen">
                <div className="content-start">
                    <HeaderMain />
                </div>

                <div className="flex flex-col justify-center items-center">
                    <div className="">
                        <Sobre3D />
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