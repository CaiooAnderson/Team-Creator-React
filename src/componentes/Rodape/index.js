import './Rodape.css'

const Rodape = () => {
    return (
        <footer className='footer'>
            <section>
                <ul>
                    <li>
                        <a target='_blank' href='https://github.com/CaiozinS2' rel="noopener noreferrer">
                            <img src='imagens/gh.png' alt='logo github'/>
                        </a>
                    </li>
                    <li>
                        <a target='_blank' href='https://linkedin.com/in/caioandersongoes/' rel="noopener noreferrer">
                            <img src='/imagens/li.png' alt='logo linkedin'/>
                        </a>
                    </li>
                    <li>
                        <a target='_blank' href='mailto:caio2.dev@gmail.com' rel="noopener noreferrer">
                            <img src='/imagens/gm.png' alt='logo gmail'/>
                        </a>
                    </li>
                </ul>
            </section>
            <section>
                <h3>Desenvolvido por Caio Anderson</h3>
            </section>
        </footer>
    )
}

export default Rodape