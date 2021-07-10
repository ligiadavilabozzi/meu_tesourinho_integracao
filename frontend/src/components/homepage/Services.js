export const Services = (props) => {
    return (
        <div id='services' className='text-center'>
            <div className='container'>
                <div className='section-title'>
                    <h2>Como Usar?</h2>
                    <p>
                        Conheça um pouco mais sobre como usar cada pedacinho da nossa plataforma.
                    </p>
                </div>
                <div className='row'>
                    <div className='col-md-4'>
                        <i className='fa fa-user'></i>
                        <div className='service-desc'>
                            <h3>1. Já é cadastrado?</h3>
                            <p>O primeiro passo é criar o cadastro para ter acesso à página de clientes</p>
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <i className='fa fa-check-square-o'></i>
                        <div className='service-desc'>
                            <h3>2. Defina a meta</h3>
                            <p>A criança precisará definir uma meta. Quanto economizará?</p>
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <i className='fa fa-paper-plane'></i>
                        <div className='service-desc'>
                            <h3>3. Atinja o objetivo!</h3>
                            <p>A criança adicionará as entradas, que no caso pode ser a mesada, e as saídas, que serão as despesas que teve. Assim, consiguirá acompanhar como foi o processo até alcançar o objetivo.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}