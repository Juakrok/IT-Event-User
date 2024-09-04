import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-recuperar',
  templateUrl: './recuperar.page.html',
  styleUrls: ['./recuperar.page.scss'],
})
export class RecuperarPage {

  email: string = '';

  constructor(private navCtrl: NavController) { }

  recuperar() {
    alert('Se ha mandado un correo para recuperar contraseña');
    this.navCtrl.navigateBack('/inicio');
  }

  goToInicio() {
    this.navCtrl.navigateBack('/inicio');
  }
}


