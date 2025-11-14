import Image from "next/image"
import Link from "next/link"

export default function Avatar({name}:
    {name: string}
){
    return (
           <div className="flex items-center gap-1.5">
                        <Image src={'/avatar.png'} height={30} width={30} alt="Avatar image"/>
                        <Link href={'/profile/' + name}><p className="font-semibold cursor-pointer hover:font-bold hover:text-violet-500">{name}</p></Link>
                      
                    </div>
    )
}