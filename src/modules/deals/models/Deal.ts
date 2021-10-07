import { v4 as uuidV4 } from 'uuid';

class Deal {

  id?: string;

  name: string;
  email: string;

  title: string;

  value: string;

  add_time: Date;

  status: string;
  
  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Deal };
