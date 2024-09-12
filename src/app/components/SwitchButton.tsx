"use client"
import { useLocale } from "next-intl";
import { ChangeEvent, useTransition } from "react";
import { useRouter, usePathname } from "next/navigation";

const SwitchButton = () => {
    
    const [ isPending, startTransition ] = useTransition()
    const router = useRouter()
    const localActive = useLocale()
    
    const pathName = usePathname()
    const url = pathName

    const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
        const nextLocale = e.target.value
        
        const novaString = url.substring(4); // Remove os primeiros 3 caracteres
        console.log(novaString);
        startTransition(() => {
            router.replace(`/${nextLocale}/${novaString}`)
        })
    }

    return ( 
        <label>
            <select defaultValue={localActive} onChange={onSelectChange} disabled={isPending}>
                <option value="pt">Pt-BR</option>
                <option value="en">English</option>
            </select>
        </label>
     );
}
 
export default SwitchButton;