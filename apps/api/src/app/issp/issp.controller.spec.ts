import { Test, TestingModule } from '@nestjs/testing';
import { IsspController } from './issp.controller';
import { IsspService } from './issp.service';

describe('IsspController', () => {
  let controller: IsspController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [IsspController],
      providers: [IsspService],
    }).compile();

    controller = module.get<IsspController>(IsspController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
