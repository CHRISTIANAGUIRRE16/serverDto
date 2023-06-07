import { IsNumber, IsOptional, IsString } from "class-validator";
import { CategoryEntity } from "src/modules/ventas/products/entities/category.model";
import { PaginationDto } from "./paginationDto";

export class FilterProductDto extends PaginationDto{

  @IsOptional()
  @IsString({message:'El campo titulo de producto es un string'})
  readonly title: string;

  @IsOptional()
  @IsNumber({ message: 'El campo codigo de producto es opcional' })
  readonly category: CategoryEntity;

}