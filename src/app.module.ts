import { Module } from '@nestjs/common';
import { ProviderModule } from "@provider/provider.module";
import { ConfigModule } from "@nestjs/config";
import { JobModule } from '@job/job.module';
import { ScheduleModule } from '@schedule/schedule.module';
import { ModelModule } from '@model/model.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    ProviderModule,
    JobModule,
    ScheduleModule,
    ModelModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
