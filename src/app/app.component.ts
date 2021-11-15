import { Component, ViewChild } from '@angular/core';
import { Credentials } from './interfaces/Credentials';
import { FileService } from './services/file.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  credentials: null | Credentials = null;
  //credentials: null | Credentials = { username: 'TVH', password: 'Test1254' }; // WARN: Auth disabled
  title = 'ICT-Architecture-FE';
  loginFailedMessage: string | null = null;

  constructor(private fileService: FileService) {}
  login(credentials: Credentials) {
    const requestOptions: RequestInit = {
      method: 'GET',
      redirect: 'follow',
    };
    fetch(
      `http://127.0.0.1:8081/files?Username=${credentials.username}&Password=${credentials.password}`,
      requestOptions
    )
      .then((response) => {
        if (response.status.toString().startsWith('2')) {
          console.log('Login Successful!');
          this.credentials = credentials;
          response.text().then((res) => {
            this.fileService.setFiles(JSON.parse(res));
          });
        } else {
          response.text().then((res) => {
            this.loginFailedMessage = res;
          });
        }
      })
      .catch((error) => {
        this.loginFailedMessage = 'Failed to fetch!';
        console.log('error', error);
      });
  }
}
