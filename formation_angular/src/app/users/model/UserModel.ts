export class UserModel {
  public id !: number;
  nom : string = ''
  prenom : string = ''
  email : string = ''
  dateDeNaissance : string = ''


  constructor(nom: string ='', prenom: string = '', mail: string ='', dateNaissance: string = '') {
    this.nom = nom;
    this.prenom = prenom;
    this.email = mail;
    this.dateDeNaissance = dateNaissance;
  }
}
