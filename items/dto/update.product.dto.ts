import { PartialType } from '@nestjs/swagger';
import { BaseProductDto } from './base.product.dto';


export class UpdateItemDto extends PartialType(BaseProductDto) {}
