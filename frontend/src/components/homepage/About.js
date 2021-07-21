export const About = (props) => {
    return (
        <div id='about'>
            <div className='container'>
                <div className='row'>
                    <div className='col-xs-12 col-md-6'>
                        {' '}
                        <img src='img/about.jpg' className='img-responsive' alt='' />{' '}
                    </div>
                    <div className='col-xs-12 col-md-6'>
                        <div className='about-text'>
                            <h2>Quem somos</h2>
                            <p>Educação financeira para crianças é um assunto que deve ser levado a sério, mas também pode ser divertido. E como qualquer aprendizado, requer tempo, afinal, os hábitos não são formados de um dia para o outro. O Meu tesourinho ajuda a ensinar a importância de saber gerir o próprio dinheiro!</p>
                            <h3>Porque nos escolher</h3>
                            <div className='list-style'>
                                <div className='col-lg-6 col-sm-6 col-xs-12'>
                                    <ul>
                                        <li>Ensinamos de maneira lúdica</li>
                                        <li>Objetivos simples</li>
                                        <li>Maior plataforma direcionada à crianças</li>
                                    </ul>
                                </div>
                                <div className='col-lg-6 col-sm-6 col-xs-12'>
                                    <ul>
                                        <li>Incentivo ao consumo consciente</li>
                                        <li>Jogos divertidos &#9829; </li>
                                        <li>Dicas para o cotidiano</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}