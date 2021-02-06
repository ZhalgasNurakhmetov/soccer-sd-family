import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragAndDropFileUploadDirective } from './drag-and-drop-file-upload.directive';



@NgModule({
  declarations: [DragAndDropFileUploadDirective],
  imports: [
    CommonModule
  ],
  exports: [DragAndDropFileUploadDirective]
})
export class DragAndDropFileUploadModule { }
