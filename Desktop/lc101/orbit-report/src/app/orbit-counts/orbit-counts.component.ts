import { Component, OnInit, Input } from '@angular/core';
import { Satellite } from '../satellite'

@Component({
    selector: 'app-orbit-counts',
    templateUrl: './orbit-counts.component.html',
    styleUrls: ['./orbit-counts.component.css']
})
export class OrbitCountsComponent implements OnInit {

    @Input() satellites: Satellite[];
    constructor() { }

    ngOnInit() {
    }
    // count(satellites: []) {
    //   let result = 0;
    //   for( let i = 0; i < satellites.length; i ++) {
    //     if(satellites[i].type ) {
    //       result += 1;
    //     }
    //   }
    // }
}
