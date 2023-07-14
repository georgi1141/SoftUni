import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-current-theme',
  templateUrl: './current-theme.component.html',
  styleUrls: ['./current-theme.component.css']
})
export class CurrentThemeComponent implements OnInit{

  currentTheme :any

  constructor(private apiService: ApiService,private activeRoute: ActivatedRoute){}

  ngOnInit(): void {
    this.getCurrentTheme()
  }

  getCurrentTheme (){
    const postId = this.activeRoute.snapshot.params['themeId']

    this.apiService.getCurrentTheme(postId).subscribe(theme=> {
      this.currentTheme = theme
      console.log(theme)

    })
  }

}
