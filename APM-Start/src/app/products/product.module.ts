import { NgModule } from '@angular/core';

import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';
import { ProductEditComponent } from './product-edit/product-edit.component';

import { SharedModule } from '../shared/shared.module';
import { RouterModule, Route } from '@angular/router';
import { ProductResolverService } from './product-resolver.service';
import { ProductEditTagsComponent } from './product-edit/product-edit-tags.component';
import { ProductEditInfoComponent } from './product-edit/product-edit-info.component';

const ProductRoutes: Route[] = [
  { path: 'products', component: ProductListComponent },
  {
    path: 'products/:id',
    component: ProductDetailComponent,
    resolve: { resolvedData: ProductResolverService },
  },
  {
    path: 'products/:id/edit',
    component: ProductEditComponent,
    resolve: { resolvedData: ProductResolverService },
    children: [
      { path: 'info', component: ProductEditInfoComponent },
      { path: '', redirectTo: 'info', pathMatch: 'full' },
      { path: 'tags', component: ProductEditTagsComponent },
    ],
  },
];

@NgModule({
  imports: [SharedModule, RouterModule.forChild(ProductRoutes)],
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ProductEditComponent,
    ProductEditInfoComponent,
    ProductEditTagsComponent,
  ],
})
export class ProductModule {}
