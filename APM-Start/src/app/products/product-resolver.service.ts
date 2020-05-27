import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { ProductResolved } from './product';
import { Observable, of } from 'rxjs';
import { ProductService } from './product.service';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ProductResolverService implements Resolve<ProductResolved> {
  constructor(private productService: ProductService) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<ProductResolved> {
    let id = route.paramMap.get('id');
    if (isNaN(+id)) {
      return of({ product: null, error: 'id is not number' });
    }

    return this.productService.getProduct(+id).pipe(
      map((product) => ({ product: product })),
      catchError((e) => {
        return of({ product: null, error: e });
      })
    );
  }
}
