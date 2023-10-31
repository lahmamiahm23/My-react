

export const Page1=()=>{
  return (
    <div className="body">
    <div className="form">
        
        <center>
            <h1 className="broadway-font">Bienvenue Dans Notre Communauté CV!</h1>
        </center><br></br>
        <h2 style={{ backgroundColor: '#ADD8E6', border: '2px solid #404040' }}> Les informations personnelles:</h2>
        <div className="espace">
            <label>Entrez Votre Nom:</label><br></br>
            <input type="text" placeholder="Entrez votre texte ici" id="EntrezVotreNom" name="EntrezVotreNom" required></input><br/><br/>
        </div>
        <div className="espace">
            <label>Entrez Votre Prénom :</label><br/>
            <input type="text" placeholder="Entrez votre texte ici" id="EntrezVotrePrenom" name="EntrezVotrePrenom" required/><br/><br/>
        </div>
        <div className="espace">
            <label>E-mail :</label><br/>
            <input type="email" id="email" name="email" required/><br/><br/>
        </div>
        <div className="espace">
            <label>Numéro de Téléphone :</label><br/>
            <input type="tel" id="Tél" name="Tél" pattern="[0-9]{10}" required title="Le numéro de téléphone doit être composé de 10 chiffres"/><br/><br/>
        </div>
        <div className="espace">
            <label >Adresse :</label><br/>
            <input type="text" placeholder="Entrez votre texte ici" id="adresse" name="adresse" required/><br/><br/>
        </div>
        <div className="espace">
            <label >Lieu de Naissance :</label><br/>
            <input type="text" placeholder="Entrez votre texte ici" id="lieuDeNaissance" name="lieuDeNaissance" required/><br/><br/>
        </div>
        <div className="espace">
            Age: <br/><input type="number" id="age" required min="18" /><br/><br/>
        </div>
        <center>
            <label >Date de Naissance :</label>
            <input type="date" id="dateDeNaissance" name="dateDeNaissance" required/><br/><br/>
        </center>
        <h2 style={{ backgroundColor: '#ADD8E6', border: '2px solid #404040' }}>Parcours Pédagogique:</h2>
        <div>
            <label ><h4>Baccalauréat :</h4></label>
            <label>s.maths</label>
            <input className="espace" type="radio"  id="bacMaths" name="bac" required/>
            <label>s.physiques</label>
            <input className="espace" type="radio"  id="bacPhysiques" name="bac" required/>
            <label>SVT</label>
            <input className="espace" type="radio" id="bacSVT" name="bac" required/>
            <label>lettre</label>
            <input className="espace" type="radio" id="bacLettre" name="bac" required/>
            <label>bac technique</label>
            <input type="radio" id="bacTechnique" name="bac" required/>
        </div>
        <div>
            <label><h4>Diplômes :</h4></label>
            <select id="diplomes" name="diplomes">
                <option>Diplôme Universitaire de Technologie (DUT)</option>
                <option>Diplôme des Études Universitaires Générales (DEUG)</option>
                <option>Diplôme de Technicien Spécialisé (DTS)</option>
                <option>Brevet de Technicien Supérieur (BTS)</option>
                <option>Master (Masters Universitaires)</option>
                <option>Diplôme d'Ingénieur</option>
                <option>Doctorat</option>
            </select>
        </div><br/>
        <br/>
        <label style={{ backgroundColor: '#ADD8E6', border: '2px solid #404040' }}>Compétences Techniques :</label><br/>
        <input className="mon-champ" type="text"  placeholder="Entrez vos compétences techniques ici" id="compétencesTechniques" name="compétencesTechniques" required/><br/><br/>

        <label style={{ backgroundColor: '#ADD8E6', border: '2px solid #404040' }}>Compétences Linguistiques :</label><br/>
        <input className="mon-champ"type="text" placeholder="Entrez vos compétences linguistiques ici" id="compétencesLinguistiques" name="compétencesLinguistiques" required/><br/><br/>
        
        <label style={{ backgroundColor: '#ADD8E6', border: '2px solid #404040' }}>Autres (loisirs, Sports, etc) :</label><br/>
        <input className="mon-champ"type="text" placeholder="Entrez vos autres compétences ici" id="autres" name="autres" required/><br/><br/>
        
        <label style={{ backgroundColor: '#ADD8E6', border: '2px solid #404040' }}>Votre Objectif Professionnel :</label><br/>
        <textarea className="mon-champ" id="objectifProfessionnel" name="objectifProfessionnel"  placeholder="Entrez votre objectif professionnel ici" required></textarea><br/><br/>
        
        <label style={{ backgroundColor: '#ADD8E6', border: '2px solid #404040' }}>Sélectionnez une image :</label>
        <input type="file" id="image" name="image" accept="image/*"/><br/>
        <input type="submit" value="Envoyer"/><br/><br/><br/><br/>
       <center><button type="submit">Submit</button> </center> 

    
        
    
    
    </div>
    </div>
    
  );
  }

export default Page1;