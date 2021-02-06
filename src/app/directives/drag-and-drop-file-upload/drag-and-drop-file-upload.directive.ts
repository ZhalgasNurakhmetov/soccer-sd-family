import {Directive, Output, EventEmitter, HostListener} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

@Directive({
  selector: '[appDragAndDropFileUpload]'
})
export class DragAndDropFileUploadDirective {
  @Output() onFileUploaded = new EventEmitter<File>();

  constructor(private sanitizer: DomSanitizer) {}

  @HostListener('dragover', ['$event']) onDragOver(event) {
    event.preventDefault();
    event.stopPropagation();
  }

  @HostListener('dragleave', ['$event']) public onDragLeave(event) {
    event.preventDefault();
    event.stopPropagation();
  }

  @HostListener('drop', ['$event']) public onDrop(event) {
    event.preventDefault();
    event.stopPropagation();
    const file = event.dataTransfer.files[0];
    if (file) {
      // const url = this.sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(file));
      this.onFileUploaded.emit(file);
    }
  }

}
