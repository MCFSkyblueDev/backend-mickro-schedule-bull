import { Seeder } from '@mikro-orm/seeder';
import { Dictionary, EntityManager } from '@mikro-orm/postgresql';
import { UserFactory } from '@factory/user.factory';
import { UserEntity } from '@entity/user.entity';

export class UserSeeder extends Seeder {
  async run(em: EntityManager, _context: Dictionary): Promise<void> {
    // save the entity to the context
    const authors: UserEntity[] = new UserFactory(em).make(100);
    await em.persistAndFlush(authors);
  }
}