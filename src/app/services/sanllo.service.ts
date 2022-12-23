import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ISanllo, PLAN } from '../interfaces/i-sanllo';

@Injectable({
  providedIn: 'root'
})
export class SanlloService {

  public isShow: boolean = false;
  collection: string = "Tasks";

  constructor(private firestore: AngularFirestore) { }

  init(){
    let payload = {
      title: 'Your title here..',
      description: 'Your description here..',
      status: PLAN
    } as ISanllo;
    this.firestore.collection(this.collection).add(payload);
  }

  all(status:string){
    return this.firestore.collection(this.collection, ref => ref.where('status','==', status)).snapshotChanges();
  }

  update(id:string, task:ISanllo){
    return this.firestore.doc(`${this.collection}/`+id).update(task);
  }

}
