import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Observable } from '../../node_modules/rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  testForm: FormGroup;

  ngOnInit() {
    this.testForm = new FormGroup({
      'projectName': new FormControl(null, Validators.required, this.forbiddenProjects.bind(this)),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'projectStatus': new FormControl('critical')
    });
  }

  onSubmit() {
    console.log(this.testForm);
    this.testForm.reset();
  }

  forbiddenProjects(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if ( control.value === 'Test' ) {
          resolve( { 'projectIsForbidden': true } );
        } else {
          resolve( null );
        }
      }, 1500);
    });
    return promise;
  }
}
