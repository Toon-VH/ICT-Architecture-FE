import {Injectable} from '@angular/core';
import {Observable, Observer, of, Subject} from 'rxjs';
import File from 'src/app/interfaces/File';

@Injectable({
  providedIn: 'root'
})
export class FileService {
  private files:Subject<File[] | null> = new Subject<File[] | null>();
  setFiles(files:File[] | null){
    this.files.next(files);
  }
  getFiles(): Observable<File[] | null> {
    return this.files.asObservable();
  }
  constructor() { }
}
