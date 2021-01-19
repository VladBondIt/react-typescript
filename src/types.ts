import { ADD_TASK, REMOVE_TASK, COMPLETE_TASK, CHANGE_FILTER } from './constants';

// Store
export type Filter = string;

export interface ITask {
    id: number,
    text: string,
    isCompleted: boolean,
}

// Actions
interface IAddTaskAction {
    // typeof в ЖС и в ТС работают по разному, в ТС жестко опредеяет значение которое можит быть в ключе type
    // в нашем случае это константа ADD_TASK в любом другом случае будет ошибка
    type: typeof ADD_TASK,
    // Жестко определяем тип пейлода созданным интерфейсом, и какие поля он может содержать
    payload: ITask,
}

interface IRemoveTaskAction {
    type: typeof REMOVE_TASK,
    payload: {
        id: number,
    }
}

interface ICompleteTaskAction {
    type: typeof COMPLETE_TASK,
    payload: {
        id: number,
    }
}

interface IChangeFilterAction {
    type: typeof CHANGE_FILTER,
    payload: {
        activeFilter: Filter,
    }
}

// Экспортируем созданные типы, разбиваем на задачи и фильтрацию
export type TaskActionTypes = IAddTaskAction | IRemoveTaskAction | ICompleteTaskAction;
export type FilterActionType = IChangeFilterAction;