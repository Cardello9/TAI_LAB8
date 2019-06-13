import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {ContactComponent} from "./components/contact/contact.component";
import {QuizComponent} from "./components/quiz/quiz.component";
import {BlogComponent} from "./components/blog/blog.component";
import {BlogItemDetailsComponent} from './components/blog-item-details/blog-item-details.component';
import {BlogHomeComponent} from './blog-home/blog-home.component';
import { BlogCreateComponent } from './components/blog-create/blog-create.component';
const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'blog/detail/:id',
    component: BlogItemDetailsComponent
  },    
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'blog', component: BlogHomeComponent,

  },
  {
    path: 'quiz',
    component: QuizComponent,

  },
  {
  path: 'add-post',
 component: BlogCreateComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
