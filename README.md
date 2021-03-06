## QUEUE
- Purpose: Used to exchange data between services
- Developement
    - Uri: amqp://juwsgmda:OEJxWgj4fUDVTzipabFMnP7n5osAbdRe@caterpillar.rmq.cloudamqp.com/juwsgmda
    - Admin:
        - Url: https://ibm.co/2BMOzWl
        - Username: ed.techkidsvn@gmail.com
        - Password: Tradethecol@thanhcong2019
- Production:
    - Uri: amqp://{username}:{password}@techkids.vn:5672
    - Admin:
        - Url: http://techkids.vn:15672
- Tools: [Rabbit Queue](https://www.rabbitmq.com/queues.html)
- Drive/Library: [Rabbit Queue for NodeJS](https://www.rabbitmq.com/tutorials/tutorial-one-javascript.html)
- Sample:
    - [Nodejs typescript service](https://gitlab.com/microservice-sample/lm-service)
    - Nodejs javascript service (Comming soon...)
- Queue design:
    - Some keywords:
        - A producer is a user application that sends messages.
        - A queue is a buffer that stores messages.
        - A consumer is a user application that receives messages.
        - An exchange is a very simple thing. On one side it receives messages from producers and the other side it pushes them to queues.
    - Each <b>service</b> occupies one and only one queue, (e.g. `tk-lm-service`, `tk-hr-service`, `tk-crm`,...)
    - Each <b>resource</b> occupies one and only one exchange, (e.g. `course`, `user`, `registration`,...), has only one producer and multi consumer.
    - Related tutorial about how all that things work together: [Read](http://www.rabbitmq.com/tutorials/tutorial-three-javascript.html)
- Message format:
    - `type`: Operation type (e.g. `upsert`, `delete`)
    - `data`: The udpated `data`
- If there is problem with message in queue, the team __should treat it as very critical issuse__, thus stop whatever they are doing to fix it
