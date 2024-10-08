import React, { ButtonHTMLAttributes } from 'react';
import {Checkbox} from "@/components/ui/checkbox";
// import { Checkbox } from '../ui/checkbox';

export interface FilterCheckboxProps {
    text: string;
    // надпись чекбокса
    value: string;
    // значение чекбокса
    endAdornment?: React.ReactNode;
    // jsx после текста (иконка)
    onCheckedChange?: (checked: boolean) => void;
    checked?: boolean;
}

export const FilterCheckbox: React.FC<FilterCheckboxProps> = ({
                                                                 text,
                                                                 value,
                                                                 endAdornment,
                                                                 onCheckedChange,
                                                                 checked,
                                                             }) => {
    return (
        <div className="flex items-center space-x-2">
            <Checkbox
                onCheckedChange={onCheckedChange}
                checked={checked}
                value={value}
                className="rounded-[8px] w-6 h-6"
                id={`checkbox-${String(value)}`}
            />
            <label htmlFor={`checkbox-${String(value)}`} className="leading-none cursor-pointer flex-1">
                {/*htmlFor чтобы при клике на label были изменения чекбокса*/}
                {text}
            </label>
            {endAdornment}
        </div>
    );
};