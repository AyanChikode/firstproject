import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ProductService } from 'src/app/product.service';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html'
})
export class AddProductComponent implements OnInit {

  isEdit = false;
  currentId: string | null = null;

  constructor(
    private fb: FormBuilder,
    private service: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  form = this.fb.group({
    title: ['', Validators.required],
    age: [''],
    price: [0, Validators.required],
    mrp: [0],
    image: [''],
    brand: [''],
    category: [''],
    description: ['']
  });

  ngOnInit(): void {
    this.checkEditMode(); // ✅ IMPORTANT
  }

  // ✅ CHECK EDIT MODE
  checkEditMode(): void {
    const id = this.route.snapshot.paramMap.get('id');

    if (!id) return;

    this.isEdit = true;
    this.currentId = id;

    this.service.getById(id).subscribe(res => {
      this.form.patchValue(res); // ✅ DATA AUTO FILL
    });
  }

  // ✅ SUBMIT
  onSubmit(): void {
    if (this.form.invalid) return;

    const data = this.form.value as Product;

    if (this.isEdit && this.currentId) {
      this.service.update(this.currentId, data).subscribe(() => {
        this.success('Product Updated');
      });
    } else {
      this.service.create(data).subscribe(() => {
        this.success('Product Added');
      });
    }
  }

  // ✅ SUCCESS + REDIRECT
  success(msg: string): void {
    Swal.fire({
      icon: 'success',
      title: msg,
      timer: 1500,
      showConfirmButton: false
    });

    this.router.navigate(['/admin/product']); // ✅ BACK TO LIST
  }

  // ✅ RESET
  resetForm(): void {
    this.form.reset();
    this.isEdit = false;
    this.currentId = null;
  }
}