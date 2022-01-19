import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { AppService } from './app.service';
import mentor from './_files/mentor.json'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'angular-material-2';

  dataSource = new MatTableDataSource([]);
  displayedColumns = ["id", "name", "usertype", "email", "status"];
  status = ['active', 'pending'];

  constructor(
    private appService:AppService
  ){}

  ngOnInit(): void {
    this.appService.getJSON().subscribe(mentor => this.dataSource.data = mentor);
    
  }

  searchMentor(search= ''){
    this.dataSource.filter = search.toLocaleLowerCase().trim();
  }
  searchStatus(data = ''){
    this.dataSource.filter = data.toLocaleLowerCase().trim();
  }
}
