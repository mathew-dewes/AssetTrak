export default function ButtonSmall({text}:
    {text: string}
){
    return (
         <button className="text-white bg-violet-500 hover:bg-violet-600 focus:ring-4 focus:outline-none cursor-pointer font-medium rounded text-sm px-3 py-1 text-center">{text}</button>
    )
}