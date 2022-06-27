import React, {Component} from 'react'  
import bank from '../media/bank.png'

class Navbar extends Component {
    render() {
        return(
            <nav className = 'navbar navbar-dark fixed-top shadow p-0' style={{backgroundColor:'black', height:'50px'}}>
                <a href ="/" className='navbar-brand col-sm-3 col-md-2 mr-0'
                style={{color:'white'}}>
                <img src={bank} width='40' height='40' className='d-inline-block mr-2' alt='bank'/>
                  YoBank (Decentralized Banking)
                </a>
                <ul className='navbar-nav px-3'>
                    <li className='text-nowrap d-none nav-item d-sm-none d-sm-block'>
                        <small style={{color:'white'}}>ACCOUNT NUMBER: {this.props.customerAccount}
                        </small>
                    </li>
                </ul>

            </nav>
        )
    }
}

export default Navbar;