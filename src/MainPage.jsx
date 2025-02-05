import React from "react";
import HeaderMain from "./components/HeaderMain.jsx";
import MainFooter from "./components/MainFooter.jsx";
import BotonMisiones from "./components/BotonMisiones.jsx";
import BotonTienda from "./components/BotonTienda.jsx";

export default function MainPage() {
    return (
        <>
            <div className="grid min-h-screen">
                <div className="content-start">
                    <HeaderMain />
                </div>

                <div className="flex flex-col justify-center items-center">
                    <div className="bg-stone-300 rounded-3xl w-48 h-60"></div>
                    <div className="flex justify-between items-center gap-12 mt-12">
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