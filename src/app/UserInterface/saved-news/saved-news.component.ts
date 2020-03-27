import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-saved-news',
  templateUrl: './saved-news.component.html',
  styleUrls: ['./saved-news.component.css']
})
export class SavedNewsComponent implements OnInit {
  object: any;
  email: string;

  displayedColumns: string[] = ['position', 'url'];

  constructor(private services: ServiceService) { }

  ngOnInit() {

    this.services.recieveUrlsForOneUser(this.email);
  }


}
