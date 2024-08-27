import React from 'react';
import {Title} from './title';
// import { Button } from '../ui';
import {cn} from "@/lib/utils";
import {Button} from "@/components/ui/button";
import {Plus} from "lucide-react";

// import { Ingredient } from '@prisma/client';

interface Props {
    id: number;
    name: string;
    price: number;
    imageUrl: string;
    ingredients: any;
    // ingredients: Ingredient[];
    className?: string;
}

export const ProductCard: React.FC<Props> = ({
                                                 id,
                                                 name,
                                                 price,
                                                 imageUrl,
                                                 ingredients,
                                                 className,
                                             }) => {
    return (
        <div className={cn(className)}>
            <div className="flex justify-center p-6 bg-secondary rounded-lg h-[260px]">
                <img className="w-[215px] h-[215px]" src={imageUrl} alt="Logo"/>
            </div>
            <Title text={name} size="sm" className="mb-1 mt-3 font-bold"/>
            <p className="text-sm text-gray-400">
                Цыпленок, моцарелла, сыры чеддер и пармезан, сырный соус, томаты, соус альфредо, чеснок
            </p>

            <div className="flex justify-between items-center mt-4">
                <span className="text-[20px]">
                  от <b>{price} ₽</b>
                </span>
                <Button variant="secondary">
                    <Plus size={20} className="mr-1"/>
                    Добавить
                </Button>
            </div>
        </div>
    );
};