import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './pages/admin/admin.component';
import { AuthorsComponent } from './pages/authors/authors.component';
import { BookAuthorsComponent } from './pages/book-authors/book-authors.component';
import { BookComponent } from './pages/book/book.component';
import { BookslistComponent } from './pages/bookslist/bookslist.component';
import { CartComponent } from './pages/cart/cart.component';
import { EditorialsComponent } from './pages/editorials/editorials.component';
import { HomeComponent } from './pages/home/home.component';
import { InventoryComponent } from './pages/inventory/inventory.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ReportComponent } from './pages/report/report.component';
import { SearchComponent } from './pages/search/search.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'authors', component: AuthorsComponent },
  { path: 'editorials', component: EditorialsComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'cart/:id', component: CartComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'book/:id', component: BookComponent },
  { path: 'inventory', component: InventoryComponent },
  { path: 'reporter', component: ReportComponent },
  { path: 'search/:query', component: SearchComponent },
  { path: 'editorialbooks/:id', component: BookslistComponent},
  { path: 'authorbooks/:id', component: BookAuthorsComponent},
  { path: '**', pathMatch: "full", redirectTo: 'home' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
