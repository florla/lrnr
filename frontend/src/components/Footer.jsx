import React from 'react'

export default function Footer() {
    return (
        <footer className="page-footer blue">
            <div className="container">
                <div className="row">
                    <div className="col l6 s12">
                        <p className="grey-text text-lighten-4">Embrace the power of our app and unlock the secrets of the universe, one quiz at a time. As I always say, 'Yesterday is history, tomorrow is a mystery, but today is a gift. That is why it is called the present.'</p>


                    </div>
                    <div className="col l3 s12"></div>
                    <div className="col l3 s12">
                        <p className="white-text header-5">Links</p>
                        <ul>
                            <li><a className="white-text" href="/">Home</a></li>
                            <li><a className="white-text" href="categories.html">Quiz Generator</a></li>
                            <li><a className="white-text" href="account.html">Account</a></li>
                        </ul>
                    </div>
                    <div className="col l3 s12">
                    </div>
                </div>
            </div>
            <div className="footer-copyright">
                <div className="container">
                    Made by <a className="white-text text-lighten-3" href="http://materializecss.com">Materialize</a>
                </div>
            </div>
        </footer>
    )
}
