import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/product.service';
import { Product } from '../models/product.model';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html'
})
export class ProductComponent implements OnInit {

  products: Product[] = [];

  constructor(private service: ProductService, private router: Router) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.service.getAll().subscribe(res => this.products = res);
  }

  onDelete(id: string): void {
    Swal.fire({
      title: 'Delete Product?',
      icon: 'warning',
      showCancelButton: true
    }).then(res => {
      if (res.isConfirmed) {
        this.service.delete(id).subscribe(() => {
          this.loadProducts();
        });
      }
    });
  }

  onEdit(id: string): void {
  this.router.navigate(['/admin/add-product', id]); // ✅ FIXED
}
}