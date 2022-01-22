import LayoutGeneral from "../../components/LayoutGeneral/LayoutGeneral";
import dstos from '../../assets/img/dsots.svg';
import './PaymentPage.scss';
import plus from '../../assets/img/ic-actions-add-simple.svg';
import path from '../../assets/img/Path.svg'
import bottomArrow from '../../assets/img/arrowBottom.png'
import arrowLeft from '../../assets/img/arrowLeft.png'
import arrowRight from '../../assets/img/arrowRight.png'


const PaymentPage = () => {
    return(
        <LayoutGeneral>
            <div className='titleBlock'>
                <img src={dstos} alt={"bgc-logo"} className='dsot'/>
                <div className='title-titleBlock'>
                    Финансы
                </div>
            </div>
            <div className='topPin'>
                <div className='blockPin'>
                    <div className='topAcc colorAcc'>Все Операции</div>
                    <div className='topPiners'>История Пополнения</div>
                    <div className='topPiners'>История Вывода</div>
                    <div className='topPiners'>Расходы</div>
                    <div className='topPiners'>Заработано</div>
                </div>
            </div>
            <div className='overall-balance'>
                <div className='alltime-balance'>
                    <div className='money-one'>+0,00 ₽</div>
                    <div className='text-above-money'>За Все Время</div>
                </div>
                <div className='two-button-balance'>
                    <div className='one-button-up-balance'>Пополнить баланс <img src={plus} className='ic-actions-add-simple'/></div>
                    <div className='second-button-up-balance'>Вывести средства   <img src={path} className='ic-actions-add-simple'/></div>
                </div>
                <div className='alltime-balance'>
                    <div className='money-one'>0,00</div>
                    <div className='text-above-money'>Общий Баланс</div>
                </div>
            </div>
            <div className="history-view-container">
                <div className="history-view-section">
                    <div className="history-view-section_block-table">
                        <div className="section-block_image">
                            <div className="text-date-balance balabance">
                            Дата<img src={bottomArrow} className='babybanace-img-first'/>
                            </div>
                        </div>
                        <div className="section-block_text-history-view">
                            <div className="section-block_title-inscription-balance blakabance">Описание</div>
                            <div className="section-block_text-inscription_block brikabance">
                                <div className="section-block_text-inscription_first-balance">Статус</div>
                            </div>
                        </div>
                        <div className="redirect-block-balance babybanace">
                        Сумма<img src={bottomArrow} className='babybanace-img-first'/>
                        </div>
                    </div>
                </div>
                <div className="history-view-section">
                    <div className="history-view-section_block">
                        <div className="section-block_image">
                            <div className="text-date-balance">
                            15 Фев. в 22:12
                            </div>
                        </div>
                        <div className="section-block_text-history-view">
                            <div className="section-block_title-inscription-balance">Вывод баланса #2478271</div>
                            <div className="section-block_text-inscription_block">
                                <div className="section-block_text-inscription_first-balance">Ожидание 48 часов.</div>
                            </div>
                        </div>
                        <div className="redirect-block-balance">
                        +163.50 ₽
                        </div>
                    </div>
                </div>
                <div className="history-view-section">
                    <div className="history-view-section_block">
                        <div className="section-block_image">
                            <div className="text-date-balance">
                            15 Фев. в 22:12
                            </div>
                        </div>
                        <div className="section-block_text-history-view">
                            <div className="section-block_title-inscription-balance">Пополнение баланса #2478271</div>
                            <div className="section-block_text-inscription_block">
                                <div className="section-block_text-inscription_secc-balance">Завершено</div>
                            </div>
                        </div>
                        <div className="redirect-block-balance">
                        +163.50 ₽
                        </div>
                    </div>
                </div>
                <div className="history-view-section">
                    <div className="history-view-section_block">
                        <div className="section-block_image">
                            <div className="text-date-balance">
                            15 Фев. в 22:12
                            </div>
                        </div>
                        <div className="section-block_text-history-view">
                            <div className="section-block_title-inscription-balance">Пополнение баланса #2478271</div>
                            <div className="section-block_text-inscription_block">
                            <div className="section-block_text-inscription_secc-balance">Завершено</div>                            </div>
                        </div>
                        <div className="redirect-block-balance">
                        +163.50 ₽
                        </div>
                    </div>
                </div>
                <div className="history-view-section">
                    <div className="history-view-section_block">
                        <div className="section-block_image">
                            <div className="text-date-balance">
                            15 Фев. в 22:12
                            </div>
                        </div>
                        <div className="section-block_text-history-view">
                            <div className="section-block_title-inscription-balance">Пополнение баланса #2478271</div>
                            <div className="section-block_text-inscription_block">
                            <div className="section-block_text-inscription_secc-balance">Завершено</div>                            </div>
                        </div>
                        <div className="redirect-block-balance">
                        +163.50 ₽
                        </div>
                    </div>
                </div>
                <div className="history-view-section">
                    <div className="history-view-section_block">
                        <div className="section-block_image">
                            <div className="text-date-balance">
                            15 Фев. в 22:12
                            </div>
                        </div>
                        <div className="section-block_text-history-view">
                            <div className="section-block_title-inscription-balance">Пополнение баланса #2478271</div>
                            <div className="section-block_text-inscription_block">
                            <div className="section-block_text-inscription_secc-balance">Завершено</div>                            </div>
                        </div>
                        <div className="redirect-block-balance">
                        +163.50 ₽
                        </div>
                    </div>
                </div>
                <div className="history-view-section">
                    <div className="history-view-section_block">
                        <div className="section-block_image">
                            <div className="text-date-balance">
                            15 Фев. в 22:12
                            </div>
                        </div>
                        <div className="section-block_text-history-view">
                            <div className="section-block_title-inscription-balance">Пополнение баланса #2478271</div>
                            <div className="section-block_text-inscription_block">
                            <div className="section-block_text-inscription_secc-balance">Завершено</div>                            </div>
                        </div>
                        <div className="redirect-block-balance">
                        +163.50 ₽
                        </div>
                    </div>
                </div>
                <div className="history-view-section">
                    <div className="history-view-section_block">
                        <div className="section-block_image">
                            <div className="text-date-balance">
                            15 Фев. в 22:12
                            </div>
                        </div>
                        <div className="section-block_text-history-view">
                            <div className="section-block_title-inscription-balance">Пополнение баланса #2478271</div>
                            <div className="section-block_text-inscription_block">
                            <div className="section-block_text-inscription_secc-balance">Завершено</div>                            </div>
                        </div>
                        <div className="redirect-block-balance">
                        +163.50 ₽
                        </div>
                    </div>
                </div>
                <div className="history-view-section">
                    <div className="history-view-section_block">
                        <div className="section-block_image">
                            <div className="text-date-balance">
                            15 Фев. в 22:12
                            </div>
                        </div>
                        <div className="section-block_text-history-view">
                            <div className="section-block_title-inscription-balance">Пополнение баланса #2478271</div>
                            <div className="section-block_text-inscription_block">
                            <div className="section-block_text-inscription_secc-balance">Завершено</div>                            </div>
                        </div>
                        <div className="redirect-block-balance">
                        +163.50 ₽
                        </div>
                    </div>
                </div>
                <div className="pages-list_history-view">
                            <div className="pages-list_arrow_history-view">
                                <img src={arrowLeft} alt="" />
                            </div>
                            <a className="pages-list_item_history-view pages-list_item-style_history-view pages-list_item-color_history-view pages-list_item-dimensions_history-view pages-list_item-dimentions_second_history-view pages-list_item-media_style_history-view" href="">1</a>
                            <a className="pages-list_item_history-view pages-list_item-style_history-view pages-list_item-color_history-view pages-list_item-dimensions_history-view pages-list_item-dimentions_second_history-view pages-list_item-media_style_history-view" href="">2</a>
                            <a className="pages-list_item_history-view pages-list_item-style_history-view pages-list_item-color-different_history-view pages-list_item-dimensions_history-view pages-list_item-dimentions_second_history-view pages-list_item-media_style_history-view" href="">3</a>
                            <a className="pages-list_item_history-view pages-list_item-style_history-view pages-list_item-color_history-view pages-list_item-dimensions_history-view pages-list_item-dimentions_second_history-view pages-list_item-media_style_history-view" href="">334</a>
                            <div className="pages-list_arrow_history-view">
                                <img src={arrowRight} alt="" />
                            </div>
                        </div>
            </div>
        </LayoutGeneral>
    );
}

export default PaymentPage