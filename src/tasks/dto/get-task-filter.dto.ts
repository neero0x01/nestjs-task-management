import { IsOptional, IsEnum, IsString } from 'class-validator';
import { TasksStatus } from '../task.model';

export class GetTasksFilterDto {
  @IsOptional()
  @IsEnum(TasksStatus)
  status?: TasksStatus;

  @IsOptional()
  @IsString()
  search?: string;
}
