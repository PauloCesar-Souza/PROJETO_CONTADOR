import { useState } from "react"
import styles from './button.module.css'
export default function MeuContador() {

    console.log('renderizando')
    const [contador, setContador] = useState(0)
    

    function Aumentar() {
        setContador(contador + 1)
    }
    function Diminuir() {
        setContador(contador - 1)
    }

    if (contador > 5) {
        return (
        <div className="container">
            <h1>Contador muito alto!</h1>
            <button onClick={Aumentar}>Aumentar</button>
            <button onClick={Diminuir}>Diminuir</button>
        </div>
        )
    }

    return (
        <div className="container">
            <h1>Meu Contador: {contador}</h1>
            { contador > 9 ?  <h1>Valor Muito grande</h1> : null }
            <button className={styles.myButton} onClick={Aumentar}>Aumentar</button>
            <button className={styles.myButton} onClick={Diminuir}>Diminuir</button>
           
        </div>
    )

}