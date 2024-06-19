import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('films')
export class Film {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  password: string;
}
