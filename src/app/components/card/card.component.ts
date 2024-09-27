import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormStatusService } from 'src/app/services/form-status.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  constructor(
    private formStatusService: FormStatusService
  ) { }

  @Input() text?: string;
  @Output() txtEmitter = new EventEmitter();
  txt: string = '';

  valueChanged() {
    this.txtEmitter.emit(this.txt);
  }


  ngOnInit(): void {
    this.formStatusService.status.subscribe(status => {
      console.log(`status de dentro do card -> ${status}`)
    })
  }

}
