import {Injectable, TemplateRef} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToasterService {

  toasts: any[] = [];

  showSuccess(textOrTpl: string | TemplateRef<any>) {
    const options = { classname: 'bg-success text-light', delay: 10000 }
    this.toasts.push({ textOrTpl, ...options });
  }

  showError(textOrTpl: string | TemplateRef<any>) {
    const options = { classname: 'bg-danger text-light', delay: 10000 }
    this.toasts.push({ textOrTpl, ...options });
  }

  remove(toast) {
    this.toasts = this.toasts.filter(t => t !== toast);
  }
}
