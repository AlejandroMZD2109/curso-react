import { useState } from "react"

export function Dropdown(){
    const [open, setOpen] = useState(false)

    return (
    <div onClick={() => setOpen(open => !open)}>
            Más
            {open ? <div>Desplegable</div> : null}
    </div>
    );
}