import { Component } from '@angular/core';

import pdfmake from 'pdfmake/build/pdfmake';
// import pdfFonts from 'pdfmake/build/vfs_fonts';
// pdfmake.vfs = pdfFonts.pdfMake.vfs;
import pdfFonts from 'pdfmake-chinese/build/vfs_fonts';
pdfmake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular';

  constructor() {}

  generatePdf() {
    pdfmake.fonts = {
   

      方正黑体简体: {
        normal: '方正黑体简体.TTF',
        bold: '方正黑体简体.TTF',
        italics: '方正黑体简体.TTF',
        bolditalics: '方正黑体简体.TTF',
      },
    };

    var dd = {
      content: [
        {
          layout: 'lightHorizontalLines', // optional
          table: {
            // headers are automatically repeated if the table spans over multiple pages
            // you can declare how many rows should be treated as headers
            headerRows: 1,
            widths: ['*', 'auto', 100, '*'],

            body: [
              [
                { text: 'First ★☆', bold: true },
                { text: 'Second', bold: true, font: '方正黑体简体' },
                { text: 'Third', bold: true },
                { text: '我支持中文啦', bold: true },
              ],
              ['Value 1', 'Value 2', 'Value 3', 'Value 4'],
              ['Val 2', 'Val 2', 'Val 3', 'Val 4'],
            ],
          },
        },
      ],
      defaultStyle: {
        font: '方正黑体简体',
      },
    };

  
    
    pdfmake.createPdf(dd).download();
  }
}
