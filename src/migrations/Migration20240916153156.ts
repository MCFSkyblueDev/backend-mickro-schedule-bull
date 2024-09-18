import { Migration } from '@mikro-orm/migrations';

export class Migration20240916153156 extends Migration {

  override async up(): Promise<void> {
    this.addSql(`create table "books" ("id" serial primary key, "created_at" timestamptz not null, "updated_at" timestamptz not null, "title" varchar(1000) not null, "price" real not null);`);

    this.addSql(`create table "users" ("id" serial primary key, "created_at" timestamptz not null, "updated_at" timestamptz not null, "firstname" varchar(128) not null, "lastname" varchar(128) not null);`);
  }

  override async down(): Promise<void> {
    this.addSql(`drop table if exists "books" cascade;`);

    this.addSql(`drop table if exists "users" cascade;`);
  }

}
