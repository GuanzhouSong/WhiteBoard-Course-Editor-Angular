import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from "@angular/forms";

import {AppComponent} from './app.component';
import {HelloWorldComponent} from './hello-world/hello-world.component';

import {CourseNavigatorServiceClient} from "./services/course-navigator.service.client";
import {CourseNavigatorComponent} from './course-navigator/course-navigator.component';
import {WhiteBoardComponent} from './white-board/white-board.component';
import {CourseGridComponent} from './course-grid/course-grid.component';
import {CourseServiceClient} from "./services/course.service.client";
import {routing} from "./app.routing";
import {CourseViewerComponent} from './course-viewer/course-viewer.component';
import {ModuleListComponent} from './module-list/module-list.component';
import {ModuleServiceClient} from "./services/module.service.client";
import {LessonTabsComponent} from './lesson-tabs/lesson-tabs.component';
import {LessonServiceClient} from "./services/lesson.service.client";
import {TopicTabsComponent} from './topic-tabs/topic-tabs.component';
import {TopicServiceClient} from "./services/topic.service.client";
import {WidgetListComponent} from './widget-list/widget-list.component';
import {WidgetServiceClient} from "./services/widget.service.client";
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {ProfileComponent} from './profile/profile.component';
import {UserServiceClient} from "./services/user.service.client";
import {SectionListComponent} from './section-list/section-list.component';
import {SectionServiceClient} from "./services/section.service.client";
import {WhiteBoardNavComponent} from './white-board-nav/white-board-nav.component';
import {AdminConsoleComponent} from './admin-console/admin-console.component';
import {AdminCourseGridComponent} from './admin-console/admin-course-grid/admin-course-grid.component';
import {SweetAlert2Module} from '@toverux/ngx-sweetalert2';
import { FormListComponent } from './form-list/form-list.component';
import {FormWidgetServiceClient} from "./services/formWidget.service.client";
import { FormViewerComponent } from './form-viewer/form-viewer.component';


@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    CourseNavigatorComponent,
    WhiteBoardComponent,
    CourseGridComponent,
    CourseViewerComponent,
    ModuleListComponent,
    LessonTabsComponent,
    WidgetListComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    SectionListComponent,
    WhiteBoardNavComponent,
    AdminConsoleComponent,
    AdminCourseGridComponent,
    TopicTabsComponent,
    FormListComponent,
    FormViewerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    SweetAlert2Module.forRoot()
  ],
  providers: [
    CourseNavigatorServiceClient,
    CourseServiceClient,
    ModuleServiceClient,
    LessonServiceClient,
    TopicServiceClient,
    WidgetServiceClient,
    UserServiceClient,
    SectionServiceClient,
    FormWidgetServiceClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
