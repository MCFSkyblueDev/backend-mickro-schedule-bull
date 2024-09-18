import { MikroOrmModule } from "@mikro-orm/nestjs";
import { Module } from "@nestjs/common";
import { PostgreSqlDriver } from "@mikro-orm/postgresql";
import { ConfigService } from "@nestjs/config";
import { BookEntity } from '@entity/book.entity';
import { UserEntity } from '@entity/user.entity';

@Module({
  imports: [
    MikroOrmModule.forRootAsync({
        useFactory: async (configService: ConfigService) => ({
          entities: [BookEntity, UserEntity],
          driver: PostgreSqlDriver,
          dbName: configService.getOrThrow("SQL_DATABASE"),
          host: configService.getOrThrow("SQL_HOST"),
          port: configService.getOrThrow("SQL_PORT"),
          user: configService.getOrThrow("SQL_USERNAME"),
          password: configService.getOrThrow("SQL_PASSWORD"),
          driverOptions : {
            connection : {
              ssl :{
                rejectUnauthorized : false
              }
            }
          },
          debug : true,
          allowGlobalContext : true
        }),
        inject: [ConfigService]
      }
    )
  ]
})
export class PostgresProvider {
}