import { Injectable } from '@nestjs/common'
import { execSync } from 'child_process'
import { readFileSync } from 'fs'
import { homedir } from 'os'
import { resolve } from 'path'
import { CurrentProfile, MprConfig } from 'pks-common'

@Injectable()
export class MprService {
  async getCurrentProfile(): Promise<CurrentProfile> {
    const profiles = (
      JSON.parse(
        readFileSync(resolve(homedir(), process.env.PK_MPR_CONFIG_FILE)).toString()
      ) as MprConfig
    ).profiles
    const activeProfile = Number(
      readFileSync(resolve(homedir(), process.env.PK_MPR_G502_ACTIVE_PROFILE_FILE))
        .toString()
        .trim()
    )
    const gameProfile = readFileSync(resolve(homedir(), process.env.PK_MPR_G502_GAME_PROFILE_FILE))
      .toString()
      .trim()

    const output = execSync(`/bin/bash ${resolve(homedir(), process.env.PK_MPR_FOLDER, 'mpr.sh')}`)
    console.log(output.toString().trim() || 'no output')

    return {
      activeProfile,
      configuredGame: profiles.find(({ name }) => name === gameProfile),
    }
  }
}
