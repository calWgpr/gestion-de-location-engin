const Signup = () => {
    return ( 
        <div>
        <form>
            <div class="mb-3">
                <label for="exampleDropdownFormEmail2" class="form-label">Nom</label>
                <input type="text" class="form-control" id="exampleDropdownFormEmail2" placeholder="entrer ici votre nom"required/>
            </div>
            <div class="mb-3">
                <label for="exampleDropdownFormEmail2" class="form-label">Prenom</label>
                <input type="text" class="form-control" id="exampleDropdownFormEmail2" placeholder="entrer ici votre prenom"required/>
            </div>
            <div class="mb-3">
                <label for="exampleDropdownFormEmail2" class="form-label">Adresse e-mail</label>
                <input type="email" class="form-control" id="exampleDropdownFormEmail2" placeholder="email@example.com"required/>
            </div>
            <div class="mb-3">
                <label for="exampleDropdownFormPassword2" class="form-label">Mot de passe</label>
                <input type="password" class="form-control" id="exampleDropdownFormPassword2" placeholder="mot de passe"required/>
            </div>
            <div class="mb-3">
                <label for="exampleDropdownFormPassword2" class="form-label">Confirmer le Mot de passe</label>
                <input type="password" class="form-control" id="exampleDropdownFormPassword2" placeholder="confirme le mot de passe"required/>
            </div>
            
            <button  class="btn bg-dark text-warning ">Enregistrer</button>
        </form>
    </div>
     );
}
 
export default Signup;