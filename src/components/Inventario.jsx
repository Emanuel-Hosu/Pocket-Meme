import React from 'react';
import Header from './HeaderMain'
import Footer from './MainFooter'
import CajaInventario  from './CajaInventario';

export const Inventario = () => {
    return (
        <div>
            <div>
                <Header />
            </div>
            <div>
                <CajaInventario />
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}

export default Inventario