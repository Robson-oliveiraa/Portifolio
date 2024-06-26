import perfil from "../image/Perfil.jpeg"

export default function Perfil() {
    return (
        <div className="w-sreen bg-green-300 h-64 flex items-center justify-center gap-2 ">
            <img src={perfil} alt="Image Perfil" className="w-24 rounded-full border-2 border-zinc-900"/>
            <div>
                <h1 className="font-bold text-4xl">Robson André</h1>
                <p className="text-sm text-zinc-700">Programador Junior | Desing Junior</p>
            </div>
        </div>
    )
}