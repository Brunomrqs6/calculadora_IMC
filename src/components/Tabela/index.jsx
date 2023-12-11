const Tabela = () => {
    return (
        <table>
            <thead>
                <tr>
                    <th>IMC</th>
                    <th>Classificação</th>
                </tr>
            </thead>    
            <tbody>
                <tr>
                    <td>
                        MENOR QUE 18,5	
                    </td>
                    <td>
                        MAGREZA
                    </td>
                </tr>
                <tr>
                    <td>
                        ENTRE 18,5 E 24,9	
                    </td>
                    <td>
                        NORMAL
                    </td>
                </tr>
                <tr>
                    <td>
                        ENTRE 25,0 E 29,9
                    </td>
                    <td>
                        SOBREPESO
                    </td>
                </tr>
                <tr>
                    <td>
                        ENTRE 30,0 E 39,9	
                    </td>
                    <td>
                        OBESIDADE
                    </td>
                </tr>
                <tr>
                    <td>
                        MAIOR QUE 40,0	
                    </td>
                    <td>
                        OBESIDADE GRAVE	
                    </td>
                </tr>
            </tbody>                   
        </table>
    )

}

export default Tabela