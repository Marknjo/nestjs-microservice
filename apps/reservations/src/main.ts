import { NestFactory } from '@nestjs/core';
import { ReservationsModule } from './reservations.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    ReservationsModule,
    {
      transport: Transport.TCP,
    },
  );

  await app.listen();
}
bootstrap();
