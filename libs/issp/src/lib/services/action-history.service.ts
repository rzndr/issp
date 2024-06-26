import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, Subject, tap } from 'rxjs';
import { UntilDestroy } from '@ngneat/until-destroy';
import { ISSPDetails } from '../models/issp-details';
import { ActionHistory } from '../models/action-history';

@UntilDestroy({ checkProperties: true })
@Injectable({
  providedIn: 'root',
})
export class ActionHistoryService {
  route = `api/v1/action-history`;

  constructor(private http: HttpClient) {}

  #emitAllItems: BehaviorSubject<Array<ActionHistory>> = new BehaviorSubject<
    Array<ActionHistory>
  >(new Array<ActionHistory>());
  allItems$ = this.#emitAllItems.asObservable();

  #emitCurrentContextItem = new Subject<ActionHistory>();
  currentContextItem$ = this.#emitCurrentContextItem.asObservable();

  #emitLastAddedItem = new Subject<ActionHistory>();
  lastAddedItem$ = this.#emitLastAddedItem.asObservable();

  findAll(isspId: string) {
    const uri = `${this.route}/${isspId}`;
    return this.http.get<ActionHistory[]>(uri).pipe(
      map((data) => {
        let list = new Array<ActionHistory>();
        list = data.map((e) => {
          const entity = new ActionHistory();
          entity.assign(e);
          return entity;
        });
        return list;
      }),
      tap((data) => {
        this.#emitAllItems.next(data);
      })
    );
  }

  findOne(id: string): Observable<ActionHistory> {
    const uri = `${this.route}/${id}`;
    return this.http.get<ActionHistory>(uri).pipe(
      map((e) => {
        const entity = new ActionHistory();
        entity.assign(e);
        return entity;
      }),
      tap((data) => {
        this.#emitCurrentContextItem.next(data);
      })
    );
  }

  createOne(issp: ISSPDetails): Observable<ActionHistory> {
    const uri = `${this.route}`;
    issp.startYear = new Date(issp.startYear).getFullYear();
    issp.endYear = new Date(issp.endYear).getFullYear();
    return this.http.post<ActionHistory>(uri, issp).pipe(
      map((e) => {
        const entity = new ActionHistory();
        entity.assign(e);
        return entity;
      }),
      tap((data) => {
        this.#emitLastAddedItem.next(data);
      })
    );
  }
}
