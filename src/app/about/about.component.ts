import { Component, OnInit } from '@angular/core';
import { HttpClient } from  '@angular/common/http';
import { Injectable } from  '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})

@Injectable({
  providedIn:  'root',
})
export class AboutComponent implements OnInit {
  summaryTitle = 'Summary';
  summaryParagraph = '';
  missionTitle = 'Mission Statement';
  missionParagraph = '';
  careerTitle = 'The Team';
  careerParagraph = '';
  investorTitle = 'Our Partners';
  investorParagraph = '';
  
  getParagraphsFromFileAssets() {
    this.http.get('assets/summaryParagraph.txt', { responseType: 'text' }).subscribe(data => this.summaryParagraph = data);
  
    this.http.get('/assets/missionParagraph.txt', { responseType: 'text' }).subscribe(data => this.missionParagraph = data);
  
    this.http.get('/assets/careerParagraph.txt', { responseType: 'text' }).subscribe(data => this.careerParagraph = data);
  
    this.http.get('assets/investorParagraph.txt', { responseType: 'text' }).subscribe(data => this.investorParagraph = data);
  }
  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.getParagraphsFromFileAssets()
  }

}
