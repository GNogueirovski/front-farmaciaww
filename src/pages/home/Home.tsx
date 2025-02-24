import { Link } from "react-router-dom"

function Home() {
    return (
        <>
            <div className="flex justify-center bg-zinc-100 ">
                <div className='container grid grid-cols-2 text-darkorange'>
                    <div className="flex flex-col gap-4 items-center justify-center py-4">
                        <h2 className='text-5xl font-bold text-[#32424a]'>
                            Seja Bem-vindo!
                        </h2>
                        <p className='text-xl text-[#32424a]'>
                            Sua fonte segura para suas prescrições
                        </p>

                        <div className="flex justify-around gap-4">
                            <div className='rounded text-heavyorange border-darkorange border-solid border-2 py-2 px-4'> 
                               <Link to="/categorias"> Categorias</Link>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center ">
                        <img
                            src="https://ik.imagekit.io/7fyx55ocq/Pharmacist-cuate.svg?updatedAt=1740414343044"
                            alt="Imagem Página Home"
                            className='w-2/3'
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home