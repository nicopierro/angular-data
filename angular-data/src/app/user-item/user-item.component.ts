import {
  Component,
  OnInit,
  Input // <-- aggiungi questo
} from '@angular/core';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css']
})
export class UserItemComponent implements OnInit {
  @Input() name: string; // <-- aggiungi la notazione @input
  constructor() {
    // rimuovi l'impostazione del nome
  }

  ngOnInit(): void {
  }

}
