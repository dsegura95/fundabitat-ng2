'use strict';

import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { AboutComponent } from './about';
import { RelationsComponent } from './relations';
import { ShellComponent } from './shell';
import { AreasComponent } from './areas';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: '',
    component: ShellComponent,
    children: [
      { path: 'nosotros', component: AboutComponent },
      { path: 'nosotros/relaciones', component: RelationsComponent },
      { path: 'areas', component: AreasComponent }
    ]
  }

];

export const appRoutingModule: ModuleWithProviders = RouterModule.forRoot(appRoutes, { useHash: true });

