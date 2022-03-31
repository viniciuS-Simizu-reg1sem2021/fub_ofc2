import IDefaultRatingDTO from "../../../dtos/IDefaultRatingDTO";
import { Column, PrimaryGeneratedColumn } from "typeorm";

export default class DefaultRatingEntity implements IDefaultRatingDTO {
  @PrimaryGeneratedColumn({ name: "id_default_rating" })
  id?: number;

  @Column({ name: "default_rating" })
  defaultRating: string;
}
