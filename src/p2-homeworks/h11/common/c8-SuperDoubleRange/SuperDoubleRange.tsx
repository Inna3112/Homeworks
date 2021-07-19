import React, {ChangeEvent} from 'react'
import {Slider} from "@material-ui/core";
import s from './SuperDoubleRange.module.css'

type SuperDoubleRangePropsType = {
    onChangeRange?: (value: number| number[]) => void
    value?: number[]
    // min, max, step, disable, ...
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange, value,
        // min, max, step, disable, ...
    }
) => {
    // сделать самому, можно подключать библиотеки
const handleChangeSlider = (e: ChangeEvent<{}>, newValue: number| number[]) => {
    onChangeRange && onChangeRange(newValue)
}
    return (
        <>
            <div className={s.sliderStyle}>
                <Slider
                    value={value}
                    onChange={handleChangeSlider}
                    valueLabelDisplay='auto'
                    aria-labelledby='range-slider'
                />
            </div>
        </>
    )
}

export default SuperDoubleRange
