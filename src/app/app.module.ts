import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { KeyResultsComponent } from './components/key-results/key-results.component';
import { OverviewComponent } from './components/overview/overview.component';
import { CommentsComponent } from './components/comments/comments.component';
import { UserComponent } from './components/user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    KeyResultsComponent,
    OverviewComponent,
    CommentsComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    NgxDatatableModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
