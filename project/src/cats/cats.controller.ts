import { SuccessInterceptor } from './../common/interceptors/success.interceptor';
import { HttpExceptionFilter } from '../common/exceptions/http-exception.filter';
import { CatsService } from './cats.service';
import { Controller, Delete, Get, HttpException, Param, ParseIntPipe, Patch, Post, Put, UseFilters, UseInterceptors } from '@nestjs/common';

@Controller('cats')
@UseInterceptors(SuccessInterceptor)
@UseFilters(HttpExceptionFilter)
export class CatsController {
    constructor (private readonly catsService : CatsService) {}

    // cats/
    @Get()
    getAllCat() {
        console.log("hello controller");
        return { cats: 'get all cat api' };
    }

    // cats/:id
    @Get(':id')
    getOneCat(@Param('id', ParseIntPipe) param: number) {
        console.log(typeof param);
        return 'one cat';
    }

    @Post()
    createCat() {
        return 'create cat';
    }

    @Put(':id')
    updateCat() {
        return 'update cat';
    }

    @Patch(':id')
    updatePartialCat() {
        return 'update partial cat';
    }

    @Delete(':id')
    deleteCat() {
        return 'delete cat';
    }
}
