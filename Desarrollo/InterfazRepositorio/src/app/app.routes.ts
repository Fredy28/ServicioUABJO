import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MariaLeticiaComponent } from './pages/maria-leticia/maria-leticia.component';
import { MartaElbaComponent } from './pages/marta-elba/marta-elba.component';
import { OlgaComponent } from './pages/olga/olga.component';
import { MariaIsabelComponent } from './pages/maria-isabel/maria-isabel.component';
import { SaulComponent } from './pages/saul/saul.component';
import { AlejandroComponent } from './pages/alejandro/alejandro.component';
import { GuadalupeComponent } from './pages/guadalupe/guadalupe.component';
import { JuanComponent } from './pages/juan/juan.component';
import { MagalyComponent } from './pages/magaly/magaly.component';
import { GabrielComponent } from './pages/gabriel/gabriel.component';

export const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'maria-leticia',
        component: MariaLeticiaComponent
    },
    {
        path: 'marta-elba',
        component: MartaElbaComponent
    },
    {
        path: 'olga',
        component: OlgaComponent
    },
    {
        path: 'maria-isabel',
        component: MariaIsabelComponent
    },
    {
        path: 'saul',
        component: SaulComponent
    },
    {
        path: 'alejandro',
        component: AlejandroComponent
    },
    {
        path: 'guadalupe',
        component: GuadalupeComponent
    },
    {
        path: 'juan',
        component: JuanComponent
    },
    {
        path: 'magaly',
        component: MagalyComponent
    },
    {
        path: 'gabriel',
        component: GabrielComponent
    },
    {
        path: '**',
        pathMatch: 'full',
        redirectTo: 'home'
    }
];
