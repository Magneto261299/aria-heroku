export class RegExps {
  readonly start: RegExp;
  readonly zip: RegExp;
  readonly darpan: RegExp;
  readonly sthiti: RegExp;
  readonly suchi: RegExp;
  readonly folder: RegExp;
  readonly kill: RegExp;
  readonly killall: RegExp;
  readonly disk: RegExp;

  constructor(commands: string[]) {
    this.start = new RegExp(commands[0], 'i');
    this.zip = new RegExp(commands[1], 'i');
    this.darpan = new RegExp(commands[2], 'i');
    this.sthiti = new RegExp(commands[3], 'i');
    this.suchi = new RegExp(commands[4], 'i');
    this.folder = new RegExp(commands[5], 'i');
    this.kill = new RegExp(commands[6], 'i');
    this.killall = new RegExp(commands[7], 'i');
    this.disk = new RegExp(commands[8], 'i');
  }
}
