import {Link} from 'react-router-dom'
export const Navbar = () => {
    return(
        <div>
            <div  className="container-xxl p-3">
            <div className="row col-12 bg-light">
                <div className="col-6">
                    <h1 className='text-primary'>WorkerUz</h1>
                </div>
                <div className="col-6">
                    <ul className="d-flex align-items-center pt-2" style={{listStyle:"none"}}>
                        <li className="me-3 list-item"><Link className='link-primary' to={"/"}>Bosh sahifa</Link></li>
                        <li className='list-item'><Link className='link-primary' to={"/about"}>Ushbu proekt haqida</Link></li>
                    </ul>
                </div>
            </div>
            </div>
            
        </div>
    )
}