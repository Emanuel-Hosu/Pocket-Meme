import { MainFooter } from "./MainFooter";

export const Tienda = ({ dinero}) => {
    
    function handleClick() {
        alert('La tienda está en construcción');
    }

  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen">
      <div className="bg-white backdrop-blur-sm shadow-lg rounded-lg w-96 h-full px-4 py-8 flex flex-col items-center ">
        <div className="mt-4  flex flex-row rounded-xl border- shadow-lg shadow-slate-400 border-slate-400 w-[350px] h-16">
          <p className="text-4xl text-gray-400 font-thin rounded-sm ml-6">Tienda</p>
          <button className="flex flex-row ml-24 bg-slate-400 rounded-full text-slate-200 px-2 h-7 gap-2 mt-3">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-6 w-6 text-gray-300 " 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor" 
              strokeWidth="2"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" 
              />
            </svg>
            {dinero}
          </button>
          <button onClick={handleClick}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 text-slate-400 ml-4 mb-3">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
                    </svg>
            </button>
        </div>

        <div className="grid grid-cols-2 gap-4 mt-32 w-full px-4 ">
          
            <button
              className="aspect-square bg-gray-200 rounded-2xl shadow-inner shadow-slate-400"
            />
          <button
              className="aspect-square bg-gray-200 rounded-2xl shadow-inner shadow-slate-400"
            />
            <button
              className="aspect-square bg-gray-200 rounded-2xl shadow-inner shadow-slate-400"
            />
            <button
              className="aspect-square bg-gray-200 rounded-2xl shadow-inner shadow-slate-400"
            />
        </div>
        <div className="rounded-xl border-slate-400 w-[384px] bottom-1 absolute">
        <MainFooter/>
        </div>
      </div>
    </div>
  );
};

export default Tienda;