import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Theme } from '../types/theme';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-themes-list',
  templateUrl: './themes-list.component.html',
  styleUrls: ['./themes-list.component.css']
})
export class ThemesListComponent implements OnInit{

  themeList:Theme[] = []

  constructor(private apiService: ApiService,private userService: UserService){

  }

  isLoggedIn:boolean = this.userService.isLogged
  

  ngOnInit(): void {
     this.apiService.getThemes().subscribe(themes=>{
      this.themeList = themes
     })
    
  }

}
