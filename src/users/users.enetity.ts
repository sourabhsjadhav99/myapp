import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'varchar',
  })
  username: string;


  @Column({ type: 'varchar' })
  password: string;

  @Column({ type: 'varchar' })
  role: string;
}
