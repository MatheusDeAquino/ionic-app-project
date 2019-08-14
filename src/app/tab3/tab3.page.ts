import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page { //Esta clase estrutura a minha página
  
  public object_message = {
    titulo:"Severus Prince Snape",
    data:"July 31, 1980",
    mensagem:"Harry Potter nasceu. Parabéns Lilian!",
    likes:"7",
    comentarios:"9",
    momento:"11h ago"
  }

  public username: string = "Severus Prince Snape";

  constructor() { }
}
