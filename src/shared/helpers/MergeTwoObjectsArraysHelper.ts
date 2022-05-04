import { injectable } from 'tsyringe';

@injectable()
export class MergeTwoObjectsArraysHelper {
  public async execute(array1: any[], array2: any[], key: (x: any) => any) {
    const array = [...array1, ...array2];

    return [
      ...new Map(array.map((element) => [key(element), element])).values(),
    ];
  }
}
