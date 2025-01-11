import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Define the API key for authentication
    const apiKey = 'my-secure-api-key';  // Use your actual API key here

    // Clone the request and add the Authorization header
    const clonedRequest = req.clone({
      setHeaders: {
        Authorization: `Bearer ${apiKey}`,  // Add the Authorization header
        'Content-Type': 'application/json'  // Ensure the content-type is set
      }
    });

    // Pass the cloned request to the next handler
    return next.handle(clonedRequest);
  }
}
