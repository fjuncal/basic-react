import './Formulario.css'
import CampoTexto from '../CampoTexto'
import Dropdown from '../Dropdown';
import Botao from '../Botao';

const Formulario = () => {
    const times = [
        'Programação',
        'Front-End',
        'Data-Science',
        'Devops',
        'UX e Design',
        'Mobile',
        'Inovação e Gestão'
    ]
    return (
        <section className='formulario'>
            <form>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto label="Nome" placeholder="Digite o seu nome" />
                <CampoTexto label="Cargo" placeholder="Digite o seu cargo" />
                <CampoTexto label="Imagem" placeholder="Digite o endereço da imagem" />
                <Dropdown label="Time" itens={times}/>
                <Botao texto="Criar card"/>
            </form>
        </section>
    )
}

export default Formulario;