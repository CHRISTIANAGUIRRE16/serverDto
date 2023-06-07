import { Allow, IsNotEmpty, IsNumber, IsPositive, IsString } from "class-validator";
import { CategoryEntity } from "src/modules/ventas/products/entities/category.model";

@Exclude()
export class BaseProductDto {
  @IsString()
  @IsNotEmpty(isNotEmptyValidationOptions())
  readonly title;

  @IsNumber()
  @IsNotEmpty()
  @IsPositive()
  readonly price;

  @IsString()
  @IsNotEmpty()
  readonly description;

  @IsString()
  readonly image;

  @IsString()
  @IsNotEmpty()
  readonly category:CategoryEntity;


}


