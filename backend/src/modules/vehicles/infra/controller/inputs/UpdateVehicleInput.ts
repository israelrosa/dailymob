import { Field, InputType } from 'type-graphql';

@InputType()
export default class UpdateVehicleInput {
  @Field()
  id: string;

  @Field()
  name: string;

  @Field()
  description: string;

  @Field({ nullable: true })
  photo: string;

  @Field()
  diary_value: number;

  @Field()
  weekly_value: number;

  @Field()
  monthly_value: number;

  @Field()
  category_id: string;

  @Field()
  brand_id: string;

  @Field()
  model_id: string;
}
