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
} from 'typeorm'; //  COMANDO A INSTALAR TYPEORM: npm i --save @nestjs/typeorm typeorm    npm install class-validator --save.
import { CategoryEntity } from './category.model';

@Entity('products', { schema: 'ventas' })
export class ProductEntity {
  @PrimaryGeneratedColumn('uuid') //codigo generico para poner el Id. unico Pk
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
  @ManyToOne(() => CategoryEntity, (category) => category.products)
  categories: CategoryEntity; // crear el category model con las columnas y las relacion oneToMany

  @Column('varchar', {
    // para crear las tablas se crear con @column y se agregan los atributos con el tipo
    name: 'codeAt',
    nullable: false, //para que el campo sea obligatorio
    comment: 'Nombre del codigo',
  })
  codeAt: string;

  @Column('varchar', {
    // para crear las tablas se crear con @column y se agregan los atributos con el tipo
    name: 'titleAt',
    nullable: false, //para que el campo sea obligatorio
    comment: 'Nombre del producto',
  })
  titleAt: string;

  @Column('integer', {
    name: 'priceAt',
    nullable: false,
    comment: 'Precio del producto',
  })
  priceAt: number;

  @Column('varchar', {
    name: 'descriptionAt',
    nullable: true,
    comment: 'descripcion del producto',
  })
  descriptionAt: string;
  @Column('varchar', {
    name: 'imagesAt',
    nullable: true,
    comment: 'imagen del producto',
  })
  imagesAt: string;
  @Column('varchar', {
    name: 'categoryAt',
    nullable: false,
    comment: 'categoria del producto',
  })
  categoryAt: string;

  /* @beforeInsert() //metodo para antes de insertar
  @beforeUpdate()
  async setMail() {
    if (!this.email) {
      return;
    } 
    this.mail = this.setMail.toLowerCase().trim;
  }*/

  @BeforeInsert() //metodo para hacer conversiones antes de insertar
  @BeforeUpdate() // metodo para antes de actualizar.
  async setCode() {
    if (!this.codeAt) {
      return;
    } else {
      return this.codeAt.toLowerCase().trim();
    } // metodo para antes de actualizar.
  }
}
  /*@BeforeInsert()
  @BeforeUpdate()
  async setPassword() {
    if (!this.password) {
      return;
    } else{
      return this.password.bcrypt().trim();
    }
  }
}*/
