
export class Task {
  constructor(
    id, 
    name,
    complete,
    userId 
  ){
    this.name = name; 
    this.id = id; 
    this.complete = complete;
    this.userId = userId;
  }

  toJson(){
    return {
      name: this.name
      complete: this.complete
      userId: this.userId
    }


  }

  static fromFirebase(doc){
    const data = doc.data(); 
    return new Task(
      doc.id,
      data.name,
      data.complete,
      data.userId
    );
  }



}
