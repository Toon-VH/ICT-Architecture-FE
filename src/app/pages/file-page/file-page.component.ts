import { Component, Input, OnInit } from '@angular/core';
import File from 'src/app/interfaces/File';
import {FileService} from "../../services/file.service";

@Component({
  selector: 'app-file-page',
  templateUrl: './file-page.component.html',
  styleUrls: ['./file-page.component.scss']
})
export class FilePageComponent implements OnInit {
  files: File[] | null = null;
  displayedColumns: string[] = ['Id', 'Name', 'UUID'];
  constructor(private fileService:FileService) {
    fileService.getFiles().subscribe(files => {
      this.files = files;
      console.log("Got files:", this.files)
    })
  }

  ngOnInit(): void {
  }

}
