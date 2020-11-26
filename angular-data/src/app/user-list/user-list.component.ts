import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  names: string[]; // Creiamo il nostro vettore di stringhe
  constructor() {
  this.names = ['Ari', 'Carlos', 'Felipe', 'Nate']; // Riempiamo il vettore
  }
  ngOnInit(): void {
  }

}
