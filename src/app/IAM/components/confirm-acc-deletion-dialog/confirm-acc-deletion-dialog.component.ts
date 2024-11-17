import {Component, EventEmitter, Output} from '@angular/core';
import {MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-confirm-acc-deletion-dialog',
  standalone: true,
  imports: [
    MatDialogModule,
    MatInputModule,
    MatButtonModule
  ],
  templateUrl: './confirm-acc-deletion-dialog.component.html',
  styleUrl: './confirm-acc-deletion-dialog.component.scss'
})
export class ConfirmAccDeletionDialogComponent {
  @Output() deleteConfirmed = new EventEmitter<void>();

  constructor(

    private dialogRef: MatDialogRef<ConfirmAccDeletionDialogComponent>
  ) { }


  deleteEvent() {
    this.deleteConfirmed.emit();
    this.dialogRef.close();
  }
}
