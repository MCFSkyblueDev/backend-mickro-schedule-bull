import { Module } from '@nestjs/common';
import { PrintUserProcessor } from '@job/print-user.processor';


@Module({
  imports: [],
  providers: [
    PrintUserProcessor
  ]
})
export class JobModule {
}