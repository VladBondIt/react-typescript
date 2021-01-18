import React from 'react'

function ReactHooks() {
    /*
    // --------- useState ---------
    // Если сетСтейт принимает простое значение, то типизация не нужна.
    const [value, setValue] = useState(0);

    // Если значение комплексное или его нет при инциализации понадобится типизация
    // Число или андефайнд
    const [value, setValue] = useState<number | undefined>(undefined);
    // Массив чисел 
    const [value, setValue] = useState<Array<number>>([]);

    // Так же можно использовать интерфейс или type
    interface IUser {
        name: string;
        age?: number;
    }

    const [value, setValue] = useState<IUser>({ name: 'Yauhen' });


    // --------- useRef ---------
    // Реф1.каррент будет доступна только для чтенияй и управляемой тольок через реакт
    const ref1 = useRef<HTMLElement>(null!);

    // Реф2.каррент будет модифицируемым и предназначеным для изменяемых экземпляров упраемых нами
    const ref2 = useRef<HTMLElement | null>(null);


    // --------- useContext ---------

    // юзКонтекст чистая функция нет особого смысла её типизировать 
    interface ITheme {
        backgroundColor: string;
        color: string;
    }

    // Context creation
    const ThemeContext = createContext<ITheme>({
        backgroundColor: 'black',
        color: 'white',
    })

    // Accessing context in a child component
    const themeContext = useContext<ITheme>(ThemeContext);

    // --------- useReducer ---------


    interface State { count: number; }

    type Action = { type: 'increment' | 'decrement' }

    const counterReducer = ({ count }: State, { type }: Action) => {
        switch (type) {
            case 'increment': return { count: count + 1 };
            case 'decrement': return { count: count - 1 };
            default: return {};
        }
    };

    const [state, dispatch] = useReducer(counterReducer, { count: 0 });

    dispatch({ type: 'increment' });
    dispatch({ type: 'decrement' });


    // --------- useCallback & useMemo ---------


    // Callback
    // Inferred as number
    const memoizedCallback = useCallback(() => { sum(a, b); }, [a, b]);
    // Memo
    // Inferred as (value1: number, value2: number) => number
    const memoizedValue = useMemo((a: number, b: number) => sum(a, b), [a, b]);


    // --------- useEffect & useLayoutEffect ---------

    useEffect(() => {
        const subscriber = subscribe(options);
        return () => {
            unsubscribe(subscriber)
        };
    }, [options]);
    */
    return (
        <div>

        </div>
    )
}

export default ReactHooks



