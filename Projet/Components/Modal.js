
import Signin from "./signin.js";
import Signup from "./signup.js";
const Modal = () => {

    return ( 
        <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog modal-fullscreen">
                <div class="modal-content p-5">

                    <div class="modal-header p-1">
                        <h5 class="modal-title  text-warning text-center " id="staticBackdropLabel">Se Connecter à une Compte</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>

                    <div class="modal-body container p-5 border border-warning mt-5 divlogin rounded-4 ">

                        <ul class="nav nav-tabs justify-content-between" id="myTab" role="tablist">
                            <li class="nav-item" role="presentation">
                                <button class="nav-link active " id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Se Connecter</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">S'inscrire</button>
                            </li>
                        </ul>

                        <div class="tab-content" id="myTabContent">
                                <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab"><Signin/></div>
                                <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab"><Signup/></div>
                        </div>

                    </div>
                
                </div>
            </div>
        </div>
     );
}
 
export default Modal;