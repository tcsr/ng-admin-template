import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { defaultIfEmpty, of, take, toArray, map, range, from, merge, mergeAll, pipe, mergeMap, retryWhen, interval, throwError, tap, Observable, delay, concatMap } from 'rxjs';

@Component({
  selector: 'app-operators',
  templateUrl: './operators.component.html',
  styleUrls: ['./operators.component.scss']
})



export class OperatorsComponent {

  constructor(private httpCliet: HttpClient) {

  }

  isServerError = (err: HttpErrorResponse) => err.status >= 500;

  retryServerError<T>(maxRetries: number, delayTime: number) {
    let retries = 0;
    return retryWhen((errors) =>
      errors.pipe(
        delay(delayTime),
        concatMap((err) => {
          retries++;
          if (retries < maxRetries) {
            return of(err);
          } else {
            return throwError(err);
          }
        })
      )
    );
  }

  users$ = this.httpCliet.get('https://reqres.in/api/users?page=1').pipe(this.retryServerError(2, 2000));


  ngOnInit() {

    of(1, 2, 3, 4).pipe(defaultIfEmpty(7)).subscribe(value => {
      console.log(value);
    })

    const arraySource1$ = of(1, 2, 3, 4, 5);

    arraySource1$.pipe(map((data) => {
      return {
        key: data,
        value: data
      }
    })).subscribe((data) =>
      console.log(data)
    );

    const myNumbers = range(1, 5);
    myNumbers.pipe
      (map((number) => {
        return {
          id: number,
          value: number
        }
      }), toArray()).subscribe(data => console.table(data));

    const myObj = of([{
      id: 1,
      name: 'Chandra',
      emailId: 'test@gmail.com',
      mobileNo: 998888,
      address: '1, Chennai',
      address1: '1, Chennai',
      address2: '1, Chennai',
      address3: '1, Chennai',
      address4: '1, Chennai',
    }]).pipe((data) => from(data));

    merge(arraySource1$, myObj).subscribe(data => console.table(data))

  }
}
