import { Mail } from 'lucide-react'
import { ComponentProps } from 'react';

interface InputProps extends ComponentProps<'input'> {}

export function Input(props: InputProps) {
    return (
       <div 
            className="group bg-gray-800 h-12 border border-gray-600 rounded-xl px-4 flex items-center gap-2 focus-within:border-gray-100">
        <span 
            className="text-gray-400 group-focus-within:text-gray-100 peer-focus:text-gray-100 peer-placeholder-shown:text-gray-100">
            <Mail />
        </span>

         <input
            className="peer flex-1 bg-transparent outline-0 text-white placeholder-gray-400"
            {...props}
        />
       </div>
    )
}


