import { GiTruck } from "react-icons/gi";
import Modal from "./Modal";
const Nav = () => {
    return ( 
    
        <div class="container ">
        <div class="row  border-bottom  border-2 rounded-4 p-2  shadow border-warning">
            <div class="col-md-4">
                <input type="search" id="form1" class="form-control border-2 border border-warning p-1 rounded-4 outline" placeholder="recherche"/> 
            </div>
            <div class="col-md-4">
                
            </div>
            
            <div class="col-md-2">
            <GiTruck className="text-danger m-1 fs-1" />
                <button type="button" class="btn btn-danger p-1" data-mdb-ripple-init>PANIER</button>
            </div>
          

            <div class="col-md-2">
           
            <button type="button" class="btn btn-warning text-light float-end p-1" data-bs-toggle="modal" data-bs-target="#staticBackdrop" data-mdb-ripple-init data-mdb-ripple-color="orange">
                SE CONNECTER
            </button>
            <Modal/>
            </div>
        </div>
      </div>


     );
}
 
export default Nav;