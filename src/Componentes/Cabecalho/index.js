import './Cabecalho.css'

import { IoSearch } from "react-icons/io5";

const Cabecalho = () => {
    return (
        <div className='cabecalho'>
            <div className='codelandia'>
                <span className='span1'>Code</span>
                <span className='span2'>lândia</span>
            </div>
            <div className='buscar'>
                <button>
                    <IoSearch size={25}/>
                </button>
                <input
                    placeholder='Pesquisar no Blog' />
            </div>
        </div>
    )
}

export default Cabecalho