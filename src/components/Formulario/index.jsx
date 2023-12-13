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

    const [resultadoIMC, setResultadoIMC] = useState(null);


    const calculaIMC = (evento) => {
        evento.preventDefault();

        const calcula = parseFloat(peso / (altura ** 2))
        console.log(calcula)
        console.log(altura)

        if (calcula < 18.5) {
            setResultadoIMC(`Seu IMC foi de ${calcula.toFixed(2)}, está na classificação de Magreza.`);
        } else if (calcula > 18.5 && calcula < 24.9) {
            setResultadoIMC(`Seu IMC foi de ${calcula.toFixed(2)}, está na classificação Normal.`);
        } else if (calcula > 25.0 && calcula < 29.9) {
            setResultadoIMC(`Seu IMC foi de ${calcula.toFixed(2)}, está na classificação de Sobrepreso.`);
        } else if (calcula > 30.0 && calcula < 39.0) {
            setResultadoIMC(`Seu IMC foi de ${calcula.toFixed(2)}, está na classificação de Obesidade.`);
        } else if (calcula > 40.0) {
            setResultadoIMC(`Seu IMC foi de ${calcula.toFixed(2)}, está na classificação de Obesidade grave.`);
        }
    }




    return (
        <div className="container">
            <form className={styles.form} onSubmit={(evento) => calculaIMC(evento)}>
                <input className={styles.input} type="number" placeholder="Peso" onChange={alteraPeso} />
                <input className={styles.input} type="number" step={0.01} placeholder="Altura" onChange={alteraAltura} />
                <button type="submit">Calcular</button>
            </form>
            {resultadoIMC && <p className={styles.resultado}>{resultadoIMC}</p>}
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