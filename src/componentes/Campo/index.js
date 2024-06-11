import './Campo.css'

const Campo = (props) => {

    const placeholderModificada = `${props.placeholder}...`

    const aoDigitado = (evento) => {
        const valor = evento.target.value;
        if (props.tipo === 'color' && !/^#[0-9A-F]{6}$/i.test(valor)) {
            return;
        }
        props.aoAlterado(valor)
    }

    return(
        <div className="campo">
            <label>
                {props.label}
            </label>
            <input
                type={props.tipo}
                value={props.valor}
                onChange={aoDigitado}
                required={props.obrigatorio}
                placeholder={placeholderModificada}
            />
        </div>
    )
}

export default Campo