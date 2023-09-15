import { NavItem } from "./navItem";
import { useState } from "react";
import "./nav.css";
import { Dropdown } from "./dropdown";

const menu = [{nombre: "Inicio", icono: "mdi-home"}]

export function Nav(){
    const [menu,setMenu]=useState(
                                [{nombre: "Inicio", icono: "mdi-home"},
                                {nombre: "Buscar", icono: ""},
                                {nombre: "Explorar", icono: ""},
                                {nombre: "Reels", icono: ""},
                                {nombre: "Mensajes", icono: ""},
                                {nombre: "Notificaciones", icono: ""},
                                {nombre: "Crear", icono: ""},
                                {nombre: "Perfil", icono: ""}
                                ]);

    return(
        <div className="Nav">
        {menu.map((elemento, i) => <NavItem nombre={elemento.nombre} key={i}></NavItem>)}
        <Dropdown></Dropdown>
        </div>
        );
}