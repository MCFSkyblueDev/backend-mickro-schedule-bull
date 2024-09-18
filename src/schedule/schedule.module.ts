import { Module } from '@nestjs/common';
import { BullModule } from '@nestjs/bullmq';
import { ScheduleService } from '@schedule/schedule.service';
// import { MikroOrmModule } from '@mikro-orm/nestjs';
// import { UserEntity } from '@entity/user.entity';

@Module({
  imports: [
    // MikroOrmModule.forFeature([UserEntity]),
    BullModule.registerQueue({
      name: "print-user"
    }),
  ],
  providers: [ScheduleService]
})

export class ScheduleModule {
}