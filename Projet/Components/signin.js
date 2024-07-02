const Signin = () => {
    return ( 
       
        <div>
            <form>
                <div class="mb-3">
                    <label for="exampleDropdownFormEmail2" class="form-label">Email address</label>
                    <input type="email" class="form-control inpu " id="exampleDropdownFormEmail2" placeholder="email@example.com" required/>
                </div>
                <div class="mb-3">
                    <label for="exampleDropdownFormPassword2" class="form-label">Password</label>
                    <input type="password" class="form-control inpu" id="exampleDropdownFormPassword2" placeholder="Password" required/>
                </div>
                
                <button  class="btn bg-dark text-warning">Se Connecter</button>
            </form>
        </div>
    
     );
}
 
export default Signin;