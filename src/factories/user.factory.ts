import { Factory } from '@mikro-orm/seeder';
import { UserEntity } from '@entity/user.entity';
import { faker } from '@faker-js/faker';

export class UserFactory extends Factory<UserEntity> {
  model = UserEntity;

  definition(): Partial<UserEntity> {
    const sexFlag = faker.number.int(1);
    const sex: 'male' | 'female' = sexFlag ? 'male' : 'female';
    return {
      firstname: faker.person.firstName(sex),
      lastname : faker.person.lastName(sex),
      email: faker.internet.email(),
      age: faker.number.int({min : 18, max : 99}),
      gender : !!sexFlag
    };
  }
}
