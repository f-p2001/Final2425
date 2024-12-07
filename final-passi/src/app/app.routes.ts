import { Routes, RouterModule } from '@angular/router';
import { Component, NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ServiceComponent } from './service/service.component';
import { RegistrationComponent } from './registration/registration.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { ClassrecordComponent } from './classrecord/classrecord.component';
import { EditComponent } from './edit/edit.component';

export const routes: Routes = [
    {path: '',
        redirectTo: 'register', pathMatch:'full'
    },

    {path: '', 
        component: HeaderComponent,
        outlet: 'header'
    },
    {path: '', 
        component: NavbarComponent,
        outlet: 'navbar'
    },
    {path: '', 
        component: RegistrationComponent,
        outlet: 'register'
    },
    {path: '', 
        component: UserprofileComponent,
        outlet: 'profile'
    },
    {path: '', 
        component: ClassrecordComponent,
        outlet: 'record'
    },
    {path: '', 
        component: FooterComponent,
        outlet: 'footer'
    },
    {path: '', 
        component: EditComponent,
        outlet: 'edit'
    },
    {path: '', 
        component: ServiceComponent,
        outlet: 'service'
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  
  export class AppRoutingModule {}