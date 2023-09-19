import React from 'react'
import Styles from "./page.module.css"

function PaginaInicial() {
  return (
    <main className={Styles.all}>
      <div >
        <div className={Styles.pai}>
          <h1 className={Styles.title}>𝑫𝑬𝑶𝑿𝑺</h1>
        </div>
        <div>
          <h2 className={Styles.subtitleEquipe}>Sobre a equipe</h2>
          <p className={Styles.texto}>Uma equipe formada por 6 integrantes. </p>
        </div>
        <div className={Styles.container}>
        <div className={Styles.caixa}>
          
          <h2 className={Styles.subtitle}>Isabelle - Tech Leader</h2>
          <p className={Styles.texto}>info
          </p>
          </div>
          <div className={Styles.caixa}>
          <h2 className={Styles.subtitle}>Julia - Desenvolvedora</h2>
          <p className={Styles.texto}>info
          </p>
        </div>
</div>
<div className={Styles.container}>
        <div className={Styles.caixa}>
          <h2 className={Styles.subtitle}>Luana - Desenvolvedora</h2>
          <p className={Styles.texto}>info
          </p>
          </div>
          <div className={Styles.caixa}>
          <h2 className={Styles.subtitle}>Leticia - Desenvolvedora</h2>
          <p className={Styles.texto}>info
          </p>
        </div>
</div>
<div className={Styles.container}>
        <div className={Styles.caixa}>
          <h2 className={Styles.subtitle}>Felipe - Desenvolvedor</h2>
          <p className={Styles.texto}>info
          </p>
          </div>
          <div className={Styles.caixa}>
          <h2 className={Styles.subtitle}>Rafael - Desenvolvedor</h2>
          <p className={Styles.texto}>info
          </p>
        </div>
</div>
      </div>
    </main>
  )
}

export default PaginaInicial;