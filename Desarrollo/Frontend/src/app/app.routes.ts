import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProfesorComponent } from './pages/profesor/profesor.component';
import { LoginComponent } from './pages/login/login.component';
import { OpcionesComponent } from './pages/opciones/opciones.component';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { EditarComponent } from './pages/editar/editar.component';
import { EliminarComponent } from './pages/eliminar/eliminar.component';
import { EditarFormComponent } from './pages/editar-form/editar-form.component';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './auth.guard';

export const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'profesor/:id',
        component: ProfesorComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'opciones',
        component: OpcionesComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'agregar',
        component: AgregarComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'editar',
        component: EditarComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'editar-form/:id',
        component: EditarFormComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'eliminar',
        component: EliminarComponent,
        canActivate: [AuthGuard]
    },
    {
        path: '**',
        pathMatch: 'full',
        redirectTo: 'home'
    }
];
