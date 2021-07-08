import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CourseListComponent } from './courses/course-list.component';
import { StarComponent } from './star/star.component';
import { ReplacePipe } from './pipe/replace.pipe';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    CourseListComponent,
    StarComponent,
    ReplacePipe,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: '', //raiz do path
        redirectTo: 'courses', pathMatch: 'full'
      }, //objeto de rota
      {
        path: 'courses', //faz link da rota para o curso 
        component: CourseListComponent
      },
      //{
      //  path: '**', // rota nativa, se não encontrar a rota ele retorna erro 404
      //} 
    ]) //carrega rotas assim que inicializa a aplicação 
    //ativa o componente pela rota e não pelo selector
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
// rotas padrões: '' e '**'