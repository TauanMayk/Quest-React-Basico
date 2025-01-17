// criar um componente button com um evento de clique que apresente um alerta informando a prop label do botão que foi clicado

import './button.css'

const Button = (props) => {
    return (
        <button className="button" onClick={() => alert('a label deste botão é = ' + props.label)}>
            {props.title}
        </button>
    )
}

export default Button