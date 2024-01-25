import { Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { ProductsComponent } from './pages/admin/admin_product/products/products.component';
import { AdminsComponent } from './layout/admins/admins.component';
import { ProductCreateComponent } from './pages/admin/admin_product/product-create/product-create.component';
import { ProductEditComponent } from './pages/admin/admin_product/product-edit/product-edit.component';
import { ProductDestailComponent } from './components/product-destail/product-destail.component';
import { HomeComponent } from './layout/home/home.component';
import { CategorisesComponent } from './pages/admin/admin_category/categorises/categorises.component';
import { AdminPageComponent } from './pages/admin/admin_product/admin-page/admin-page.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
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
    path: "login",
    component: LoginComponent,
  },
  {
    path: "signup",
    component: RegisterComponent,
  },
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
        },{
          path: "category",
          component: CategorisesComponent,
      }
    ]
},
];
