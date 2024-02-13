import React from 'react'
import { Link } from 'react-router-dom'

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
                            <li><Link className="white-text" to="/">Home</Link></li>
                            <li><Link className="white-text" to="/categories">Quiz Generation</Link></li>
                            <li><Link className="white-text" to="/account">Account</Link></li>
                        
                        </ul>
                    </div>
                    <div className="col l3 s12">
                    </div>
                </div>
            </div>

            
        </footer>
    )
}
