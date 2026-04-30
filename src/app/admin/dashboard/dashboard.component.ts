import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from 'src/app/api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {

  categories: any[] = [];
  isEdit = false;
  currentId: string | null = null;

  form = this.fb.group({
    name: ['', Validators.required]
  });

  constructor(private api: ApiService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.loadData();
  }

  // Load data
  loadData(): void {
    this.api.getData().subscribe(res => this.categories = res);
  }

  // Submit
  onSubmit(): void {
    if (this.form.invalid) return;

    const payload = this.form.value;

    if (this.isEdit && this.currentId) {
      this.api.putData(this.currentId, payload).subscribe(() => {
        this.toast('success', 'Updated successfully');
        this.resetForm();
        this.loadData();
      });
    } else {
      this.api.postData(payload).subscribe(() => {
        this.toast('success', 'Added successfully');
        this.resetForm();
        this.loadData();
      });
    }
  }

  // Edit
  onEdit(item: any): void {
    this.isEdit = true;
    this.currentId = item.id;
    this.form.patchValue(item);
  }

  // Delete
  onDelete(id: string): void {
    Swal.fire({
      title: 'Delete?',
      text: 'This action cannot be undone',
      icon: 'warning',
      showCancelButton: true
    }).then(res => {
      if (res.isConfirmed) {
        this.api.deleteData(id).subscribe(() => {
          this.toast('success', 'Deleted successfully');
          this.loadData();
        });
      }
    });
  }

  // Reset
  resetForm(): void {
    this.form.reset();
    this.isEdit = false;
    this.currentId = null;
  }

  // Toast
  toast(icon: any, title: string): void {
    Swal.fire({
      icon,
      title,
      toast: true,
      position: 'top-end',
      timer: 2000,
      showConfirmButton: false
    });
  }
}