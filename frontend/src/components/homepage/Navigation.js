import {BrowserRouter as Router, Switch, Route, Link, Redirect} from "react-router-dom"

export const Navigation = (props) => {
    return (
        <Router>
        <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
            <div className='container'>
                <div className='navbar-header'>
                    <button
                        type='button'
                        className='navbar-toggle collapsed'
                        data-toggle='collapse'
                        data-target='#bs-example-navbar-collapse-1'
                    >
                        {' '}
                        <span className='sr-only'>Toggle navigation</span>{' '}
                        <span className='icon-bar'></span>{' '}
                        <span className='icon-bar'></span>{' '}
                        <span className='icon-bar'></span>{' '}
                    </button>
                    <a className='navbar-brand page-scroll' href='#page-top'>
                        <img src="img/logo/logo-tesourinho branco"></img>
                    </a>{' '}
                </div>

                <div
                    className='collapse navbar-collapse'
                    id='bs-example-navbar-collapse-1'
                >
                    <ul id= "#menu" className='nav navbar-nav navbar-right'>
                        <li>
                            <a href='#about' className='page-scroll'>
                                QUEM SOMOS
                            </a>
                        </li>
                        <li>
                            <a href='#features' className='page-scroll'>
                                Benefícios
                            </a>
                        </li>
                        <li>
                            <a href='#services' className='page-scroll'>
                                COMO USAR?
                            </a>
                        </li>
                        <li>
                            <a href='#testimonials' className='page-scroll'>
                                Depoimentos
                            </a>
                        </li>
                        <li>
                            <a href='#team' className='page-scroll'>
                                Time
                            </a>
                        </li>
                        <li>
                            <a href='#contact' className='page-scroll'>
                                Contato
                            </a>
                        </li>
                        <li>
                        <a href= "/login" className='page-scroll'>Login</a>
                        </li>
                        <li>
                        <a href= "/register" className='page-scroll'>Cadastre-se</a>
                        </li>
                        <li>
                        <a href= "/user" className='page-scroll'>Dashboard</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </Router>
    )
}