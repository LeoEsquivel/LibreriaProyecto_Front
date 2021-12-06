import { Component, OnInit } from '@angular/core';
import { Author } from 'src/app/models/authors.model';
import { Editorial } from 'src/app/models/editorial.model';
import { Sale } from 'src/app/models/sale.model';
import { HttpService } from 'src/app/services/http.service';

import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { Book } from 'src/app/models/book.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  books: Book[] = [];
  authors: Author[] = [];
  editorials: Editorial[] = [];
  sales: Sale[] = [];
  totalAllSale: number = 0;

  Authorsname: string = "";
  Editorialsname: string = "";

  isbn:string = "";
  title:string = "";
  authorId:string = "";
  editorialId:string = "";
  price:number = 0;
  amount:number = 0;
  imgUrl:string = "";


  constructor(private _httpService: HttpService) { 
    this.generateReport();
    
  }

  ngOnInit(): void {
    this._httpService.getAllSales().subscribe((sales: Sale[])=>{
      this.getAuthors();
      this.getBooks();
      this.getEditorials();
      this.sales = sales;
      for(let sale of sales){
        this.totalAllSale += sale.total
      }
    });
  }

  public getAuthors(){
    this._httpService.getAuthors().subscribe((authors: Author[])=>{
      this.authors = authors;
    });
  }

  public getEditorials(){
    this._httpService.getEditorials().subscribe((editorials: Editorial[])=>{
      this.editorials = editorials;
    });
  }

  public getBooks(){
    this._httpService.getBooks().subscribe((books:Book[])=>{
      this.books = books;
    })
  }

  public addAuthor(){
    this._httpService.addAuthor(this.Authorsname).subscribe((data)=>{
      this.getAuthors();
    });
  }

  public addEditorial(){
    this._httpService.addEditorial(this.Editorialsname).subscribe((data)=>{
      this.getEditorials();
    })
  }


  public addBook(){
    debugger;
    const book = {
      "isbn": this.isbn,
      "title": this.title,
      "author": this.authorId,
      "editorial": this.editorialId,
      "price": this.price,
      "amounth": this.amount,
      "imgUrl": this.imgUrl
    }
    debugger;
    this._httpService.addBook(book).subscribe((data)=>{

    });
  
  }

  public updateEditorial(id:string){

  }

  public updateAuthor(id:string){

  }

  public updateBook(id:string){
    
  }

  public deleteAuthor(id:string){
    this._httpService.deleteAuthor(id).subscribe((data)=>{
      this.getAuthors();
    })
  }

  public deleteBook(id:string){
    this._httpService.deleteBook(id).subscribe((data)=>{
      this.getBooks();
    })
  }

  public deleteEditorial(id:string){
    this._httpService.deleteEditorial(id).subscribe((data)=>{
      this.getAuthors();
    });
  }

  public generateReport(){
    const DATA = document.getElementById('v-pills-seeSales');
    //const TABLE = document.getElementById('v-pills-seeSales');
    //const childremoved = document.getElementById('reportButton');
    //const DATA = TABLE?.removeChild(childremoved!);
    const doc = new jsPDF('p', 'pt', 'a4');
    const options = {
      background: 'white',
      scale: 3
    };
    html2canvas(DATA!, options).then((canvas)=>{
      const img = canvas.toDataURL('image/PNG');
      const bufferX = 15;
      const bufferY = 15;
      const imgProps = (doc as any).getImageProperties(img);
      const pdfWidth = doc.internal.pageSize.getWidth() - 2 * bufferX;
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      doc.addImage(img, 'PNG', bufferX, bufferY, pdfWidth, pdfHeight, undefined, 'FAST');
      return doc;
    }).then((docResult) => {
      docResult.save(`${new Date().toISOString()}_reporte.pdf`);
    });
  }

}
