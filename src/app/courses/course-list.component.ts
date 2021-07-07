import { Component, OnInit } from "@angular/core";
import { Course } from "./course";

@Component({
    selector: 'app-course-list',
    templateUrl: './course-list.component.html'
})
export class CourseListComponent implements OnInit {

    //courses: Course[] = []; 
    // esse trecho acima deu erro, então usei a alternativa abaixo,
    // me baseando neste link https://living-sun.com/pt/javascript/392655-property-39hellip39-has-no-initializer-and-is-not-definitely-assigned-in-the-constructor-javascript-angular-typescript.html

    courses!: Course[];
    
    ngOnInit(): void {
        this.courses = [
            {
                id: 1,
                name: 'Angular: Forms',
                imageUrl: '',
                price: 99.99,
                code: 'XPS-8796',
                duration: 120,
                rating: 4.5,
                releaseDate: 'December, 2, 2019'
            },
            {
                id: 2,
                name: 'Angular: HTTP',
                imageUrl: '',
                price: 45.99,
                code: 'LKL-1094',
                duration: 80,
                rating: 4,
                releaseDate: 'December, 4, 2019'
            }
        ]
    }

}