import { Mail, Phone } from "lucide-react"

export default function Footer(){
    return (
        <footer className="bg-primary-500 h-30 mt-20 text-light-500 px-10 flex items-center justify-center md:justify-end">

            <div>
                    <a className="transition-all hover:text-violet-300 duration-200 flex items-center gap-1.5" href="mailto:mathewdewes01@gmail.com">
                <Mail size={18}/>
                <p>mathewdewes01@gmail.com</p>
            </a>
            <div className="flex items-center gap-1.5 mt-1 transition-all hover:text-violet-300 duration-200">
                <Phone size={18}/>
            <a className="" href="tel:+64210383716">+64210383716</a>
            </div>

            </div>
        
 
        
        </footer>
    )
}