
export class Task {

  constructor(
    id, 
    name,
    surname,
    country
  ){
    this.name = name; 
    this.id = id; 
    this.surname = surname; 
    this.country = country;
  }


  isValid(){
    return (


    )


  }

  // saves it to our server
  toJson(){
    return {
      name: this.name, 
      surname: this.surname,
      country: this.country
    };
  }

  static fromFirebase(doc){
    const data = doc.data();

    return new Profile(
      doc.id, 
      data.name, 
      data.surname, 
      data.country,
    );
    

  }



}
