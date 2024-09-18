import { Entity, Property } from '@mikro-orm/core';
import { BaseEntity } from "@entity/base.entity";

@Entity({tableName : "users"})
export class UserEntity extends BaseEntity {

  @Property({type : "varchar", length : 128})
  firstname: string;

  @Property({type : "varchar", length : 128})
  lastname: string;

  @Property({type : "boolean"})
  gender: boolean;

  @Property({type : "smallint"})
  age: number;

  @Property({type : "text"})
  email: string;

  constructor(partial : Partial<UserEntity>) {
    super();
    Object.assign(this, partial);
  }
}