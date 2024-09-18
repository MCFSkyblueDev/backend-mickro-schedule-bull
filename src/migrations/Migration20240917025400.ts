import { Migration } from '@mikro-orm/migrations';

export class Migration20240917025400 extends Migration {

  override async up(): Promise<void> {
    this.addSql(`alter table "users" add column "gender" boolean not null, add column "age" smallint not null, add column "email" text not null;`);
  }

  override async down(): Promise<void> {
    this.addSql(`alter table "users" drop column "gender", drop column "age", drop column "email";`);
  }

}
