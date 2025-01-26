import {Logo} from "./Logo";
import {BotonFormulario} from "./BotonFormulario";
import {BotonMultiusosAzul } from "./BotonMultiusosAzul";

export const Formulario = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
                <div className="bg-white/80 backdrop-blur-sm shadow-lg rounded-lg w-80 h-full p-4 flex flex-col items-center">
                    <div className="mt-4">
                    <Logo />
                    </div>
                    <div className="mt-8 text-center">
                    <p>Seleciona los tipos de memes que más te gusten</p>
                    </div>
                    <div className="mt-8 flex flex-wrap gap-2 justify-center">
                    <BotonFormulario img={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKJO5K0U86UzgcRbMoa_6fpuHU9U1IhybFfg&s'} texto={"ception"}/>
                    <BotonFormulario img={'https://i.ytimg.com/vi/DkC2Yx7lNOo/maxresdefault.jpg'} texto={"Shitpost"}/>
                    <BotonFormulario img={'https://static.wikia.nocookie.net/aesthetics/images/1/10/Deepfriedmeme.jpg/revision/latest?cb=20231128214301'} texto={"DeepFried"}/>
                    <BotonFormulario img={'https://i.pinimg.com/564x/79/c8/d8/79c8d8edfa6ec31bbce482b082e0b8de.jpg'} texto={"Dank"}/>
                    <BotonFormulario img={'https://images7.memedroid.com/images/UPLOADED516/60709353928f9.jpeg'} texto={"irony-poisoning"}/>
                    <BotonFormulario img={'https://pbs.twimg.com/media/Fs-fKb5XgAYRf7j.jpg'} texto={"Reaction"}/>
                    <BotonFormulario img={'https://ktarena.com/assets/img/teams/1768.jpeg?1662398022'} texto={"Pepe"}/>
                    <BotonFormulario img={'https://i.redd.it/l4j3nftfiec41.jpg'} texto={"Vaporwave"}/>
                    <BotonFormulario img={'https://preview.redd.it/first-surreal-meme-probably-not-the-best-v0-p9wgo33bnmhc1.jpeg?auto=webp&s=1cdf0f6c7739bfd627d5eff04480ae8900bfba98'} texto={"Surreal"}/>
                    <BotonFormulario img={'https://i.pinimg.com/736x/1a/c7/03/1ac70347680ed95effcd6202d69bc4e9.jpg'} texto={"Wholesome"}/>
                    </div>
                    <div className="mt-10 mb-6">
                    <BotonMultiusosAzul textoSpan={"Enviar"} />
                    </div>
                </div>
            </div>
        
  );
};

export default Formulario;