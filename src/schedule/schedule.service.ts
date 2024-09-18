import { Injectable, Logger } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { EntityManager } from '@mikro-orm/postgresql';
import { UserEntity } from '@entity/user.entity';
import { InjectQueue } from '@nestjs/bullmq';
import { Queue } from 'bull';

// import { InjectRepository } from '@mikro-orm/nestjs';


@Injectable()
export class ScheduleService {
  constructor(
    private readonly em: EntityManager,
    // @InjectRepository(UserEntity)
    // private readonly userRepository: EntityRepository<UserEntity>,
    @InjectQueue('print-user')
    private readonly userQueue: Queue,
  ) {
  }

  private readonly logger = new Logger(ScheduleService.name);

  @Cron('*/30 * * * * *', { timeZone: 'Etc/UTC' }) //? GMT+00, run a job at 0:00:00
  async printUser() {
    const users: UserEntity[] = await this.em.findAll(UserEntity, {
      limit: 20,
    });
    for (let i = 0; i < users.length; i++) {
      await this.userQueue.add('user', {
        user: users[i],
      });
    }
  }

  // @Cron('2 * * * * *', { timeZone: 'Etc/UTC' })
  // async print() {
  //   this.logger.log(1111);
  // }
}

