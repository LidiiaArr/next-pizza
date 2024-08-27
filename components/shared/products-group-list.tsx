'use client'
import {ProductCard} from "@/components/shared/product-card";
import {Title} from "@/components/shared/title";
import {cn} from "@/lib/utils";
import {useIntersection} from "react-use";
import React from "react";
import {useCategoryStore} from "@/store/category";

interface Props {
    title: string;
    items: any;
    categoryId: number;
    className?: string;
    listClassName?: string;
}

export const ProductsGroupList: React.FC<Props> = ({title, items, className, categoryId, listClassName}) => {
    const setActiveCategoryId = useCategoryStore((state) => state.setActiveId);
    //
    const intersectionRef = React.useRef(null);
    // создаем Реф, который будет хранить ссылку на элемент DOM, к которому мы применим наблюдателя.
    const intersection = useIntersection(intersectionRef, {
        threshold: 0.4,
    });
    React.useEffect(() => {
        if (intersection?.isIntersecting) {
            setActiveCategoryId(categoryId);
        }
    }, [categoryId, intersection?.isIntersecting, title]);
    // В `useEffect` происходит проверка `intersection?.isIntersecting`, что позволяет выполнять логические действия
    // когда элемент становится видимым (пересекается с вьюпортом) на 40% (как указано в `threshold`).


    return (
        <div className={className} ref={intersectionRef} id={title}>
            <Title text={title} size="lg" className="font-extrabold mb-5"/>
            <div className={cn("grid grid-cols-3 gap-[50px]", listClassName)}>
                {items.map((product, i) => (
                    <ProductCard
                        key={product.id}
                        id={product.id}
                        name={product.name}
                        imageUrl={product.imageUrl}
                        price={product.items[0].price}
                    />
                ))}
            </div>
        </div>
    );
};