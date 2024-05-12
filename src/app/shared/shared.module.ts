import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SkeletonComponent } from "./components/skeleton/skeleton.component";
import { SpinnerComponent } from "./components/spinner/spinner.component";


@NgModule({
     declarations: [
          SkeletonComponent,
          SpinnerComponent
     ],
     imports: [
          CommonModule,
          FormsModule,
          ReactiveFormsModule
     ],
     exports:[
          SkeletonComponent,
          SpinnerComponent
     ],
     schemas:[CUSTOM_ELEMENTS_SCHEMA]
})

export class SharedModule {}
