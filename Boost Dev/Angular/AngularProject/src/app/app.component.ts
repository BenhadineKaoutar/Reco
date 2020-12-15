import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AngularProject';
  isAuth=false;
  Name1="Lolokatty";//propriete personnalisée
  
  constructor(){
    setTimeout(() => {this.isAuth=true;},1000);//la fonction lamda à definir dans le setTimeoutsinon elle ne fonctionne pas
  }
  onAllumer(){
    console.log('On Allume tout');//console du navigateur
    //this.isAuth=false;
  }
  
}
