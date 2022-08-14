import { Controller, Get } from '@nestjs/common'
import { MprService } from './mpr.service'
import { ApiTags } from '@nestjs/swagger'
import { CurrentProfile } from 'pks-common'

@ApiTags('Linux / MPR')
@Controller('linux/mpr')
export class MprController {
  constructor(private readonly mprService: MprService) {}

  @Get('/current-profile')
  async getCurrentProfile(): Promise<CurrentProfile> {
    return this.mprService.getCurrentProfile()
  }
}
