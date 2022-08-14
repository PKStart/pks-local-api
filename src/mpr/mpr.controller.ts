import { Controller, Get } from '@nestjs/common'
import { MprService } from './mpr.service'
import { ApiTags } from '@nestjs/swagger'

@ApiTags('Linux / MPR')
@Controller('linux/mpr')
export class MprController {
  constructor(private readonly mprService: MprService) {}

  @Get('/current-profile')
  async getCurrentProfile(): Promise<string> {
    return this.mprService.getCurrentProfile()
  }
}
