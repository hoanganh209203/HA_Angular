import { Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { ProductsComponent } from './pages/admin/products/products.component';
import { AdminsComponent } from './layout/admins/admins.component';
import { ProductCreateComponent } from './pages/admin/product-create/product-create.component';
import { ProductEditComponent } from './pages/admin/product-edit/product-edit.component';
import { ProductDestailComponent } from './components/product-destail/product-destail.component';
import { HomeComponent } from './layout/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AdminPageComponent } from './pages/admin/admin-page/admin-page.component';
export const routes: Routes = [
  // route '/' = page Home
  // path, component
  {
    path: "",
    component: HomeComponent,
    children: [
        {
            path: "",
            redirectTo: "/home",
            pathMatch: "full",
        },
        {
            path: 'home',
            component: HomepageComponent,

        },
      //   {
      //     path: 'admin',
      //     component: ProductsComponent,

      // },
        {
            path: "product_detail/:idPr",
            component: ProductDestailComponent,
        },
      //   {
      //     path: "**",
      //     component: NotFoundComponent,
      // },
       
    ]
},
  // { path: 'admin', component: ProductsComponent },
  {
    path: "admin",
    component: AdminsComponent,
    children: [
        {
            path: '',
            redirectTo: "/admin/dashboard",
            pathMatch: "full"
        },
        {
            path: "dashboard",
            component: AdminPageComponent,
        },
        {
            path: "products",
            component:  ProductsComponent,
        },
        {
            path: "products_create",
            component: ProductCreateComponent,
        },
        {
            path: "products_edit/:id",
            component: ProductEditComponent,
        }
    ]
},
];
