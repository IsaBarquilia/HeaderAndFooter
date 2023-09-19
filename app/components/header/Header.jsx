import Image from "next/image";
import NavLink from "../navlink/NavLink";
import style from "./header.module.css"
const Header = () => {

    return(
        <div>
            <div className={style.main}>
            <Image src="/DeoxsLogo.png" width={80} height={80} alt="Deoxs"></Image>
            <h2>Deoxs</h2>
            <div className={style.menu}>
            <NavLink rota={"/"} texto={'HOME'}></NavLink>
            <div className={style.dropdown1}>
                <p>oi</p>
                <p>oi</p>
                <p>oi</p>
            </div>
            <NavLink rota={"/sesi"} texto={'SESI'}></NavLink>
            <div className={style.dropdown1}>
                <p>oi</p>
                <p>oi</p>
            </div>
            <NavLink rota={"/tarefa01"} texto={'tarefa01'}></NavLink>
            <div className={style.dropdown1}>
                <p>oi</p>
                <p>oi</p>
            </div>
            </div>

            <div className={style.mobileMenu}>
                <h1 className={style.dropMenu}>MENU</h1>
                <div className={style.dropdown1}>
            <NavLink rota={"/"} texto={'HOME'}></NavLink>
            <NavLink rota={"/sesi"} texto={'SESI'}></NavLink>
            <NavLink rota={"/tarefa01"} texto={'tarefa01'}></NavLink>
            </div>
            </div>

            </div>
            </div>
    )
}

export default Header;