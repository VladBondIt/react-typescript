// import React from 'react';
// import BigForm from './components/BigForm';
// import MyComponent from './components/Portal';
// import Context from './components/Portal';
// import WithToggle from './components/HOC';
// // import Counter from './components/Counter';
// // import Form from './components/Form';

// // Отличия от обычных функций, Реакт FC обеспечивают проверку типов и
// // автозаполнения для статических свойст дисплей нейм, проп тайпс и дефолт пропс(есть проблемы с использованием).
// // Так же Реакт FC предоставляют не явное определение потомков
// // const Title: React.FC<{ title: string }> = ({ title, children }) => <h1>{title}{children}</h1>
// // const Title: React.FC<{ title: string }> = ({ title }) => <h1>{title}</h1>

// // type TitleProps = {
// //     title: string,
// // Если указать еще 1 параметр и не передать его в качестве пропса, то тоже будет ошибка на дев этапе,
// // знак ? указывает не обязательность параметра.
// //     test?: string
// // }

// // Указываем пропс по умолчанию
// // const Title = ({ title, test = 'test2' }: TitleProps) => <h1>{title}</h1>

// // Явная ошибка из за указания пропсов с помощью типа
// // const App = () => <Title  />
// // const App = () => <Title title="Test" />
// // const App = () => <Counter title="Counter: " />
// // const App = () => <Form />
// // const App: React.FC = () => <WithToggle primTitle="Main Title" secTitle="Additional Title" />
// const App: React.FC = () => <Context />

// export default App;


import React from 'react';

import Header from './components/header/header';
import Footer from './components/footer/footer';

const App: React.FC = ({ children }) => (
    <>
        <Header />
        {children}
        <Footer />
    </>
);

export default App;
