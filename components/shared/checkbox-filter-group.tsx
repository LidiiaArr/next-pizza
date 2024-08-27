'use client'
import React, {ChangeEvent} from "react";
import {FilterCheckbox, FilterCheckboxProps} from "@/components/shared/filter-checkbox";
import {Input} from "@/components/ui/input";

type Item = FilterCheckboxProps

interface Props {
    title: string;
    items: Item[];
    defaultItems: Item[];
    // при нераскрытом варианте чекбоксов
    limit?: number;
    // loading?: boolean;
    searchInputPlaceholder?: string;
    onChange?: (values: string[]) => void;
    // onClickCheckbox?: (id: string) => void;
    defaultValue?: string[];
    // selected?: Set<string>;
    className?: string;
    // name?: string;
}

export const CheckboxFilterGroup: React.FC<Props> = ({
                                                         title,
                                                         items,
                                                         defaultItems,
                                                         limit = 5,
                                                         searchInputPlaceholder = 'Поиск...',
                                                         className,
                                                         onChange,
                                                         defaultValue
                                                         // loading,
                                                         // onClickCheckbox,
                                                         // selected,
                                                         // name,
                                                     }) => {
    const [showAll, setShowAll] = React.useState(false);
    const [searchValue, setSearchValue] = React.useState('');

    const onChangeSearchInput = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value)
    }
    const filteredItems = items.filter((item) => item.text.toLowerCase().includes(searchValue.toLowerCase()))
    const list = showAll ? filteredItems : defaultItems.slice(0, limit);

    return (
        <div className={className}>
            <p className='font-bold mb-3'>{title}</p>

            {showAll && (
                <div className='mb-5'>
                    <Input
                        placeholder={searchInputPlaceholder}
                        className='bg-gray-50 border-none'
                        onChange={onChangeSearchInput}
                    />
                </div>
            )}

            <div className="flex flex-col gap-4 max-h-96 pr-2 overflow-auto scrollbar">
                {list.map((item, index) => (
                    <FilterCheckbox
                        key={index}
                        text={item.text}
                        value={item.value}
                        endAdornment={item.endAdornment}
                        checked={false}
                        onCheckedChange={(ids) => console.log(ids)}
                        // checked={selected?.has(item.value)}
                        // onCheckedChange={() => onClickCheckbox?.(item.value)}
                        // name={name}
                    />
                ))}
            </div>

            {items.length > limit && (
                <div className={showAll ? 'border-t border-t-neutral-100 mt-4' : ''}>
                    <button onClick={() => setShowAll(!showAll)} className="text-primary mt-3">
                        {showAll ? 'Скрыть' : '+ Показать все'}
                    </button>
                </div>
            )}
        </div>
    )
}