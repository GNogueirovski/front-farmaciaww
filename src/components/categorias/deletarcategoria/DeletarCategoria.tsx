import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { listar, deletar } from "../../../service/Service"
import { RotatingLines } from "react-loader-spinner"
import Categoria from "../../../models/Categoria"
import { ToastAlerta } from "../../../utils/ToastAlerta"

function DeletarCategoria() {

    const navigate = useNavigate()

    const [categorias, setCategoria] = useState<Categoria>({} as Categoria)

    const [isLoading, setIsLoading] = useState<boolean>(false)

    const { id } = useParams<{ id: string }>()

    async function buscarPorId(id: string) {
        await listar(`/categorias/${id}`,setCategoria)  
        }

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id)
        }
    }, [id])

    async function deletarCategoria() {
        setIsLoading(true)
        try {
            await deletar(`/categorias/${id}`)
            ToastAlerta("Categoria apagada com sucesso!", "sucesso")

        } catch (error: any) {
                ToastAlerta("Categoria apagada com sucesso!", "sucesso")
        }

        setIsLoading(false) 
        retornar()  
    }

    function retornar() {
        navigate("/categorias")
    }

    
    return (
        <div className='container w-1/3 mx-auto'>
            <h1 className='text-4xl text-center my-4'>Deletar categoria</h1>
            <p className='text-center font-semibold mb-4'>
                Você tem certeza que gostaria de apagar a categoria a seguir?</p>
            <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
                <header 
                    className='py-2 px-6 bg-amber-400 text-white font-bold text-2xl'>
                    Categoria
                </header>
                <p className='p-8 text-3xl bg-slate-200 h-full'>{categorias.nome}</p>
                <div className="flex">
                    <button 
                        className='text-slate-100 bg-red-700 hover:bg-red-400 w-full flex items-center justify-center'
                        onClick={retornar}>
                        Não
                    </button>
                    <button 
                        className='w-full text-slate-100 bg-green-700 hover:bg-green-400 flex items-center justify-center py-2'
                                   onClick={deletarCategoria}>
                        {isLoading ?
                            <RotatingLines
                                strokeColor="white"
                                strokeWidth="5"
                                animationDuration="0.75"
                                width="24"
                                visible={true}
                            /> :
                            <span>Sim</span>
                        }
                    </button>
                </div>
            </div>
        </div>
    )
}
export default DeletarCategoria