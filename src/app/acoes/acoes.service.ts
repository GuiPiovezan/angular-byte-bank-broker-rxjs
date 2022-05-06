import { Acao, Acoes, AcoesAPI } from './modelo/acoes';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, pluck, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AcoesService {
  constructor(private httpClient: HttpClient) {}

  getAcoes(): Observable<Acoes> {
    return this.httpClient.get<AcoesAPI>('http://localhost:3000/acoes').pipe(
      tap((value) => {
        console.log(value);
      }),
      pluck('payload'),
      map((acoes) => acoes.sort((a, b) => this.ordenaPorCodigo(a, b)))
    );
  }

  private ordenaPorCodigo(a: Acao, b: Acao) {
    if (a.codigo > b.codigo) {
      return 1;
    }

    if (a.codigo < b.codigo) {
      return -1;
    }

    return 0;
  }
}
