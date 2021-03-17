import React, { useState } from 'react'
import Select from '../Select'
import "./SearchArea.css"

const SearchArea: React.FC = () => {

    return (
        <div className="SearchArea">
            <div className="SearchArea__form">
                <h2 className="SearchArea__title_1">Bạn đang tìm kiếm gì?</h2>

                <input className="SearchArea__form__input" type="text"
                    placeholder="nhập nội dung tìm kiếm"
                    name="fillterName"
                />

            </div>

            <div>
                <h3 className="SearchArea__title_2">Phòng ban</h3>
                <Select list={['tất cả', 'Hành chính', 'CNTT']}
                    size={1} />
            </div>

            <div>

                <h3 className="SearchArea__title_2">Trạng thái</h3>
                <Select list={['tất cả', 'Processing', 'Shipped', 'Cancel']}
                    size={1} />
            </div>

            <button className="SearchArea__btn_fillter"></button>
            <button className="SearchArea__btn_cancel"><b>Bỏ lọc</b></button>
            <button className="SearchArea__btn_search">Tìm kiếm</button>
        </div>
    );
}
export default SearchArea;
