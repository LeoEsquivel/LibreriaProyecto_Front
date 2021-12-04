import { Component, OnInit } from '@angular/core';
import { Author } from 'src/app/models/authors.model';
import { Editorial } from 'src/app/models/editorial.model';
import { Sale } from 'src/app/models/sale.model';
import { HttpService } from 'src/app/services/http.service';

//import jsPDF from 'jspdf';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  authors: Author[] = [];
  editorials: Editorial[] = [];
  sales: Sale[] = [];
  totalAllSale: number = 0;

  Authorsname:string = "";

  constructor(private _httpService: HttpService) { 
    this.generateReport();
    
  }

  ngOnInit(): void {

    this._httpService.getAuthors().subscribe((authors: Author[])=>{
      this.authors = authors;
    });

    this._httpService.getEditorials().subscribe((editorials: Editorial[])=>{
      this.editorials = editorials;
    });

    this._httpService.getAllSales().subscribe((sales: Sale[])=>{
      this.sales = sales;
      for(let sale of sales){
        this.totalAllSale += sale.total
      }
    });
  }

  public addAuthor(){
    this._httpService.addAuthor(this.Authorsname).subscribe((data)=>{
      console.log(data);
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
