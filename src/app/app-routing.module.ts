import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FilePageComponent} from "./pages/file-page/file-page.component";

const routes: Routes = [{ path: '', component: FilePageComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
