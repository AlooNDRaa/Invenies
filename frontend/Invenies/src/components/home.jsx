import Empresas from '../assets/imgs/empresas.png'
import Navbar from './navbar';

const Home = ()=> {
    return (
        <>
       <Navbar/>
        <div className="flex flex-col text-center">
            <div className="flex flex-col justify-center items-center">
           <h2 className="text-[#e1f3e1] text-lg mt-8">
           We help you manage yourself!!    
         </h2>
          <p className="text-sm text-[#e1f3e1] mt-4 px-2">
          At <span className="text-[#d3b348]">Invenies</span> we help you manage your company and find potential collaborators
          </p>
        <img src={Empresas} alt="img-empresa" className='w-[20rem] h-[20rem]' />
        </div>
        <div className="mt-2">
            <h2 className="text-[#e1f3e1] px-2">
            If you are a collaborator you can search our repertoire of companies and 
            select information that interests you.            </h2>
            <button className="border rounded-xl p-3 mt-4 bg-[#e1f3e1] w-40 font-semibold animate-pulse hover:cursor-pointer">
             <a href="/companies">
                See more
            </a>   
            </button>
        </div>
        <div className="">
            
        </div>
        </div>
        </>
    )
}

export default Home;