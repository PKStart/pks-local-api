import { Injectable } from '@nestjs/common'

@Injectable()
export class MprService {
  async getCurrentProfile(): Promise<string> {
    return 'currentProfile'
  }
}
