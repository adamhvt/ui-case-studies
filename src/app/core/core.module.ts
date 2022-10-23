import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { PageFooterComponent } from 'src/app/core/page-footer/page-footer.component';
import { PageHeaderComponent } from 'src/app/core/page-header/page-header.component';



@NgModule({
  declarations: [
    PageHeaderComponent,
    PageFooterComponent
  ],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports: [
    PageHeaderComponent,
    PageFooterComponent
  ]
})
export class CoreModule { }
