
export function SectionForm(){
    return(
            <section className="w-full h-[704px] bg-img_bg_hero bg-no-repeat bg-center bg-cover flex justify-center ">
                    <div className="flex items-center justify-center">
                        <form className="w-full mx-auto bg-[#106db0d2] p-20 rounded-2xl text-white border-none">
                            <h2 className="font-bold mb-10 flex justify-center items-center content-center text-2xl ">Inscreva-se e faça parte</h2>
                            <div className="mb-4">
                            <label className="block text-sm font-bold mb-2">Nome:</label>
                            <input type="text" id="nome" name="nome" className="border rounded py-2 px-3 w-full text-primary-gray" />
                            </div>

                            <div className="mb-4">
                                <label className="block text-sm font-bold mb-2">Email:</label>
                                <input type="email" id="email" name="email" className="border rounded py-2 px-3 w-full text-primary-gray" />
                            </div>

                            <div className="mb-4">
                                <label className="block text-sm font-bold mb-2">Telefone:</label>
                                <input type="telefone" id="telefone" name="telefone" className="border rounded py-2 px-3 w-full text-primary-gray" />
                            </div>

                            <div className="pt-4 flex items-center justify-center">
                                <button type="submit" className="bg-[white] px-8 py-2 rounded-md text-[#106eb0] font-bold">Enviar</button>
                            </div>
                        </form>
                    </div>
            </section>
    )
}