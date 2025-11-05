export default function Button({text}:
    {text: string}
){
    return (
         <button type="submit" className="text-white bg-acccent-500 hover:bg-emerald-600 focus:ring-4 focus:outline-none cursor-pointer focus:ring-emerald-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">{text}</button>
    )
}