export const Header = (props) => {
    return (
        <header id='header'>
            <div className='intro'>
                <div className='overlay'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-md-8 col-md-offset-2 intro-text'>
                                <h1>
                                    Educação financeira de um modo divertido
                                </h1>
                                <p>Uma plataforma feita para crianças que querem ir além!
                                </p>
                                <a
                                    href='#features'
                                    className='btn btn-custom btn-lg page-scroll'
                                >
                                    Saiba Mais
                                </a>{' '}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}