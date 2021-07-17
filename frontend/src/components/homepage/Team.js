export const Team = (props) => {
    return (
        <div id='team' className='text-center'>
            <div className='container'>
                <div className='col-md-8 col-md-offset-2 section-title'>
                    <h2>Conheça o time</h2>
                    <p>
                        O Meu Tesourinho surgiu da necessidade de desolvever um projeto que integrasse todos os conhecimentos adquiridos no curso de FullStack da DH. <br />Idealizado e desenvolvido pelas únicas mulheres da turma! <br />
                        #MulheresNaTecnologia
                    </p>
                </div>
                <div id='row'>
                    <div className='col-md-4 col-sm-6 team'>
                        <div className='thumbnail'>
                            <img src='img/team/01.jpg' alt='...' className='team-img' />
                            <div className='caption'>
                                <h4>Lígia Bozzi</h4>
                                <p>Scrum Master</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4 col-sm-6 team'>
                        <div className='thumbnail'>
                            <img src='img/team/02.jpg' alt='...' className='team-img' />
                            <div className='caption'>
                                <h4>Victoria Cavalcante</h4>
                                <p>PO</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4 col-sm-6 team'>
                        <div className='thumbnail'>
                            <img src='img/team/03.jpg' alt='...' className='team-img' />
                            <div className='caption'>
                                <h4>Fabiana Salinas</h4>
                                <p>Web Developer</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-6 col-sm-6 team'>
                        <div className='thumbnail'>
                            <img src='img/team/04.jpg' alt='...' className='team-img' />
                            <div className='caption'>
                                <h4>Letícia Cruz</h4>
                                <p>Web Developer</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-6 col-sm-6 team'>
                        <div className='thumbnail'>
                            <img src='img/team/05.jpg' alt='...' className='team-img' />
                            <div className='caption'>
                                <h4>Jéssika Macedo</h4>
                                <p>Web Developer</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>    
    )
}