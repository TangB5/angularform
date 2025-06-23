import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  
nom :string ="john ";
prenom:string=" doe";
age :number =25;
description :string="un developeur web travailant et passionné par les nouvelles technologies";
profession :string="developpeur web";
pays :string="cameroun";
ville :string="yaounde";


}
