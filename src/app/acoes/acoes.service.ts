import { Acao, Acoes, AcoesAPI } from './modelo/acoes';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map, pluck, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AcoesService {
  constructor(private httpClient: HttpClient) {}

  getAcoes(valor?: string): Observable<Acoes> {
    const params = valor ? new HttpParams().append('valor', valor) : undefined;
    return this.httpClient
      .get<AcoesAPI>('http://localhost:3000/acoes', { params })
      .pipe(
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
