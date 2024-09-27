import { FormStatusService } from './../../services/form-status.service';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { delay, from, map, Observable } from 'rxjs';
import { CardModule } from 'src/app/components/card/card.module';
import { InputComponent } from 'src/app/components/input/input.component';
import { HighLightDirective } from 'src/app/directives/high-light.directive';
import { HttpService } from 'src/app/services/http.service';
import { SpacePipe } from 'src/app/shared/space.pipe';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, CommonModule, InputComponent, CardModule, SpacePipe, HighLightDirective],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormComponent implements OnInit {

  form!: FormGroup;
  ngModelTxt: string = '';
  fruits: string[] = ['banana', 'maça', 'abacaxi', 'melão'];

  fruitsObservale$?: Observable<string>;

  constructor(
    private fb: FormBuilder,
    private formStatusService: FormStatusService,
    private httpService: HttpService
  ) { }


  cardText(txt: string) {
    console.log(txt)
  }

  formBuilder() {
    this.form = this.fb.group({
      name: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      age: [null, Validators.required],
      address: this.fb.group({
        street: [null, Validators.required]
      })
    })
  }

  saveData() {
    console.log(this.form.value);
    this.fruitsObservale$?.pipe(
      delay(500),
      map((v, i) => `${i + 1} - ` + v)
    ).subscribe({
      next: v => console.log(v)
    })

    this.formStatusService.changeStatus('done');

    this.httpService.getObj().subscribe({
      next: data => console.log(data),
      error: (err) => console.error(err)
    })

    this.httpService.fork().subscribe({
      next([value, value2]) {
        console.log(value);
        console.log(value2)
      },
    })
  }


  ngOnInit(): void {
    this.formBuilder();

    this.fruitsObservale$ = from(this.fruits);

    this.formStatusService.status.subscribe(status => {
      console.log(status);
    })

  }

}
