export default function Button({text, disable = false}:
    {text: string, disable?: boolean}
){
    return (
         <button disabled={disable} type="submit" 
         className={`text-white bg-violet-500 hover:bg-violet-600 focus:ring-4 focus:outline-none cursor-pointer font-medium rounded-lg text-sm px-5 py-2.5 text-center
            ${disable ? "bg-violet-800" : "bg-violet-500"}`}>{text}</button>
    )
}