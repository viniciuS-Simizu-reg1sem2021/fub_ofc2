import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import IExampleDTO from "../../../dtos/IExampleDTO";

@Entity({ name: "tb_example" })
export default class ExampleEntity implements IExampleDTO {
  @PrimaryGeneratedColumn({ name: "id" })
  id: number;

  @Column({ name: "curso" })
  curso: string;

  @Column({ name: "name" })
  nome: string;
}
