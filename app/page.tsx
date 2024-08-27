import {Container, Filters, Title, TopBar} from "@/components/shared";
import {ProductsGroupList} from "@/components/shared/products-group-list";

export default function Home() {
    return (
        <>
            <Container className='mt-10'>
                <Title text='Все пиццы' size='lg' className='font-extrabold'/>
            </Container>
            <TopBar/>
            <Container className='mt-10 pb-14'>
                <div className='flex gap-[60px]'>
                    {/*Фильтрация - левая часть*/}
                    <div className='w-[250px]'>
                        <Filters/>
                    </div>

                    {/*Список пиц - правая часть*/}
                    <div className='flex-1'>
                        <div className='flex flex-col gap-16'>
                            <ProductsGroupList title={'Пиццы'} items={[
                                {
                                    id: 1,
                                    name: 'Чизбургер пицца',
                                    imageUrl: 'https://s1.eda.ru/StaticContent/Photos/120131085624/171213000301/p_O.jpg',
                                    items: [{price: 550}]
                                },
                                {
                                    id: 2,
                                    name: 'Чизбургер пицца',
                                    imageUrl: 'https://s1.eda.ru/StaticContent/Photos/120131085624/171213000301/p_O.jpg',
                                    items: [{price: 550}]
                                },
                                {
                                    id: 3,
                                    name: 'Чизбургер пицца',
                                    imageUrl: 'https://s1.eda.ru/StaticContent/Photos/120131085624/171213000301/p_O.jpg',
                                    items: [{price: 550}]
                                },
                                {
                                    id: 4,
                                    name: 'Чизбургер пицца',
                                    imageUrl: 'https://s1.eda.ru/StaticContent/Photos/120131085624/171213000301/p_O.jpg',
                                    items: [{price: 550}]
                                }

                            ]}
                                               categoryId={1}/>
                            <ProductsGroupList title={'Комбо'} items={[
                                {
                                    id: 1,
                                    name: 'Чизбургер пицца',
                                    imageUrl: 'https://s1.eda.ru/StaticContent/Photos/120131085624/171213000301/p_O.jpg',
                                    items: [{price: 550}]
                                },
                                {
                                    id: 2,
                                    name: 'Чизбургер пицца',
                                    imageUrl: 'https://s1.eda.ru/StaticContent/Photos/120131085624/171213000301/p_O.jpg',
                                    items: [{price: 550}]
                                },
                                {
                                    id: 3,
                                    name: 'Чизбургер пицца',
                                    imageUrl: 'https://s1.eda.ru/StaticContent/Photos/120131085624/171213000301/p_O.jpg',
                                    items: [{price: 550}]
                                },
                                {
                                    id: 4,
                                    name: 'Чизбургер пицца',
                                    imageUrl: 'https://s1.eda.ru/StaticContent/Photos/120131085624/171213000301/p_O.jpg',
                                    items: [{price: 550}]
                                }

                            ]} categoryId={2}/>
                        </div>
                    </div>
                </div>
            </Container>
            <div className={'h-[1500px]'}></div>
        </>
    );
}
