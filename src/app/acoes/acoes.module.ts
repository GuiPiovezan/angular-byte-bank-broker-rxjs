import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AcoesRoutingModule } from './acoes-routing.module';
import { AcoesComponent } from './acoes.component';
import { SharedModule } from '../shared/shared.module';
import { CardAcoesComponent } from './card-acoes/card-acoes.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AcoesComponent, CardAcoesComponent],
  imports: [CommonModule, AcoesRoutingModule, SharedModule, HttpClientModule],
})
export class AcoesModule {}
