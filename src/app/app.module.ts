import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { SocketIoConfig, SocketIoModule } from 'ngx-socket-io';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { AppSetting } from './appsetting';
import { ComponentsModule } from './components/components.module';
import { ErrorModule } from './error/error.module';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { DashboardLayoutModule } from './layouts/dashboard-layout/dashboard-layout.module';
import { JwtInterceptor } from './shared/helper';
import { SharedModule } from './shared/shared.module';
import { HotelComponentComponent } from './hotel-component/hotel-component.component';

const config: SocketIoConfig = {url: AppSetting.BASE_SERVER_URL, options: {}};

@NgModule({
    imports: [
        HttpClientModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        ComponentsModule,
        RouterModule,
        AppRoutingModule,
        ErrorModule,
        SharedModule,
        SocketIoModule.forRoot(config),
        DashboardLayoutModule
    ],
    declarations: [
        AppComponent,
        AdminLayoutComponent,
        HotelComponentComponent,

    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ],
    providers: [CookieService, {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true}],
    bootstrap: [AppComponent]
})
export class AppModule {
}
