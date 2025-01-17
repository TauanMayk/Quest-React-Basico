// Criar um paragrafo que muda de cor
import './paragrafo.css'
// import props from 'prop-types'

const Paragrafo = (props) => {
    return(
        <p style={{color: props.color}} >
            {props.title}
        </p>
    )
}

export default Paragrafo