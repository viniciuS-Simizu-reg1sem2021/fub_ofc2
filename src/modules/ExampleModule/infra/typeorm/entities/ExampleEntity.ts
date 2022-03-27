import IExampleDTO from "../../../dtos/IExampleDTO";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("tb_example")
export default class ExampleEntity implements IExampleDTO {
  @PrimaryGeneratedColumn({ name: "id" })
  id: number;

  @Column({ name: "curso" })
  curso: string;

  @Column({ name: "name" })
  nome: string;
}
