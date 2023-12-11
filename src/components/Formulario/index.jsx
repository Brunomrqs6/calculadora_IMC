import { useEffect, useState } from "react"
import styles from './Formulario.module.css'

const Formulario = () => {
    let [peso, setPeso] = useState(0);
    let [altura, setAltura] = useState(0);

    const alteraPeso = (evento) => {
        setPeso(evento.target.value)
    }

    const alteraAltura = (evento) => {
        setAltura(evento.target.value)
    }

    const imc = () => {
        const calcula = parseFloat(peso / (altura ** 2))
        console.log(calcula)

        if (calcula < 18.5) {
            return <p>Seu IMC foi de {calcula.toFixed(2)}, está na classificação de <span className={styles.classificacao}>Magreza</span>.</p>
        } else if (calcula > 18.5 && calcula < 24.9) {
            return <p>Seu IMC foi de {calcula.toFixed(2)}, está na classificação <span className={styles.classificacao}>Normal.</span></p>
        } else if (calcula > 25.0 && calcula < 29.9) {
            return <p>Seu IMC foi de {calcula.toFixed(2)}, está na classificação de <span className={styles.classificacao}>Sobrepreso.</span></p>
        } else if (calcula > 30.0 && calcula < 39.0) {
            return <p>Seu IMC foi de {calcula.toFixed(2)}, está na classificação de <span className={styles.classificacao}>Obesidade.</span></p>
        } else if (calcula > 40.0) {
            return <p>Seu IMC foi de {calcula.toFixed(2)}, está na classificação de <span className={styles.classificacao}>Obesidade grave.</span></p>
        }
    }


    

    return (
        <div className="container">
            <form>
                <input type="number" placeholder="Peso" onChange={alteraPeso}/>
                <input type="number" step={0.01} placeholder="Altura" onChange={alteraAltura}/>
                <button type="submit">Calcular</button>
                {imc()}
            </form>
        </div>
    )
}

export default Formulario