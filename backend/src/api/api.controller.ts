import { Controller, Get, Param } from '@nestjs/common';
import { ApiService } from './api.service';

@Controller('api')
export class ApiController {
  constructor(private apiService: ApiService) {}

  @Get('cities')
  getCities() {
    return this.apiService.getCities();
  }

  @Get('searchCity/:cityName')
  getCitiesSearch(@Param() params: { cityName: string }) {
    return this.apiService.getCitiesWithTerm(params.cityName);
  }

  @Get('metropoleCity/:cityName')
  getMetCitiesSearch(@Param() params: { cityName: string }) {
    return this.apiService.getMetropoleCitiesWithTerm(params.cityName);
  }

  @Get('domtomCity/:cityName')
  getDomCitiesSearch(@Param() params: { cityName: string }) {
    return this.apiService.getDomTomCitiesWithTerm(params.cityName);
  }
}
