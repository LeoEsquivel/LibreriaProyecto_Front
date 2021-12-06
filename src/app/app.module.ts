import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookCardComponent } from './components/book-card/book-card.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { BookComponent } from './pages/book/book.component';
import { AdminComponent } from './pages/admin/admin.component';
import { CartComponent } from './pages/cart/cart.component';
import { InventoryComponent } from './pages/inventory/inventory.component';
import { ReportComponent } from './pages/report/report.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { AuthorsComponent } from './pages/authors/authors.component';
import { EditorialsComponent } from './pages/editorials/editorials.component';
import { SearchComponent } from './pages/search/search.component';
import { BookslistComponent } from './pages/bookslist/bookslist.component';
import { BookAuthorsComponent } from './pages/book-authors/book-authors.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditAuthorComponent } from './pages/updates/author/author.component';
import { EditEditorialComponent } from './pages/updates/editorial/editorial.component';
import { EditBookComponent } from './pages/updates/book/book.component';

@NgModule({
  declarations: [
    AppComponent,
    BookCardComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    BookComponent,
    AdminComponent,
    CartComponent,
    InventoryComponent,
    ReportComponent,
    NavbarComponent,
    AuthorsComponent,
    EditorialsComponent,
    SearchComponent,
    BookslistComponent,
    BookAuthorsComponent,
    EditAuthorComponent,
    EditEditorialComponent,
    EditBookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
