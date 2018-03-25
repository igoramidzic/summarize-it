import { Component, OnInit } from '@angular/core';
import {StatusService} from '../../services/status.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(public statusService: StatusService) { }

  ngOnInit() {
  }

}
