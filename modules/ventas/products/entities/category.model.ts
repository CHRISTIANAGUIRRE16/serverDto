import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  Column,
  BeforeInsert,
  BeforeUpdate,
  ManyToOne,
  OneToMany,
} from 'typeorm'; 
import { ProductEntity } from './product.model';

@Entity('Categories', { schema: 'ventas' })
export class CategoryEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn({
    name: 'created_at',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP,',
  })
  createAt: Date; //nombre del atributo
  @UpdateDateColumn({
    name: 'update_at',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP,',
  })
  updateAt: Date;
  @DeleteDateColumn({
    name: 'delete_at',
    type: 'timestamp',
    nullable: true,
  })
  deleteAt: Date;

  @OneToMany(() => ProductEntity, (product) => product.categories)
  products: ProductEntity[];

  @Column('integer', {
    // para crear las tablas se crear con @column y se agregan los atributos con el tipo
    name: 'name',
    nullable: false, //para que el campo sea obligatorio
    comment: 'código categoria',
  })
  nameAt: string;

  @Column('varchar', {
    // para crear las tablas se crear con @column y se agregan los atributos con el tipo
    name: 'description',
    nullable: false, //para que el campo sea obligatorio
    comment: 'Descripción de la categoría',
  })
  descriptionAt: string;
}


//tarea miercoles 31 de mayo  revisar archivo en excel crear entidad 1 y entidad 2 con las propiedades crear en el codigo las dos entidades , con las columnas y las relaciones crear un nuevo proyecto para hacer las tareas 