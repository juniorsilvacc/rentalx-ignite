import { Column, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";

@Entity()
class Rental {
  @PrimaryColumn()
  id: string;

  car_id: string;

  user_id: string;

  @Column()
  start_date: Date;

  @Column()
  end_data: Date;

  @Column()
  expected_return_date: Date;

  @Column()
  total: number;

  @Column()
  created_at: Date;

  @Column()
  updated_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Rental };
