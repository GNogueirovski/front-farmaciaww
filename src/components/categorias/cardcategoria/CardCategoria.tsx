import { Link } from 'react-router-dom'
import Categoria from '../../../models/Categoria'

interface CardCategoriaProps{
    categoria: Categoria
}


function CardCategorias({categoria}: CardCategoriaProps) {
    return (
        <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
            <header className='py-2 px-6 bg-amber-400 text-white font-bold text-2xl'>
                Categoria
            </header>
            <p className='p-8 text-3xl bg-slate-200 h-full'>Nome: {categoria.nome}</p>
            <p className='p-8 text-3xl bg-slate-200 h-full'>Descrição: {categoria.descricao}</p>
            
            
            <div className="flex">
            <Link to={`/editarcategoria/${categoria.id}`}
                    className='w-full text-slate-100 bg-green-700 hover:bg-green-400 flex items-center justify-center py-2'>
                    <button>Editar</button>
                </Link>

                <Link to={`/deletarcategoria/${categoria.id}`}  className='text-slate-100 bg-red-700 hover:bg-red-400 w-full flex items-center justify-center'>
                    <button>Deletar</button>
                </Link>
            </div>

        </div>
    )
}

export default CardCategorias