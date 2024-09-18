import { Module } from "@nestjs/common";
import { PostgresProvider } from "@provider/postgres.provider";
import { JwtProvider } from '@provider/jwt.provider';
import { BullProvider } from '@provider/bull.provider';
import { ScheduleProvider } from '@provider/schedule.provider';


@Module({
  imports: [PostgresProvider, JwtProvider, BullProvider, ScheduleProvider],
  exports: [PostgresProvider, JwtProvider, BullProvider, ScheduleProvider],
})
export class ProviderModule {
}
