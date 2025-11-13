import Image from "next/image"

export default function Avatar({name}:
    {name: string}
){
    return (
           <div className="flex items-center gap-1.5">
                        <Image src={'/avatar.png'} height={30} width={30} alt="Avatar image"/>
                        <p className="font-semibold mt-1S">{name}</p>
                    </div>
    )
}