import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../../../common/entities/base.entity';

@Entity()
export class User extends BaseEntity<User> {
  @Column()
  email: string;
}
