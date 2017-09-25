import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { DbService } from '../db.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  public dinamicString: string;

  items: any = [];

  constructor(
    meta: Meta, 
    title: Title,
    private dbService: DbService
  ) { 
    title.setTitle('My Spiffy ABOUT Page');
    
    meta.addTags([
      { name: 'author',   content: 'ABOUT AUTHOR.com'},
      { name: 'keywords', content: 'angular seo, ABOUTABOUTABOUTABOUT 4 universal, etc'},
      { name: 'description', content: 'This is my AngularABOUTABOUTABOUTSEO-based App, enjoy it!' }
    ]);
  }

  ngOnInit() {
    this.dinamicString = "blia i want to see this in page source";

    this.dbService.getProducts("test", 36, 0, 'Name').subscribe(items => {
      this.items = items;
    });
  }

}
