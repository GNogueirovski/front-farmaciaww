import { Link} from "react-router-dom"

function Navbar() {
    return (
        <>
<div className="w-full flex justify-center py-3 shadow-md bg-amber-200 text-[#32424a]">
  <div className="container flex justify-between text-lg mb-1">
    <div className="flex items-center">
      <img width="70" height="70" src="https://img.icons8.com/wired/128/walter-white.png" alt="walter-white"/>
      <Link to='/home' className="text-2xl font-bold ml-2">Pharm</Link>
    </div>
    <div className="flex gap-4 items-center">
      <Link to='/temas' className='hover:underline'>Categoria</Link>
      <Link to='/cadastrarcategoria' className='hover:underline'>Cadastrar Categoria</Link>
    </div>
  </div>
</div>

        </>
    )
}

export default Navbar