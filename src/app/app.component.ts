import { Component } from '@angular/core';
import { Observable, from } from 'rxjs';
import { BASE_URL } from 'src/services/api';
import { AllCharactersResponse, Info, Result } from 'src/types/characters';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  dataInfo = {} as Info;
  dataResults = [] as Result[];

  fetchAllCharacters(
    page = 1,
    name = ''
  ): Observable<AllCharactersResponse> {
    return from(
      fetch(
        `${BASE_URL}/character?page=${page}${name && `&name=${name}`}`
      ).then((response) => response.json())
    );
  }

  goSelectedPage(page: number): void {
    this.fetchAllCharacters(page).subscribe((data) => {
      this.dataResults = data.results;
    });
  }

  handleSearch(name: string): void {
    this.fetchAllCharacters(1, name).subscribe((data) => {
      this.dataInfo = data.info;
      this.dataResults = data.results;
    });
  }

  ngOnInit(): void {
    this.fetchAllCharacters().subscribe((data) => {
      this.dataInfo = data.info;
      this.dataResults = data.results;
    });
  }
}
