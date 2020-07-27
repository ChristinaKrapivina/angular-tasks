import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';

export class ConsoleInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler) {
    console.log('Console interceptor works');
    return next.handle(request);
  }
}