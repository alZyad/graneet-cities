import { HttpService } from '@nestjs/axios';
import { ForbiddenException, Injectable } from '@nestjs/common';
import { catchError, lastValueFrom, map } from 'rxjs';
import { city } from 'src/types';

const standardString = (str: string) => {
  return str
    .normalize('NFD')
    .toLowerCase()
    .replace(/[^a-z]/gi, '');
};

const filterTerm = (data: city[], term: string) =>
  data.filter((city) =>
    standardString(city.nomCommune).includes(standardString(term)),
  );

const limitCities = (data: city[]) => data.slice(0, MAXIMUM_CITIES);

const MAXIMUM_CITIES = 100;
@Injectable()
export class ApiService {
  constructor(private http: HttpService) {}

  async getCities() {
    const request = this.http
      .get(
        'https://www.data.gouv.fr/fr/datasets/r/34d4364c-22eb-4ac0-b179-7a1845ac033a',
      )
      .pipe(map((res) => res.data))
      .pipe(map(limitCities))
      .pipe(
        catchError(() => {
          throw new ForbiddenException('API not available');
        }),
      );

    const result = await lastValueFrom(request);

    return result;
  }

  async getCitiesWithTerm(term: string) {
    const request = this.http
      .get(
        'https://www.data.gouv.fr/fr/datasets/r/34d4364c-22eb-4ac0-b179-7a1845ac033a',
      )
      .pipe(map((res) => res.data))
      .pipe(map((data: city[]) => filterTerm(data, term)))
      .pipe(map(limitCities))
      .pipe(
        catchError(() => {
          throw new ForbiddenException('API not available');
        }),
      );

    const result = await lastValueFrom(request);

    return result;
  }

  async getMetropoleCitiesWithTerm(term: string) {
    const request = this.http
      .get(
        'https://www.data.gouv.fr/fr/datasets/r/34d4364c-22eb-4ac0-b179-7a1845ac033a',
      )
      .pipe(map((res) => res.data))
      .pipe(map((data: city[]) => filterTerm(data, term)))
      .pipe(
        map((matchingData: Array<city>) =>
          matchingData.filter(
            (city) =>
              city.codePostal.slice(0, 2) !== '97' &&
              city.codePostal.slice(0, 2) !== '98',
          ),
        ),
      )
      .pipe(map(limitCities))
      .pipe(
        catchError(() => {
          throw new ForbiddenException('API not available');
        }),
      );

    const result = await lastValueFrom(request);

    return result;
  }

  async getDomTomCitiesWithTerm(term: string) {
    const request = this.http
      .get(
        'https://www.data.gouv.fr/fr/datasets/r/34d4364c-22eb-4ac0-b179-7a1845ac033a',
      )
      .pipe(map((res) => res.data))
      .pipe(map((data: city[]) => filterTerm(data, term)))
      .pipe(
        map((matchingData: Array<city>) =>
          matchingData.filter(
            (city) =>
              city.codePostal.slice(0, 2) === '97' ||
              city.codePostal.slice(0, 2) === '98',
          ),
        ),
      )
      .pipe(map(limitCities))
      .pipe(
        catchError(() => {
          throw new ForbiddenException('API not available');
        }),
      );

    const result = await lastValueFrom(request);

    return result;
  }
}
