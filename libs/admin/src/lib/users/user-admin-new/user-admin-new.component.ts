import { Subscription, take } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserDetails } from '../models/user-details';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { UntilDestroy } from '@ngneat/until-destroy';
import { UsersService } from '../services/users.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import {
  ConfirmationDialogComponent,
  ConfirmationDialogComponentData,
} from '@issp/components';
import { User_Status } from '@prisma/client';
import { User_Statuses } from '@issp/common';

@UntilDestroy({ arrayName: 'subs' })
@Component({
  selector: 'issp-user-admin-new',
  templateUrl: './user-admin-new.component.html',
  styleUrl: './user-admin-new.component.scss',
})
export class UserAdminNewComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private readonly router: Router,
    private readonly usersService: UsersService,
    private snackBar: MatSnackBar,
    private dialog: MatDialog
  ) {}

  form: FormGroup;
  issp: UserDetails;
  subs: Subscription[] = [];
  statusList = Object.entries(User_Statuses).map(([key]) => key);
  titleMinLength = 6;
  titleMaxLength = 100;

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.form = this.formBuilder.group({
      firstName: new FormControl<string>('', [Validators.required]),
      lastName: new FormControl<string>('', [Validators.required]),
      phone: new FormControl<string>('', [Validators.required]),
      password: new FormControl<string>('ChangeM3!', [Validators.required]),
      email: new FormControl<string>('', [Validators.required]),
      agencyId: new FormControl<string>('', [Validators.required]),
      status: new FormControl<User_Status>(User_Status.ACTIVE, [
        Validators.required,
      ]),
      tags: new FormControl<string[]>([]),
      createdBy: new FormControl<string>('System'),
      updatedBy: new FormControl<string>('System'),
    });
  }

  save() {
    if (this.form.valid && this.form.dirty) {
      this.usersService
        .createOne(this.form.value)
        .pipe(take(1))
        .subscribe((data) => {
          this.snackBar.open('User successfully created!', 'Ok', {
            horizontalPosition: 'center',
            verticalPosition: 'bottom',
          });
          this.navigateToEdit(data.id);
        });
    }
  }

  discardChanges() {
    if (this.form.dirty) {
      this.dialog
        .open(ConfirmationDialogComponent, {
          data: {
            title: 'Discard Changes',
            message: 'Are you sure you want to discard your changes?',
          } as ConfirmationDialogComponentData,
        })
        .afterClosed()
        .pipe(take(1))
        .subscribe((result: ConfirmationDialogComponentData) => {
          if (result && result.result) {
            this.navigateToList();
          }
        });
    } else {
      this.navigateToList();
    }
  }

  navigateToList() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  navigateToEdit(id: string) {
    this.router.navigate(['../', id], { relativeTo: this.route });
  }
}
