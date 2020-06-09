import { ApiProperty } from '@nestjs/swagger';

export class JournalEntry {
  @ApiProperty({ example: 'This is a title', description: 'The title of journal' })
  title: string;

  @ApiProperty({ example: 'This is a body', description: 'The body of journal' })
  body: string;

  @ApiProperty({ example: '2020-06-09T01:57:14.906Z', description: 'The timestamp of journal' })
  timestamp?: Date;
}