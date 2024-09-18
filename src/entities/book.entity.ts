import { Entity, Property } from '@mikro-orm/core';
import { BaseEntity } from "@entity/base.entity";

@Entity({tableName : "books"})
export class BookEntity extends BaseEntity {

  @Property({type : "varchar", length : 1000})
  title: string;

  @Property({type : "float4"})
  price: number;

  // @Property({ nullable: true })
  // metaObject?: object;
  //
  // @Property({ nullable: true })
  // metaArray?: any[];
  //
  // @Property({ nullable: true })
  // metaArrayOfStrings?: string[];

  constructor(partial : Partial<BookEntity>) {
    super();
    Object.assign(this, partial);
  }

}