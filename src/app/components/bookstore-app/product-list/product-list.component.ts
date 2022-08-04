import { Component, OnInit } from '@angular/core';
import { Book } from './model/Book';
import { BooksService } from './product-list.component.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  livros: Array<Book> = [];
  bookService: BooksService;

  constructor(bookService: BooksService) {
    this.bookService = bookService;
  }

  ngOnInit(): void {
    this.bookService.getBook().subscribe((data) => {
      this.livros = this.formataPrecos(data.books.splice(6, 10));
      console.log(this.livros);
    });
  }

  formataPrecos(lista: Array<Book>) {
    for (let i = 0; i < lista.length; i++) {
      const precoSemSimbolo = lista[i].price.substring(1);
      lista[i].priceInNumber = Number(precoSemSimbolo);
    }
    return lista;
  }
}