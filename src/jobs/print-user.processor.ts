import { Processor, WorkerHost } from '@nestjs/bullmq';
import { Job } from "bullmq";
import { Logger } from '@nestjs/common';
import { UserEntity } from '@entity/user.entity';


@Processor("print-user", {concurrency: 5})
export class PrintUserProcessor extends WorkerHost{
  constructor() {
    super();
  }

  private readonly logger = new Logger(PrintUserProcessor.name);
  async process(job: Job, _token: string | undefined): Promise<any> {
    switch (job.name) {
      case "user":
        const user : UserEntity  = (job.data as any).user;
        this.logger.log(user.lastname+" "+user.firstname);
        await this.simulateDoWork();
        break;
      default:
        throw new Error("No job name match");
    }
    return;
  }

  async simulateDoWork() {
    return await new Promise<void>((resolve) =>
      setTimeout(() => resolve(), 3),
    );
  }

}
