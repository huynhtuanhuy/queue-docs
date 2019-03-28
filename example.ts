// npm i tk-queue
import { RbConsumer, RbProducer } from 'tk-queue';
import UserService from './path/to/user.service';

// Producer sends message to the "registation" exchange
const rbRegistationProducer = new RbProducer('registation');
rbRegistationProducer.send('upsert', data);

// "tk-tkvn" queue listen to "user" exchange
const rbUserConsumer = new RbConsumer(
  "tk-tkvn", 
  "user",
  (data) => new Promise((resolve, reject) => {
    console.log("update User");
    let user = UserService.byId(data._id)
    delete data.role;
    UserService.update(data._id, data);
    console.log("Done");
  }),
  (_id) => new Promise((resolve, reject) => {
    console.log("Delete User");
    UserService.delete(_id);
    console.log("Done");
  })
);
rbUserConsumer.listen();