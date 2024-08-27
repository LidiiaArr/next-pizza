import {Container, Filters, Title, TopBar} from "@/components/shared";
import {ProductCard} from "@/components/shared/product-card";

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
                            <ProductCard id={0} name={'Пеперонька'} price={550}
                                         imageUrl={'https://s1.eda.ru/StaticContent/Photos/120131085624/171213000301/p_O.jpg'}
                                         ingredients={[]}/>
                        </div>
                    </div>
                </div>
            </Container>
            <div className={'h-[1500px]'}></div>
        </>
    );
}
