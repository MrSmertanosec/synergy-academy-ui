import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {AllstudentsComponent} from "./allstudents/allstudents.component";
import {TestComponent} from "./test/test.component";
import {PagenotfoundComponent} from "./pagenotfound/pagenotfound.component";
import {AllcoursesComponent} from "./allcourses/allcourses.component";
import {StudentProfileComponent} from "./student-profile/student-profile.component";
import {CourseTabComponent} from "./course-tab/course-tab.component";
import {CoursesProfileComponent} from "./courses-profile/courses-profile.component";
import {ExamsComponent} from "./exams/exams.component";
import {EducationProcessComponent} from "./education-process/education-process.component";
import {ExamProfileComponent} from "./exam-profile/exam-profile.component";
import {ExamTabsComponent} from "./exam-tabs/exam-tabs.component";
import {CourseStudentsComponent} from "./course-students/course-students.component";
import {AnalyticsPage1Component} from "./analytics-page1/analytics-page1.component";
import {RegistrationFormComponent} from "./registration-form/registration-form.component";
import {EducationprocessProfileComponent} from "./educationprocess-profile/educationprocess-profile.component";
import {EducationprocessTabsComponent} from "./educationprocess-tabs/educationprocess-tabs.component";

const routes: Routes = [
    {path: 'students', component: AllstudentsComponent},
    {path: 'courses', component: AllcoursesComponent},
    {path: 'test', component: TestComponent},
    {path: 'students/:id', component: StudentProfileComponent},
    {path: 'students/addStudent', component: StudentProfileComponent},
    {path: 'courses/:courseid', component: CourseTabComponent},

    {path: 'courses/:courseid/info', component: CoursesProfileComponent},
    {path: 'courses/:courseid/students', component: CourseStudentsComponent},
    {path: 'courses/:courseid/exams', component: ExamsComponent},
    {path: 'courses/:courseid/exams/addExam', component: ExamProfileComponent},
    {path: 'exams/:examid', component: ExamTabsComponent},
    {path: 'courses/:courseid/educationProcess', component: EducationProcessComponent},
    {path: 'educationprocess/:educationProcessid', component: EducationprocessTabsComponent},
    {path: 'courses/addCourse', component: TestComponent},
    {path: 'analytics', component: AnalyticsPage1Component},
    //courses/1294/info/
    {path: 'courses/:courseid/registrationform', component: RegistrationFormComponent},
    {path: '**', component: PagenotfoundComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{

}
