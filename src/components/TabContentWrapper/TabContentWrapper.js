import React from 'react';
import s from './TabContentWrapper.module.scss'
import CustomSelect from "../CustomSelect/CustomSelect";
import BtnPurple from "../UI/BtnPurple/BtnPurple";

const TabContentWrapper = () => {
    const selectsData = [
        {title: 'ТИП ПИН-КОДА', options: [{name: 'Снаряжение 1', img: false}, {name: 'Снаряжение 2', img: false}]},
        {title: 'СОДЕРЖИМОЕ', options: [{name: 'Makmilan Gr-30', img: true}, {name: 'Makmilan Gr-32', img: true}]},
        {title: 'СРОК', options: [{name: 'Навсегда', img: true}, {name: 'Навсегда 2', img: true}]},
    ]
    return (
        <div className={s.main}>
            <div className={s.selectLine}>
                <CustomSelect data={selectsData[0]} />
                <CustomSelect data={selectsData[1]} />
            </div>
            <div className={s.selectLine}>
                <CustomSelect data={selectsData[2]} />
                <div className={s.gridItem}>
                    <h4 className={s.title}>КОЛ-ВО</h4>
                    <p className={s.content}>25</p>
                </div>
            </div>
            <div className={s.range}>
                <div className="card bg-white border-0 mt-2 p-2">
                    <h3 className="mx-3">Цена</h3>
                    <div className={s.customRange}>
                        <div className={s.lines1}/>
                        <div className={s.circles1}/>
                        <div className={s.lines2}/>
                        <div className={s.circles2}/>
                        <div className={s.lines3}/>
                    </div>
                    <div className={s.count}>
                        <div className={s.countStart}>
                            <p>от</p>
                            <div className={s.counts}>
                                895
                            </div>
                        </div>
                        <div className={s.countStart}>
                            <p>до</p>
                            <div className={s.counts}>
                                15 895
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={s.btnWrapper}>
                <BtnPurple width={'220px'} text={'Заказать товар'}/>
            </div>
        </div>
    );
};

export default TabContentWrapper;