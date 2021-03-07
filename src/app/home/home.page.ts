import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public navCtrl: NavController,
    public rounter : Router,
    public alertCtrl: AlertController,
   ) { }

  ngOnInit() {
  }

  async signin() {
    let alert = this.alertCtrl.create({
      header: 'Sign In',
      inputs: [
        {
          name: 'lid',
          placeholder: 'ID :',
        },
        {
          name: 'lpass',
          placeholder: 'Password :',
          type: 'password'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Sign In',
          handler: data => {

        }
      }
      ]
    });
    (await alert).present();
  }

  async signup() {
    let alert = this.alertCtrl.create({
      header: 'Sign Up',
      inputs: [
        {
          name: 'rid',
          placeholder: 'ID :',
        },
        {
          name: 'rpass',
          placeholder: 'Password :',
          type: 'password'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: data => {

          }
        },
        {
          text: 'Sign Up',
          handler: data => {

        }
      }
      ]
    });
    (await alert).present();
  }
}
