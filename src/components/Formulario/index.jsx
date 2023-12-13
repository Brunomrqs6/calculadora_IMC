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


    const mostraResposta = () => {

        const calcula = parseFloat(peso / (altura ** 2))
        console.log(calcula)

        console.log(altura)



        if (calcula < 18.5 && altura > 1.0) {
            return <p className={styles.resultado}>Seu IMC foi de {calcula.toFixed(2)}, está na classificação de <span className={styles.classificacao}>Magreza</span>.</p>
        } else if (calcula > 18.5 && calcula < 24.9 && altura > 1.0) {
            return <p className={styles.resultado}>Seu IMC foi de {calcula.toFixed(2)}, está na classificação <span className={styles.classificacao}>Normal.</span></p>
        } else if (calcula > 25.0 && calcula < 29.9 && altura > 1.0) {
            return <p className={styles.resultado}>Seu IMC foi de {calcula.toFixed(2)}, está na classificação de <span className={styles.classificacao}>Sobrepreso.</span></p>
        } else if (calcula > 30.0 && calcula < 39.0 && altura > 1.0) {
            return <p className={styles.resultado}>Seu IMC foi de {calcula.toFixed(2)}, está na classificação de <span className={styles.classificacao}>Obesidade.</span></p>
        } else if (calcula > 40.0 && altura > 1.0) {
            return <p className={styles.resultado}>Seu IMC foi de {calcula.toFixed(2)}, está na classificação de <span className={styles.classificacao}>Obesidade grave.</span></p>
        }
    }




    return (
        <div className="container">
            <form className={styles.form}>
                <input className={styles.input} type="number" placeholder="Peso" onChange={alteraPeso} />
                <input className={styles.input} type="number" step={0.01} placeholder="Altura" onChange={alteraAltura} />
            </form>
            {mostraResposta()}
            <table className={styles.tabela} align="center" >
                <thead>
                    <tr>
                        <th>IMC</th>
                        <th>Classificação</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className={styles.corpoTabela}>
                            MENOR QUE 18,5
                        </td>
                        <td className={styles.corpoTabela}>
                            MAGREZA
                        </td>
                    </tr>
                    <tr>
                        <td className={styles.corpoTabela}>
                            ENTRE 18,5 E 24,9
                        </td>
                        <td className={styles.corpoTabela}>
                            NORMAL
                        </td>
                    </tr>
                    <tr>
                        <td className={styles.corpoTabela}>
                            ENTRE 25,0 E 29,9
                        </td>
                        <td className={styles.corpoTabela}>
                            SOBREPESO
                        </td>
                    </tr>
                    <tr>
                        <td className={styles.corpoTabela}>
                            ENTRE 30,0 E 39,9
                        </td>
                        <td className={styles.corpoTabela}>
                            OBESIDADE
                        </td>
                    </tr>
                    <tr>
                        <td className={styles.corpoTabela}>
                            MAIOR QUE 40,0
                        </td>
                        <td className={styles.corpoTabela}>
                            OBESIDADE GRAVE
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Formulario