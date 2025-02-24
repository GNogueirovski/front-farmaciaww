function Footer() {

    let data = new Date().getFullYear()

    return (
        <>
            <div className="flex justify-center bg-gradient-to-b from-zinc-100 to bg-amber-300 text-[#32424a]">
                <div className="container flex flex-col items-center py-4">
                    <p className='flex p-5 gap-2 text-xl font-bold'>
                            W.W Pharm | Copyright: {data}
                        </p>
                </div>
            </div>
        </>
    )
}

export default Footer