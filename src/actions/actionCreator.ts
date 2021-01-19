import { ADD_TASK, REMOVE_TASK, COMPLETE_TASK, CHANGE_FILTER } from '../constants';
import { TaskActionTypes, FilterActionType, ITask, Filter } from '../types';

// Определяем с помощью ипортированного интерфейса ITask получаемую сущьность, в нашем случае объект,
// с заданными и жестко определенными ключами в интерфейсе ITask, так же определяем типы возвращаемого объекта
// одним из интерфесов входящих в импортируемый тип TaskActionTypes
// в нашем случае интерфейсом являет IAddTaskAction
export const addTast = (task: ITask): TaskActionTypes => ({
  type: ADD_TASK,
  payload: {
    ...task
  },
});

export const removeTask = (id: number): TaskActionTypes => ({
  type: REMOVE_TASK,
  payload: {
    id,
  },
});

export const completeTask = (id: number): TaskActionTypes => ({
  type: COMPLETE_TASK,
  payload: {
    id,
  },
});

export const changeFilter = (activeFilter: Filter): FilterActionType => ({
  type: CHANGE_FILTER,
  payload: {
    activeFilter,
  },
});
