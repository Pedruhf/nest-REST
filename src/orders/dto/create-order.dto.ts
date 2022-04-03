import { IsNotEmpty, IsNumber, IsPositive } from 'class-validator';

export class CreateOrderDto {
  @IsNumber(
    { maxDecimalPlaces: 2 },
    { message: 'O valor deve ser do tipo numérico' },
  )
  @IsPositive({ message: 'O valor deve ser positivo' })
  @IsNotEmpty({ message: 'O valor não pode ser vazio' })
  amount: number;
}
