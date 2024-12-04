import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ServicesComponent } from './services/services.component';
import { ServiceDetailsComponent } from './service-details/service-details.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { LeftComponent } from './left/left.component';
import { RightComponent } from './right/right.component';
import { Component, NgModule } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';


export const routes: Routes = [
    {path: '',
        redirectTo: 'home', pathMatch:'full'
    },

    {path: '', 
        component: NavbarComponent,
        outlet: 'header'
    },

    {path: '', 
        component: FooterComponent,
        outlet: 'footer'
    },

    {path: '', 
        component: LeftComponent,
        outlet: 'left'
    },
    
    {path: '', 
        component: RightComponent,
        outlet: 'right'
    },

    {path: 'home', 
        component: HomeComponent,
        title: 'home page',
    },

    {path: 'about', 
        component: AboutComponent,
        title: 'about page'
    },

    {path: 'register', 
        component: RegisterComponent,
        title: 'register page'
    },

    {path: 'login', 
        component: LoginComponent,
        title: 'login page'
    },

    {path: 'services', 
        component: ServicesComponent,
        title: 'service page'
    },

    {path: 'servicedetails', 
        component: ServiceDetailsComponent,
        title: 'service details page'
    },

    {path: 'userprofile', 
        component: UserProfileComponent,
        title: 'user-profile page'
    }

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  
  export class AppRoutingModule {}