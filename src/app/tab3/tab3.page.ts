import { Component } from '@angular/core';
import { MovieService } from '../api/movie.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  providers: [MovieService]
})
export class Tab3Page { //Esta clase estrutura a minha página

  public object_message = {
    titulo: "Severus Prince Snape",
    data: "July 31, 1980",
    mensagem: "Harry Potter nasceu. Parabéns Lilian!",
    likes: "7",
    comentarios: "9",
    momento: "11h ago"
  }

  public lista_filmes = new Array<any>();

  public username: string = "Severus Prince Snape";

  constructor(private MovieService: MovieService) { }

  ionViewDidLoad() {
    this.MovieService.getlatestMovies().subscribe(
      data => {
        const response = (data as any) //transforma a resposta em objeto de qqr tipo
        const objeto_retorno = JSON.parse(response._body); // valor de texto em JSON
        this.lista_filmes = objeto_retorno.results;
        console.log(objeto_retorno);
      }, error => {
        console.log(error);
      }
    )
  }
}
